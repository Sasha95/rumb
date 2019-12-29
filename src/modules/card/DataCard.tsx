import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Rate, Carousel, Icon } from "antd";
import { ICard } from "../../api/dto/Card";
import globalStyle from "../../core/theme/commonStyle.module.css"
import styles from "./card.module.css";
import place from "../../resources/place.svg";
import date from "../../resources/date.svg";
import clock from "../../resources/clock.svg";
import read from "../../resources/read.svg";
import flash from "../../resources/flash.svg";
import skin from "../../resources/skin.svg";
import Truncate from 'react-truncate';
import moment from "moment";

interface IData {
  card: ICard;
}

export const DataCard: React.FC<IData> = ({ card }) => {
  const history = useHistory();
  const refContainer = useRef<any>();
  const handleOrder = () => {
    history.push(`/order${card.id}`);
  }

  const next = () => {
    refContainer.current.next();
  }
  const prev = () => {
    refContainer.current.prev();
  }

  return (
    <div className={styles.container}>
      <div className={styles["first-container"]}>
        <div className={styles.imgcont}>
          <Icon  className={styles.leftArrow} type="right-circle" onClick={prev} />
          <Carousel
            arrows
            adaptiveHeight
            variableWidth
            ref={ref => refContainer.current = ref}
          >
            {card.images.map((image, index) => (
              <img key={index} className={styles.imageCarousel} src={image} alt={"place"} />
            ))}
          </Carousel>
          <Icon className={styles.rightArrow} type="right-circle" onClick={next} />
          <div style={{ position: "absolute", top: "12px", left: "12px" }}>
            <span className={styles.palce}>
              <img className={styles.image} src={place} alt={"place"} />
              <span className={styles.city}>
                {card.town}, {card.country}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles["second-container"]}>
        <div className={styles["font-title"]}><Truncate style={{ width: "100%" }} lines={2}>{card.title}</Truncate></div>
        <div className={styles["rate-container"]}>
          <span>
            <img src={date} alt={date} />
            <span className={styles.date}>{moment(card.dateOfStart).format('D MMMM YYYY')}</span>
          </span>
          <span className={globalStyle["font-rate"]}>
            {card.rate}
            {"  "}
            <Rate
              className={globalStyle["font-rate"]}
              disabled
              allowHalf
              defaultValue={Number(card.rate.toFixed(1))}
            />
          </span>
          <span className={globalStyle["card-font"]}>{card.countRate}</span>
        </div>
        <Truncate
          style={{ marginTop: "auto" }}
          trimWhitespace
          width={540}
          lines={4}
          ellipsis={<span>... <span className={styles.showmore} onClick={handleOrder}>Подробнее</span></span>}>
          {card.description}
        </Truncate>
      </div>

      <div className={styles["third-container"]}>
        <span className={styles["font-container"]}>
          <img src={read} alt={"read"} />
          <span style={{ paddingRight: "14px" }} className={globalStyle["card-font"]}>{card.interes}</span>
          {card.time &&
            <span>
              <img src={clock} alt={"clock"} />
              <span className={globalStyle["card-font"]}>{card.time}</span>
            </span>
          }
        </span>
        <div className={styles["font-container"]}>
          <img src={flash} alt={"flash"} />
          <span className={globalStyle["card-font"]}>{card.professional}</span>
        </div>
        <div className={styles["font-container"]}>
          <img src={skin} alt={"skin"} />
          <span className={globalStyle["card-font"]}>{card.equipment}</span>
        </div>
        <span className={styles["order-container"]}>
          <span className={globalStyle.cost}>
            {card.cost}
            {card.valute}
          </span>
          <span className={globalStyle["card-font"]}>{card.from}</span>
          <div className={styles.order} onClick={handleOrder}>Заказать</div>
        </span>
      </div>
    </div>
  );
};
