import React, { useState } from "react"
import { OrderInformation } from "../../../components/orderInformation/OrderInformation"
import { ICard } from "../../../api/dto/Card"
import globalStyle from "../../../core/theme/commonStyle.module.css"
import Truncate from "react-truncate"
import { Row, Col } from "antd"
import classnames from "classnames"

interface IProps {
    selected: ICard
}

export const Requires: React.FC<IProps> = ({ selected }) => {
    const [show, setShow] = useState(true);
    const handleToggle = () => {
        setShow(!show);
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
            <Row type={"flex"} justify={"center"}>
                <Col className={classnames(globalStyle.leftContainer)}>
                    <span></span>
                    <span></span>
                </Col>
                <Col className={classnames(globalStyle.rightContainer)}>fwafawf </Col>
            </Row>
        </>
    )
}