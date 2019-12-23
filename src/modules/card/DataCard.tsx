import React from "react";
import { Rate } from "antd";
import styles from "./card.module.css";
import place from "../../resources/place.svg";
import { ICard } from "../../api/dto/Card";
import date from "../../resources/date.svg";
import clock from "../../resources/clock.svg";
import read from "../../resources/read.svg";
import flash from "../../resources/flash.svg";
import skin from "../../resources/skin.svg";
import Truncate from 'react-truncate';

interface IData {
  card: ICard;
}

export const DataCard: React.FC<IData> = ({ card }) => {
  return (
    <div className={styles.container}>
      <div className={styles["first-container"]}>
        <div className={styles.imgcont}>
          <div className={styles.palce}>
            <img className={styles.image} src={place} alt={"place"} />
            <span className={styles.city}>
              {card.town}, {card.country}
            </span>
          </div>
        </div>
      </div>
      <div className={styles["second-container"]}>
        <div className={styles["font-title"]}>{card.title}</div>
        <div className={styles["rate-container"]}>
          <span>
            <img src={date} alt={date} />
            <span className={styles.date}>{card.date}</span>
          </span>
          <span className={styles.star}>
            {card.rate}
            {"  "}
            <Rate
              className={styles.star}
              disabled
              allowHalf
              defaultValue={Number(card.rate.toFixed(1))}
            />
          </span>
          <span className={styles.font}>{card.countRate}</span>
        </div>
        <Truncate
          style={{ marginTop: "auto" }}
          trimWhitespace
          width={540}
          lines={4}
          ellipsis={<span>... <a href='/link/to/article'>Подробнее</a></span>}>
          {card.description}
        </Truncate>
      </div>

      <div className={styles["third-container"]}>
        <span className={styles["font-container"]}>
          <img src={read} alt={"read"} />
          <span style={{ paddingRight: "14px" }} className={styles.font}>{card.interes}</span>
          {card.time &&
            <span>
              <img src={clock} alt={"clock"} />
              <span className={styles.font}>{card.time}</span>
            </span>
          }
        </span>
        <div className={styles["font-container"]}>
          <img src={flash} alt={"flash"} />
          <span className={styles.font}>{card.professional}</span>
        </div>
        <div className={styles["font-container"]}>
          <img src={skin} alt={"skin"} />
          <span className={styles.font}>{card.equipment}</span>
        </div>
        <span className={styles["order-container"]}>
          <span className={styles.cost}>
            {card.cost}
            {card.valute}
          </span>
          <span className={styles["font"]}>{card.from}</span>
          <div className={styles.order}>Заказать</div>
        </span>
      </div>
    </div>
  );
};
