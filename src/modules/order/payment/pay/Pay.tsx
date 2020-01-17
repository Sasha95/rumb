import React, { useState } from "react"
import styles from "./pay.module.css"
import { ICard } from "../../../../api/dto/Card"
import { Row, Col, Input, Modal } from "antd"
import { Template } from "./Template"
import classnames from "classnames"
import globalStyle from "../../../../core/theme/commonStyle.module.css"
import { useMedia } from "../../../../hooks/useMedia"
import close from "../../../../resources/close.svg"
import { RezultCard } from "../ResultCard"

export const Pay = () => {
    const [show, setShow] = useState(false);
    const Sizes = ["SMALL"];
    const isMinimum = useMedia(["(max-width: 800px)"], Sizes, "BIG");

    return (
        <>
            <Modal
                visible={show}
                footer={null}
                centered
                closeIcon={<img src={close} alt="close"/>}
                onCancel={() => setShow(false)}
                width={isMinimum === "SMALL" ? "375px" : ""}>
                <div className={styles.containerModal}>
                    <div className={styles.titleModal}>Оплата прошла успешна</div>
                    <div className={styles.textModal}>Дополнительную информацию можно найти в
            <span className={styles.infoLink}> личном кабинете</span> или связаться с оператором тура.</div>
                </div>
            </Modal>
            <Row justify="space-between" type="flex">
                <Col offset={3}>
                    <div className={styles.mainTitle}>Оплатить</div>
                    <div className={styles.container}>
                        <Template
                            title="Имя"
                            title1="Фамилия"
                            placeholder="Татьяна"
                            placeholder1="Воробьева"
                        />
                        <Col style={{marginTop: "40px"}}>
                            <div className={styles.title}>E-mail</div>
                            <Input className={styles.input} placeholder={"Эл. адрес"} />
                        </Col>
                        <Col style={{marginTop: "40px"}}>
                            <div className={styles.title}>Номер телефона</div>
                            <Input className={styles.input} placeholder={"Номер телефона"} />
                        </Col>
                       
                    </div>
                    <div className={styles.info}>
                        Нажимая кнопку ниже, я принимаю условия следующих политик: <span className={styles.infoLink}>Требования к
                    участнику</span>, <span className={styles.infoLink}>Правила отмены</span> и <span className={styles.infoLink}>Правила компенсации гостю</span>. Я так же соглашаюсь
                        оплатить полную сумму, включая сборы за услуги.
                </div>
                    <div onClick={() => { setShow(true) }} className={classnames(globalStyle.buttonOrder, styles.btnContainer)}>Оплатить</div>
                </Col>
                <Col pull={2} style={{marginTop: "30px"}}>
                    <RezultCard />
                </Col>
            </Row>
        </>
    )
}