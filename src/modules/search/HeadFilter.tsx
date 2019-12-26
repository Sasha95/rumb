import React, { useState } from "react";
import styles from "./search.module.css";
import more from "../../resources/more.svg"
import { Row, Col } from 'antd';
import down from "../../resources/down.svg"
import classnames from "classnames";

const buttons = ["Дата", "1 участник", "Любая сложность", "Цена", "Без спецпредложений", "Длительность", "Снаряжение"]
export const HeadFilter = () => {
    const [selected, setSelected] = useState<number[]>([]);
    const handleActive = (e: any) => {
        const id = Number(e.target.id)
        if (selected.includes(id)) {
            setSelected(selected.filter(x => x !== id))
        } else {
            setSelected([...selected, id])
        }
    }
    return (
        <>
            {buttons.map((button, index) => (
                <div className={classnames(styles.btn, { [styles["btn-active"]]: selected.includes(index) })}
                    key={index}
                    id={String(index)}
                    onClick={handleActive}>
                    {button}
                </div>
            ))}
            <span className={styles.btn}>
                <img src={more} alt={"more"} />
                Другие фильтры
            </span>
            <Row type={"flex"} justify={"space-between"} style={{ paddingTop: "32px", width: "1200px" }}>
                <Col className={styles.text}>Более 300 вариантов приключений</Col>
                <Col style={{cursor: "pointer"}}>
                    Показать сначала дорогие
                    <img style={{ paddingLeft: "11px" }} src={down} alt="down" />
                </Col>
            </Row>
        </>
    )
}