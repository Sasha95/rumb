import React from "react"
import styles from "./pay.module.css"
import { Row, Col, Input } from "antd"

interface IProps {
    title: string;
    title1: string;
    placeholder: string;
    placeholder1: string;
}

export const Template: React.FC<IProps> = ({title, title1, placeholder, placeholder1}) => {
    return(
        <Row className={styles.wrapper}>
            <Col span={11}>
                <div className={styles.title}>{title}</div>
                <Input className={styles.input} placeholder={placeholder} />
            </Col>
            <Col span={11} offset={2}>
                <div className={styles.title}>{title1}</div>
                <Input className={styles.input} placeholder={placeholder1} />
            </Col>            
        </Row>
    )
}