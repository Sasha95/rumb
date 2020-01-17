import React from "react"
import styles from "./resultCard.module.css"
import { Row, Col } from "antd"
import users from "../../../resources/users.svg"
import { useSelector } from "react-redux"
import { orderSelector } from "../../../store/order/orderSelectors"
import { currentValuteSelector } from "../../../store/currentValute/currentValuteSelectors"
import date from "../../../resources/dateBlack.svg"
import moment from "moment"

export const RezultCard = () => {
    const order = useSelector(orderSelector);
    const valute = useSelector(currentValuteSelector)
    return (
        <Row className={styles.container}>
            <Row type="flex">
                <Col className={styles.img}>
                    <img src={users} alt="users" />
                </Col>
                <Col className={styles.text}>
                    {order.members === 1
                        ? `${order.members} гость`
                        : order.members > 1 && order.members < 5
                            ? `${order.members} гостя`
                            : `${order.members} гостей`
                    }
                </Col>
            </Row>
            <Row className={styles.textContainer} type="flex">
                <Col className={styles.img}><img src={date} alt="date" /></Col>
                <Col className={styles.text}>
                    {moment(order.dateOfStart).format('D MMM YYYY')}г. - {moment(order.dateOfEnd).format('D MMM YYYY')}г.
                </Col>
            </Row>
            <hr className={styles.hr} />
            <Row className={styles.textContainer} type="flex" justify="space-between">
                <Col className={styles.text}>Стоимость тура</Col>
                <Col className={styles.text}>{valute.symbol}{order.cost}</Col>
            </Row>
            <Row className={styles.textContainer} type="flex" justify="space-between">
                <Col className={styles.text}>Сбор за услуги Rumb</Col>
                <Col className={styles.text}>{valute.symbol}{order.services}</Col>
            </Row>
            <hr className={styles.hr} />
            <Row className={styles.textContainer} type="flex" justify="space-between">
                <Col className={styles.textSum}>Итого ({valute.name})</Col>
                <Col className={styles.textSum}>{valute.symbol}{order.sum}</Col>
            </Row>
        </Row>
    )
}