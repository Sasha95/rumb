import React, { useState } from "react"
import { OrderInformation } from "../../../../components/orderInformation/OrderInformation"
import { ICard } from "../../../../api/dto/Card"
import globalStyle from "../../../../core/theme/commonStyle.module.css"
import Truncate from "react-truncate"
import { Row, Col } from "antd"
import classnames from "classnames"
import styles from "./requires.module.css";
import { useSelector } from "react-redux"
import { orderDateSelector } from "../../../../store/orderDate/orderDateSelectors"
import moment from "moment"
import { Day } from "./Day"
import { useHistory } from "react-router-dom"

interface IProps {
    selected: ICard
}

export const Requires: React.FC<IProps> = ({ selected }) => {
    const [show, setShow] = useState(true);
    const handleToggle = () => {
        setShow(!show);
    }
    const orderDay = useSelector(orderDateSelector);
    const dayStart = moment(orderDay.dateOfStart)
    const dayEnd = moment(orderDay.dateOfEnd)
    const history = useHistory();
    const handleNext = () => {
        history.push(`/rumb/payment${selected.id}/members`)
    }

    return (
        <>
            <OrderInformation operator={true} title={"Требования к участнику"}>
                <Truncate
                    trimWhitespace
                    lines={show ? 5 : false}
                    open={show}
                    className={globalStyle.fontOrder}
                >
                    <div>{selected.requires}</div>
                </Truncate>
                <div className={globalStyle.fontUnderline} onClick={handleToggle}>{show ? "раскрыть" : "скрыть"}</div>
            </OrderInformation>
            <Row type={"flex"} justify={"center"} style={{marginTop: "40px"}}>
                <Col className={globalStyle.leftContainer}>
                    <Day date={dayStart} selected={selected} />
                    <div onClick={handleNext} className={classnames(globalStyle.buttonOrder, styles.btnContainer)}>Согласиться и продолжить</div>
                </Col>
                <Col className={(globalStyle.rightContainer)}>
                    <Day date={dayEnd} selected={selected} title={"Завершающий день"} />
                </Col>
            </Row>
                
        </>
    )
}