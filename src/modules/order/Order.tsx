import React from "react";
import styles from "./order.module.css";
import globalStyle from "../../core/theme/commonStyle.module.css";
import { data } from "../../api/mock/cards";
import { useParams } from "react-router-dom";
import { ICard } from "../../api/dto/Card";
import { Rate } from "antd";
import like from "../../resources/like.svg";
import share from "../../resources/share.svg";
import book from "../../resources/book.svg";
import calendar from "../../resources/calendar.svg";
import time from "../../resources/time.svg";
import thunder from "../../resources/thunder.svg";
import equipment from "../../resources/equipment.svg";
import { SelectedItem } from "../../components/selected";
import { OrderInformation } from "../../components/orderInformation/OrderInformation";
import moment from "moment";

export const Order = () => {
    const { orderId } = useParams();
    const selected: ICard = data.filter(x => x.id === Number(orderId))[0];


    return (
        <div className={styles.container}>
            <div className={styles["image-container"]}>
                <table className={styles.containerCenter}>
                    <tbody>
                        <tr style={{verticalAlign: "top"}}>
                            <td style={{ width: "408px" }}>
                                <img
                                    src={selected.images[0]}
                                    className={styles.img}
                                    alt={"img"}
                                />
                            </td>
                            <td style={{ width: "0", whiteSpace: "nowrap", paddingRight: "20px" }}>
                                <img
                                    src={selected.images[1]}
                                    className={styles.img}
                                    alt={"img"}
                                />
                            </td>
                            <td>
                                <span className={styles["social-container"]}>
                                    <img
                                        src={selected.images[2]}
                                        className={styles.img}
                                        alt={"img"}
                                    />
                                    <div className={styles["social-like"]}>
                                        <img
                                            className={styles["share-like"]}
                                            src={share}
                                            alt={"share"}
                                        />
                                        <span className={styles["share-like-text"]}>
                                            Поделиться
                                    </span>
                                    </div>
                                    <div className={styles["social-share"]}>
                                        <img
                                            className={styles["share-like"]}
                                            src={like}
                                            alt={"like"}
                                        />
                                        <span className={styles["share-like-text"]}>Избранное</span>
                                    </div>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className={styles.containerCenter} style={{ marginTop: "50px" }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "408px", paddingRight: "24px" }}>
                                <div className={styles["common-text"]}>
                                    c {moment(selected.dateOfStart).format('D MMM YYYY')} по {moment(selected.dateOfEnd).format('D MMM YYYY')}
                                </div>
                                <div className={styles["common-interes"]}>
                                    {selected.title}
                                </div>
                                <div className={styles["common-text"]} style={{textTransform: "uppercase"}}>
                                    {selected.country} {selected.town? ", "+selected.town: ""}
                                </div>
                            </td>

                            <td style={{ width: "794px"}}>
                                <SelectedItem
                                    imgage={book}
                                    title={"Интерес"}
                                    description={selected.interes}
                                    descriptionImage={"regata"}
                                />
                                <SelectedItem
                                    imgage={calendar}
                                    title={"Дата начала"}
                                    description={moment(selected.dateOfStart).format('D MMMM YYYY')}
                                    descriptionImage={"date"}
                                />
                                <SelectedItem
                                    imgage={time}
                                    title={"Длительность"}
                                    description={moment(selected.dateOfEnd).from(moment(selected.dateOfStart), true)}
                                    descriptionImage={"dureation"}
                                />
                                <SelectedItem
                                    imgage={thunder}
                                    title={"Уровень сложности"}
                                    description={selected.professional}
                                    descriptionImage={"level"}
                                />
                                <SelectedItem
                                    imgage={equipment}
                                    title={"Оборудование"}
                                    description={selected.equipment}
                                    descriptionImage={"equimpment"}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <table className={styles.containerCenter}>
                <tbody>
                    <OrderInformation operator={true} title={"Чем мы займемся"}>
                        <div className={styles.font}>{selected.description}</div>
                    </OrderInformation>
                    <OrderInformation title={"Что включено"}>
                        <div className={styles["forn-includ"]}>Инвентарь</div>
                        <div className={styles.font} style={{paddingBottom: "10px", paddingTop: "10px"}}>{selected.including.inventory}</div>
                        <div className={styles["forn-includ"]}>Напитки</div>
                        <div className={styles.font} style={{paddingBottom: "10px", paddingTop: "10px"}}>{selected.including.beverages}</div>
                        <div className={styles["forn-includ"]}>Питание</div>
                        <div className={styles.font} style={{paddingTop: "10px"}}>{selected.including.nutrition}</div>
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
                        <div className={globalStyle["font-underline"]}>
                            перейти к правилам
                    </div>
                    </OrderInformation>
                </tbody>
            </table>
            <hr className={styles.hr} />
            <table className={styles.containerCenter}>
                <tbody>
                    <tr>
                        <td style={{ width: "408px" }}>
                            <div className={styles.footerDay}>{moment(selected.dateOfEnd).from(moment(selected.dateOfStart), true)}</div>
                            <div className={styles.footerText}>{selected.title}</div>
                        </td>
                        <td align={"right"} style={{ width: "611px" }}>
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
                                <span className={globalStyle["card-font"]}>
                                    {selected.countRate}
                                </span>
                            </div>
                        </td>
                        <td style={{paddingLeft: "94px"}}>
                            <span className={styles["btn-order"]}>Заказать</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
