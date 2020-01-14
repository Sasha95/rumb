import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Rate, Carousel, Icon } from 'antd';
import { ICard } from '../../api/dto/Card';
import globalStyle from '../../core/theme/commonStyle.module.css';
import styles from './card.module.css';
import place from '../../resources/place.svg';
import date from '../../resources/date.svg';
import clock from '../../resources/clock.svg';
import read from '../../resources/read.svg';
import flash from '../../resources/flash.svg';
import skin from '../../resources/skin.svg';
import Truncate from 'react-truncate';
import moment from 'moment';
import classnames from 'classnames';
import TextTruncate from 'react-text-truncate';
import { useMedia } from '../../hooks/useMedia';

interface IData {
  card: ICard;
}

export const DataCard: React.FC<IData> = ({ card }) => {
  const history = useHistory();
  const refContainer = useRef<any>();
  const handleOrder = () => {
    history.push(`/rumb/order${card.id}/`);
  };

  const next = () => {
    refContainer.current.next();
  };
  const prev = () => {
    refContainer.current.prev();
  };
  const Sizes = ['SMALL'];
  const isMinimum = useMedia(['(max-width: 800px)'], Sizes, 'BIG');

  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <div className={styles.imgcont}>
          <Icon
            className={styles.leftArrow}
            type="right-circle"
            onClick={prev}
          />
          <Carousel
            arrows
            adaptiveHeight
            variableWidth
            ref={ref => (refContainer.current = ref)}
            className={styles.corusel}
          >
            {card.images.map((image, index) => (
              <img
                key={index}
                className={styles.imageCarousel}
                src={image}
                alt={'place'}
              />
            ))}
          </Carousel>
          <Icon
            className={styles.rightArrow}
            type="right-circle"
            onClick={next}
          />
          <div
            className={classnames(
              styles.placeContainer,
              globalStyle.unselectable
            )}
          >
            <span className={styles.palce}>
              <img className={styles.image} src={place} alt={'place'} />
              <span className={styles.city}>
                {card.town}, {card.country}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.fontTitle}>
          <Truncate className={styles.widthFontTitle} lines={2}>
            {card.title}
          </Truncate>
        </div>
        <div className={styles.rateContainer}>
          <span>
            <img src={date} alt={date} />
            <span className={styles.date}>
              {moment(card.dateOfStart).format('D MMMM YYYY')}
            </span>
          </span>
          <span className={styles.rateFont}>
            <span className={globalStyle.fontRate}>
              {card.rate}
              {'  '}
              <Rate
                className={globalStyle.fontRate}
                disabled
                allowHalf
                defaultValue={Number(card.rate.toFixed(1))}
              />
            </span>
            <span className={globalStyle.cardFont}>{card.countRate}</span>
          </span>
        </div>

        <TextTruncate
          containerClassName={styles.textTrunc}
          line={isMinimum === 'SMALL' ? 3 : 4}
          element='span'
          truncateText='…'
          text={card.description}
          textTruncateChild={
            <span className={styles.showmore} onClick={handleOrder}>
              Подробнее
            </span>
          }
        />
      </div>

      <div className={styles.thirdContainer}>
        <span className={styles.fontContainer}>
          <img src={read} alt={'read'} />
          <span
            className={classnames(styles.cardFontPAdding, globalStyle.cardFont)}
          >
            {card.interes}
          </span>
          {card.time && (
            <span>
              <img src={clock} alt={'clock'} />
              <span className={globalStyle.cardFont}>{card.time}</span>
            </span>
          )}
        </span>
        <span className={styles.fontInline}>
          <img src={flash} alt={'flash'} />
          <span className={globalStyle.cardFont}>{card.professional}</span>
        </span>
        <span className={styles.fontInline}>
          <img src={skin} alt={'skin'} />
          <span className={globalStyle.cardFont}>{card.equipment}</span>
        </span>
        <div className={styles.orderContainer}>
          <div className={styles.costSmall}>
            <span className={globalStyle.cost}>
              {card.cost}
              {card.valute}
            </span>
            <span className={globalStyle.cardFont}>{card.from}</span>
          </div>
          <div className={styles.order} onClick={handleOrder}>
            Заказать
          </div>
        </div>
      </div>
    </div>
  );
};
