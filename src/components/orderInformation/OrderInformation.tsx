import React from "react"
import styles from "./orderInformation.module.css"
import { Col, Row } from "antd"

interface IProps {
    title: string;
    operator?: boolean;
}

export const OrderInformation: React.FC<IProps> = ({ title, operator, children }) => {
    return (
        <Row style={{ paddingTop: "60px" }}>
            <Col span={6} offset={2}>
                <div className={styles["our-doing"]}>
                    {title}
                </div>
                {operator &&
                    <div className={styles["btn-call"]}>
                        Связаться с оператором
                </div>}
            </Col>
            <Col span={15}> {children} </Col>
        </Row>
    )
}