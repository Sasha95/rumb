import React, { useState, useRef, useCallback, useEffect } from "react"
import styles from "./pay.module.css"
import { ICard } from "../../../../api/dto/Card"
import { Row, Col, Input, Modal } from "antd"
import classnames from "classnames"
import globalStyle from "../../../../core/theme/commonStyle.module.css"
import { useMedia } from "../../../../hooks/useMedia"
import close from "../../../../resources/close.svg"
import { RezultCard } from "../ResultCard"
import { injectStripe } from 'react-stripe-elements'
import { baseFetch } from "../../../../api/BaseFetch"
import { IPaymentRequest } from "../../../../api/dto/PaymentRequest"
import { useSelector } from "react-redux"
import { orderSelector } from "../../../../store/order/orderSelectors"
import { currentValuteSelector } from "../../../../store/currentValute/currentValuteSelectors"
import { useLocation, matchPath } from "react-router-dom"
import { IPaymentResponse } from "../../../../api/dto/PaymentResponse"
import { URL, } from "../../../../settings"

const Pay = () => {
    const [show, setShow] = useState(false);
    const [statusPay, setStatusPay] = useState();
    const Sizes = ["SMALL"];
    const isMinimum = useMedia(["(max-width: 800px)"], Sizes, "BIG");
    const orderData = useSelector(orderSelector);
    const currency = useSelector(currentValuteSelector);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const location = useLocation();
    const stripe = Stripe("pk_test_j7KlMPUXrrTh3PpKNZRzhRfD00F7l2qfRy");
    useEffect(() => {
        console.log(location.pathname.includes("success"))
        console.log(location)
        if (location.pathname.includes("success")) {
            setStatusPay(true)
            setShow(true);
        } else if (location.pathname.includes("fail")) {
            setStatusPay(false)
            setShow(true);
        }

    }, [location.pathname])

    const handlePay = async () => {
        const data: IPaymentRequest = {
            id: orderData.id,
            title: orderData.title,
            description: orderData.description,
            amount: orderData.sum,
            currency: currency.name,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
        }
        const order = await baseFetch<IPaymentRequest, IPaymentResponse>('stripe/charge', data, "POST");
        if (stripe && order.result) {
            stripe.redirectToCheckout({ sessionId: order.result.id })
                .then((x) => { console.log(x.error) });
        }
        // setShow(true);
        // const {error} = await stripe.redirectToCheckout({
        //             items: [
        //               // Replace with the ID of your SKU
        //               {sku: 'sku_GaSnF1EpeiewMm', quantity: 1}
        //             ],
        //             successUrl: 'https://example.com/success',
        //             cancelUrl: 'https://example.com/cancel',
        //             // customerEmail: 'customer@example.com',
        //           })
        // console.log(error)

    }

    return (
        <>
            <Modal
                visible={show}
                footer={null}
                centered
                closeIcon={<img src={close} alt="close" />}
                onCancel={() => setShow(false)}
                width={isMinimum === "SMALL" ? "375px" : ""}>
                <div className={styles.containerModal}>
                    <div className={styles.titleModal}>{statusPay ? "Оплата прошла успешна" : "Оплата не прошла"}</div>
                    {statusPay ?
                        <div className={styles.textModal}>Дополнительную информацию можно найти в
                    <span className={styles.infoLink}> личном кабинете</span> или связаться с оператором тура.</div>
                        :
                        <div className={styles.textModal}>
                            <span className={styles.infoLink}>Попробуйте еще раз</span> или обратитесь в техническую поддержу.
                    </div>
                    }
                </div>
            </Modal>

            <Row justify="space-between" type="flex">
                <Col offset={3}>
                    <div onClick={handlePay} className={styles.mainTitle}>Оплатить</div>
                    <div className={styles.container}>
                        <Row className={styles.wrapper}>
                            <Col span={11}>
                                <div className={styles.title}>Имя</div>
                                <Input onChange={x => setFirstName(x.currentTarget.value)} className={styles.input} placeholder={"Татьяна"} />
                            </Col>
                            <Col span={11} offset={2}>
                                <div className={styles.title}>Фамилия</div>
                                <Input onChange={x => setLastName(x.currentTarget.value)} className={styles.input} placeholder={"Воробьева"} />
                            </Col>
                        </Row>

                        <Col style={{ marginTop: "40px" }}>
                            <div className={styles.title}>Номер телефона</div>
                            <Input onChange={x => setPhoneNumber(x.currentTarget.value)} className={styles.input} placeholder={"Номер телефона"} />
                        </Col>

                    </div>
                    <div className={styles.info}>
                        Нажимая кнопку ниже, я принимаю условия следующих политик: <span className={styles.infoLink}>Требования к
                    участнику</span>, <span className={styles.infoLink}>Правила отмены</span> и <span className={styles.infoLink}>Правила компенсации гостю</span>. Я так же соглашаюсь
                                        оплатить полную сумму, включая сборы за услуги.
                </div>
                    <div onClick={handlePay} className={classnames(globalStyle.buttonOrder, styles.btnContainer)}>Оплатить</div>
                </Col>
                <Col pull={2} style={{ marginTop: "30px" }}>
                    <RezultCard />
                </Col>
            </Row>
        </>
    )
}

export default injectStripe(Pay)