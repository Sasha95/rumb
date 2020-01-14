import React from "react"
import { ICard } from "../../api/dto/Card"
import { SelectedItem } from "../../components/selected"
import { Row, Col } from "antd"
import book from "../../resources/book.svg";
import calendar from "../../resources/calendar.svg";
import time from "../../resources/time.svg";
import thunder from "../../resources/thunder.svg";
import equipment from "../../resources/equipment.svg";
import moment from "moment"
import globalStyle from "../../core/theme/commonStyle.module.css";
import styles from "./cardInfo.module.css"

interface IProps {
    selected: ICard;
}

export const CardInfo: React.FC<IProps> = ({ selected }) => {
    return (
        <div className={globalStyle.imageContainer}>
            <Row type={"flex"} justify={"center"}>
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
    )
}