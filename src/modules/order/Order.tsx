import React, { useState } from "react";
import styles from "./order.module.css";
import globalStyle from "../../core/theme/commonStyle.module.css";
import { data } from "../../api/mock/cards";
import { useParams } from "react-router-dom";
import { ICard } from "../../api/dto/Card";
import { Rate, Row, Col } from "antd";
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
import Truncate from "react-truncate";
import classnames from "classnames"

export const Order = () => {
    const { orderId } = useParams();
    const selected: ICard = data.filter(x => x.id === Number(orderId))[0];
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show)
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Row type={"flex"} justify={"center"} align={"top"}>
                    <Col>
                        <img src={selected.images[0]} alt={"img"} />
                    </Col>
                    <Col className={globalStyle.marginImage}>
                        <img src={selected.images[1]} alt={"img"} />
                    </Col>
                    <Col className={styles.socialContainer}>
                        <img src={selected.images[2]} alt={"img"} />
                        <div className={styles.socialLike}>
                            <img
                                className={styles.shareLike}
                                src={share}
                                alt={"share"}
                            />
                            <span className={styles.shareLikeText}>
                                Поделиться
                                    </span>
                        </div>
                        <div className={styles.socialShare}>
                            <img
                                className={styles.shareLike}
                                src={like}
                                alt={"like"}
                            />
                            <span className={styles.shareLikeText}>Избранное</span>
                        </div>
                    </Col>
                </Row>
                <Row type={"flex"} justify={"center"} className={styles.paddingLeftContainer}>
                    <Col className={globalStyle.leftContainer}>
                        <div className={styles.commonText}>
                            c {moment(selected.dateOfStart).format('D MMM YYYY')} по {moment(selected.dateOfEnd).format('D MMM YYYY')}
                        </div>
                        <div className={styles.commonInteres}>
                            {selected.title}
                        </div>
                        <div className={styles.commonText} style={{ textTransform: "uppercase" }}>
                            {selected.country} {selected.town ? ", " + selected.town : ""}
                        </div>
                    </Col>

                    <Col className={globalStyle.rightContainer}>
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
                    </Col>
                </Row>
            </div>
            <OrderInformation operator={true} title={"Чем мы займемся"}>
                <Truncate
                    trimWhitespace
                    lines={show ? 5 : false}
                    open={show}
                    className={styles.font}
                >
                    <div>{selected.description}</div>
                </Truncate>
                <div className={globalStyle.fontUnderline} onClick={handleToggle}>{show ? "раскрыть" : "скрыть"}</div>
            </OrderInformation>
            <OrderInformation title={"Что включено"}>
                <div className={styles.fontInclud}>Инвентарь</div>
                <div className={classnames(styles.font, styles.paddingInclud)}>{selected.including.inventory}</div>
                <div className={styles.fontInclud}>Напитки</div>
                <div className={classnames(styles.font, styles.paddingInclud)}>{selected.including.beverages}</div>
                <div className={styles.fontInclud}>Питание</div>
                <div className={classnames(styles.font, styles.paddingInclud)}>{selected.including.nutrition}</div>
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
                <div className={globalStyle.fontUnderline}>
                    перейти к правилам
                </div>
            </OrderInformation>

            <hr className={styles.hr} />
            <Row justify={"center"} type={"flex"}>
                <Col className={classnames(globalStyle.leftContainer, styles.centerContainer)}>
                    <div className={styles.footerDay}>{moment(selected.dateOfEnd).from(moment(selected.dateOfStart), true)}</div>
                    <div className={styles.footerText}>{selected.title}</div>
                </Col>
                <Col className={styles.footerContainer}>
                    <span className={globalStyle.cost}>
                        {selected.cost}
                        {selected.valute}
                    </span>
                    <span className={globalStyle.cardFont}>{selected.from}</span>
                    <div>
                        <span className={globalStyle.fontRate}>
                            {selected.rate}
                            {"  "}
                            <Rate
                                className={globalStyle.fontRate}
                                disabled
                                allowHalf
                                defaultValue={Number(selected.rate.toFixed(1))}
                            />
                        </span>
                        <span className={globalStyle.cardFont}>
                            {selected.countRate}
                        </span>
                    </div>
                </Col>
                <Col className={styles.centerContainer}>
                    <span className={styles.btnOrder}>Заказать</span>
                </Col>
            </Row>
        </div>
    );
};
