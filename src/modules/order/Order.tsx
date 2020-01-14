import React, { useState, useEffect } from "react";
import styles from "./order.module.css";
import globalStyle from "../../core/theme/commonStyle.module.css";
import { data } from "../../api/mock/cards";
import { useParams, useHistory } from "react-router-dom";
import { ICard } from "../../api/dto/Card";
import { Rate, Row, Col } from "antd";
import { OrderInformation } from "../../components/orderInformation/OrderInformation";
import moment from "moment";
import Truncate from "react-truncate";
import classnames from "classnames"
import { ImageContainer } from "./ImageContainer";
import { CardInfo } from "./CardInfo";
import { RangeDate } from "../../components/rangeDate/RangeDate";
import { CalendarModal } from "../../components/rangeDate/CalendarModal";

export const Order = () => {
    const { orderId } = useParams();
    const selected: ICard = data.filter(x => x.id === Number(orderId))[0];
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState();

    const handleToggle = () => {
        setShow(!show)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const handleDate = (startDate: string, endDate: string) => {
        console.log(startDate, endDate)
    }
    const history = useHistory();
    const handlePay = () => {
        setShowModal(true)
        // history.push(`/rumb/payment${selected.id}/requires`)
    }

    return (
        <>
        <CalendarModal show={showModal} setShow={setShowModal} handleDate={handleDate}>
            <div>TEST!!!</div>
        </CalendarModal>
        <div className={styles.container}>
            <div className={globalStyle.imageContainer}>       
                <ImageContainer selected={selected} />        
                <CardInfo selected={selected}/>
            </div>
            <OrderInformation operator={true} title={"Чем мы займемся"}>
                <Truncate
                    trimWhitespace
                    lines={show ? 5 : false}
                    open={show}
                    className={globalStyle.fontOrder}
                >
                    <div>{selected.description}</div>
                </Truncate>
                <div className={globalStyle.fontUnderline} onClick={handleToggle}>{show ? "раскрыть" : "скрыть"}</div>
            </OrderInformation>
            <OrderInformation title={"Что включено"}>
                <div className={styles.fontInclud}>Инвентарь</div>
                <div className={classnames(styles.font, styles.paddingInclud)}>{selected.including.inventory}</div>
                <div className={styles.fontInclud}>Напитки</div>
                <div className={classnames(styles.font, styles.paddingInclud)}>{selected.including.beverages}</div>
                <div className={styles.fontInclud}>Питание</div>
                <div className={classnames(styles.font, styles.paddingInclud)}>{selected.including.nutrition}</div>
            </OrderInformation>
            <OrderInformation title={"Требования к участнику"}>
                <div className={styles.font}>{selected.requires}</div>
            </OrderInformation>
            <OrderInformation title={"Где мы будем"}>
                <div className={styles.font}>{selected.adress.fullAdress}</div>
                <div className={styles.font}>Начало в {selected.adress.timeStart} по местному времени.</div>
            </OrderInformation>
            <OrderInformation title={"Правила отмены брони"}>
                <div className={styles.font}>{selected.cancelReserv}</div>
                <div className={globalStyle.fontUnderline}>
                    перейти к правилам
                </div>
            </OrderInformation>

            <hr className={styles.hr} />
            <Row justify={"center"} type={"flex"}>
                <Col className={classnames(globalStyle.leftContainer, styles.centerContainer)}>
                    <div className={styles.footerDay}>{moment(selected.dateOfEnd).from(moment(selected.dateOfStart), true)}</div>
                    <div className={styles.footerText}>{selected.title}</div>
                </Col>
                <Col className={styles.footerContainer}>
                    <div>
                        <span className={globalStyle.cost}>
                            {selected.cost}
                            {selected.valute}
                        </span>
                        <span className={globalStyle.cardFont}>{selected.from}</span>
                        <div>
                            <span className={globalStyle.fontRate}>
                                {selected.rate}
                                {"  "}
                                <Rate
                                    className={globalStyle.fontRate}
                                    disabled
                                    allowHalf
                                    defaultValue={Number(selected.rate.toFixed(1))}
                                />
                            </span>
                            <span className={globalStyle.cardFont}>
                                {selected.countRate}
                            </span>
                        </div>
                    </div>
                </Col>
                <Col className={styles.centerContainer}>
                    <div onClick={handlePay} className={styles.btnOrder}>Заказать</div>
                </Col>
            </Row>
        </div>
        </>
    );
};
