import React, { useState } from "react";
import { Interests } from "../../components/interests/Interests";
import styles from "./mainTravel.module.css";
import globalStyle from "../../core/theme/commonStyle.module.css";
import book from "../../resources/mainBook.svg";
import location from "../../resources/location.svg";
import { Country } from "../../components/country/Country";
import { RangeDate } from "../../components/rangeDate/RangeDate";
import { NumberOfPeoples } from "../../components/numberOfPeoples/NumberOfPeoples";
import { Button } from "../../components/button/Button";
import { Footer } from "../footer/Footer";
import { useHistory } from "react-router-dom";
import { Popular } from "../popular/Popular";
import { Affix, Col, Row } from "antd";
import { Cards } from "../card/Cards";
import { SelectValue } from "antd/lib/select";
import { useDispatch } from "react-redux";
import { set_current } from "../../store/currentSelect/currentActions";
import { CurrentInitialState } from "../../store/currentSelect/currentState";
import classnames from "classnames";

export const MainTravel = () => {
  const [selectedInteres, setSelectedInteres] = useState();
  const [dateOfStart, setDateStart] = useState();
  const [dateOfEnd, setDateEnd] = useState();
  const [place, setPlace] = useState();
  const [numberOfPeople, setNumberOfPeople] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const onClick = () => {
    dispatch(
      set_current({
        dateOfStart: dateOfStart,
        dateOfEnd: dateOfEnd,
        interests: selectedInteres,
        numberOfPeople: numberOfPeople,
        places: place
      })
    );
    history.push(`/rumb/search/`);
  };

  dispatch(set_current(CurrentInitialState))

  const handleSelected = (x: string[]) => {
    x.shift();
    setSelectedInteres(x);
  };
  const handlePlace = (place: SelectValue) => {
    setPlace(place);
  };
  const handleDate = (startDate: string, endDate: string) => {
    setDateStart(startDate);
    setDateEnd(endDate)
  };
  const handleNumberOfPeople = (number: number) => {
    setNumberOfPeople(number);
  };
  return (
    <>
      <div className={classnames(styles.wrapper, styles.mainWrapper)}>
            <div>
              <div className={styles.title}>
                Путешествуй увлечениями <br /> Планирование активного отдыха стало
                проще
              </div>
              <span className={styles.container}>
                <div className={styles.felxContainer1}>
                  <div>
                    <img className={styles.image} src={book} alt="interes" />
                  </div>
                  <div className={styles.line} />
                  <div className={styles.locationContainer}>
                    <img className={styles.image} src={location} alt="location" />
                  </div>
                </div>
                <div className={styles.felxContainer2}>
                  <Interests handleSelected={handleSelected} />
                  <Country handlePlace={handlePlace} />
                </div>
              </span>
              <RangeDate handleDate={handleDate} />
              <NumberOfPeoples handleNumberOfPeople={handleNumberOfPeople} />
              <Button onClick={onClick} />
            </div>
          </div>
      <div className={classnames(styles.wrapper, styles.backgroundPopularDirect)}>
        <Popular />
      </div>
      <div className={classnames(styles.wrapper, styles.backgroundPopularTour)}>
        <Row type="flex">
          <Col>
            <div className={classnames(globalStyle.popularText, globalStyle.marginContainer)}>ПOПУЛЯРНЫЕ ТУРЫ</div>
            <Cards />
          </Col>
        </Row>
      </div>
      <Affix offsetBottom={0}>
        <Footer />
      </Affix>
    </>
  );
};
