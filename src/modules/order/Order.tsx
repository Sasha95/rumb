import React, { useEffect, useState } from "react"
import styles from "./order.module.css"
import globalStyle from "../../core/theme/commonStyle.module.css"
import { data } from "../../api/mock/cards"
import { useParams } from "react-router-dom"
import { ICard } from "../../api/dto/Card"
import { Row, Col, Rate } from "antd"
import like from "../../resources/like.svg"
import share from "../../resources/share.svg"
import book from "../../resources/book.svg"
import calendar from "../../resources/calendar.svg"
import time from "../../resources/time.svg"
import thunder from "../../resources/thunder.svg"
import equipment from "../../resources/equipment.svg"
import { SelectedItem } from "../../components/selected"
import { OrderInformation } from "../../components/orderInformation/OrderInformation"

export const Order = () => {
    const { orderId } = useParams();
    const selected: ICard = data.filter(x => x.id === Number(orderId))[0];

    return (
        <div className={styles.container}>
            <div className={styles["image-container"]}>
                <table style={{ marginLeft: "120px" }}>
                    <tbody>
                        <tr>
                            <td style={{width: "408px"}}>
                                <img src={selected.images[0]}
                                    className={styles.img}
                                    alt={"img"}
                                />
                            </td>
                            <td>
                                <img src={selected.images[1]}
                                    style={{ marginLeft: "24px", marginRight: "24px" }}
                                    className={styles.img}
                                    alt={"img"}
                                />
                            </td>
                            <td>
                                <span className={styles["social-container"]}>
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
                                </span>}
                        </td>
                        </tr>

                        <tr>
                            <td>
                                <div className={styles["common-text"]}>
                                    c 23 мар 2020 по 31 мар 2020
                        </div>
                                <div className={styles["common-interes"]}>
                                    Обучение регате от профессионалов
                        </div>
                                <div className={styles["common-text"]}>
                                    ГЕНТ, БЕЛЬГИЯ
                        </div>
                        </td>
                            <td>
                                <SelectedItem imgage={book} title={"Интерес"} description={"Регата"} descriptionImage={"regata"} />
                                <SelectedItem imgage={calendar} title={"Дата начала"} description={"23 марта 2020"} descriptionImage={"date"} />
                                <SelectedItem imgage={time} title={"Длительность"} description={"7 дней"} descriptionImage={"dureation"} />
                                <SelectedItem imgage={thunder} title={"Уровень сложности"} description={"Для новичков"} descriptionImage={"level"} />
                                <SelectedItem imgage={equipment} title={"Оборудование"} description={"Треб. снаряжение"} descriptionImage={"equimpment"} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <OrderInformation operator={true} title={"Чем мы займемся"}>
                <div className={styles.font}>{selected.description}</div>
            </OrderInformation>
            <OrderInformation title={"Что включено"}>
                <div className={styles["forn-includ"]}>Инвентарь</div>
                <div className={styles.font}>{selected.including.inventory}</div>
                <div className={styles["forn-includ"]}>Напитки</div>
                <div className={styles.font}>{selected.including.beverages}</div>
                <div className={styles["forn-includ"]}>Питание</div>
                <div className={styles.font}>{selected.including.nutrition}</div>
            </OrderInformation>
            <OrderInformation title={"Требования к участнику"}>
                <div className={styles.font}>{selected.requires}</div>
            </OrderInformation>
            <OrderInformation title={"Где мы будем"}>
                <div className={styles.font}>{selected.adress.fullAdress}</div>
                <div className={styles.font}>{selected.adress.timeStart}</div>
            </OrderInformation>
            <OrderInformation title={"Правила отмены брони"}>
                <div className={styles.font}>{selected.cancelReserv}</div>
                <div className={globalStyle["font-underline"]}>перейти к правилам</div>
            </OrderInformation>
            <hr className={styles.hr} />
            <Row type={"flex"} align={"middle"}>
                <Col style={{ paddingLeft: "120px" }}>
                    <div >
                        7 дней
                    </div>
                    <div>
                        Обучение регате от профессионалов
                    </div>
                </Col>
                <Col offset={13} span={3}>
                    <span className={globalStyle.cost}>
                        {selected.cost}
                        {selected.valute}
                    </span>
                    <span className={globalStyle["card-font"]}>{selected.from}</span>
                    <div>
                        <span className={globalStyle["font-rate"]}>
                            {selected.rate}
                            {"  "}
                            <Rate
                                className={globalStyle["font-rate"]}
                                disabled
                                allowHalf
                                defaultValue={Number(selected.rate.toFixed(1))}
                            />
                        </span>
                        <span className={globalStyle["card-font"]}>{selected.countRate}</span>
                    </div>
                </Col>
                <Col span={1}>
                    <span className={styles["btn-order"]}>Заказать</span>
                </Col>
            </Row>
        </div>
    )
}