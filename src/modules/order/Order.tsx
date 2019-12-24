import React, { useEffect, useState } from "react"
import styles from "./order.module.css"
import { data } from "../../api/mock/cards"
import { useParams } from "react-router-dom"
import { ICard } from "../../api/dto/Card"
import { Row, Col } from "antd"
import like from "../../resources/like.svg"
import share from "../../resources/share.svg"
import book from "../../resources/book.svg"
import calendar from "../../resources/calendar.svg"
import time from "../../resources/time.svg"
import thunder from "../../resources/thunder.svg"
import equipment from "../../resources/equipment.svg"
import { SelectedItem } from "../../components/selected"

export const Order = () => {
    const { orderId } = useParams();
    const [selected, setSelected] = useState<ICard>();

    useEffect(() => {
        if (orderId) {
            setSelected(data.filter(x => x.id === Number(orderId))[0]);
        }
    }, [])
    return (
        <div>
            <div className={styles["image-container"]}>
                <Row type={"flex"} justify={"center"}>
                    {selected && <img src={selected.images[0]}
                        className={styles.img}
                        alt={"img"}
                    />}
                    {selected && <img src={selected.images[1]}
                        style={{ marginLeft: "24px", marginRight: "24px" }}
                        className={styles.img}
                        alt={"img"}
                    />}
                    {selected &&
                        <div className={styles["social-container"]}>
                            <img src={selected.images[2]}
                                className={styles.img}
                                alt={"img"} />
                            <div className={styles["social-like"]}>
                                <img className={styles["share-like"]} src={share} alt={"share"} />
                                <span className={styles["share-like-text"]}>Поделиться</span>
                            </div>
                            <div className={styles["social-share"]}>
                                <img className={styles["share-like"]} src={like} alt={"like"} />
                                <span className={styles["share-like-text"]}>Избранное</span>
                            </div>
                        </div>}
                </Row>
                <Row>
                    <Col offset={1} span={5}>
                        <div>
                            c 23 мар 2020 по 31 мар 2020
                        </div>
                        <div>
                            Обучение регате от профессионалов
                        </div>
                        <div>
                            ГЕНТ, БЕЛЬГИЯ
                        </div>
                    </Col>
                    <Col span={2}>
                        <SelectedItem imgage={book} title={"Интерес"} description={"Регата"} descriptionImage={"regata"} />
                    </Col>
                    <Col span={2}>
                        <SelectedItem imgage={calendar} title={"Дата начала"} description={"23 марта 2020"} descriptionImage={"date"} />
                    </Col>
                    <Col span={2}>
                        <SelectedItem imgage={time} title={"Длительность"} description={"7 дней"} descriptionImage={"dureation"} />
                    </Col>
                    <Col span={2}>
                        <SelectedItem imgage={thunder} title={"Уровень сложности"} description={"Для новичков"} descriptionImage={"level"} />
                    </Col>
                    <Col span={2}>
                        <SelectedItem imgage={equipment} title={"Оборудование"} description={"Треб. снаряжение"} descriptionImage={"equimpment"} />
                    </Col>
                </Row>
            </div>
            <div>

            </div>
        </div>
    )
}