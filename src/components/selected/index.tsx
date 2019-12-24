import React from "react"
import styles from "./selected.module.css"
import { Col } from "antd"

interface IProps {
    imgage: string;
    descriptionImage: string;
    title: string;
    description: string;
}

export const SelectedItem: React.FC<IProps> = ({imgage, title, description, descriptionImage}) => {
    return(
        <Col span={2}>
            <div>
                <img src={imgage} alt={descriptionImage} />
            </div>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.descrition}>
                {description}
            </div>
        </Col>
    )
}