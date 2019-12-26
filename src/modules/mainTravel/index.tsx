import React, { useState, useEffect } from "react";
import { Interests } from "./Interests";
import styles from "./mainTravel.module.css";
import globalStyle from "../../core/theme/commonStyle.module.css";
import book from "../../resources/mainBook.svg";
import location from "../../resources/location.svg";
import { Country } from "./Country";
import { RangeDate } from "./RangeDate";
import { NumberOfPeoples } from "./NumberOfPeoples";
import { Button } from "../../components/button/Button";
import parachute from "../../resources/parachute.svg";
import ellipse from "../../resources/ellipse.svg";
import ellipse1 from "../../resources/ellipse1.svg";
import { Footer } from "../footer/Footer";
import { useHistory } from "react-router-dom";
import { Popular } from "../popular/Popular";
import { Affix, Col, Row } from "antd";
import { Cards } from "../card/Cards";
import { SelectValue } from "antd/lib/select";
import { useDispatch } from "react-redux";
import { set_current } from "../../store/currentSelect/currentActions";
import { CurrentInitialState } from "../../store/currentSelect/currentState";

export const MainTravel = () => {
  const [selectedInteres, setSelectedInteres] = useState();
  const [date, setDate] = useState();
  const [place, setPlace] = useState();
  const [numberOfPeople, setNumberOfPeople] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const onClick = () => {
    dispatch(
      set_current({
        date: date,
        interests: selectedInteres,
        numberOfPeople: numberOfPeople,
        places: place
      })
    );
    history.push(`/search`);
  };
  useEffect(()=>{
    set_current(CurrentInitialState)
  }, [])

  const handleSelected = (x: string[]) => {
    x.shift();
    setSelectedInteres(x);
  };
  const handlePlace = (place: SelectValue) => {
    setPlace(place);
  };
  const handleDate = (startDate: string, endDate: string) => {
    setDate(startDate + "; " + endDate);
  };
  const handleNumberOfPeople = (number: number) => {
    setNumberOfPeople(number);
  };
  return (
    <>
      <div className={styles.wrapper} style={{ height: "100vh" }}>
        <div className={styles.parachute}>
          <img src={parachute} alt="parachute" />
        </div>
        <div className={styles.ellipse}>
          <img src={ellipse} alt="ellipse" />
        </div>
        <div className={styles.ellipse1}>
          <img src={ellipse1} alt="ellipse1" />
        </div>
        <div>
          <div className={styles.title}>
            Путешествуй увлечениями <br /> Планирование активного отдыха стало
            проще
          </div>
          <div className={styles.container}>
            <div className={styles["felx-container1"]}>
              <div>
                <img className={styles.image} src={book} alt="interes" />
              </div>
              <div className={styles.line} />
              <div className={styles["location-container"]}>
                <img className={styles.image} src={location} alt="location" />
              </div>
            </div>
            <div className={styles["felx-container2"]}>
              <Interests handleSelected={handleSelected} />
              <Country handlePlace={handlePlace} />
            </div>
          </div>
          <RangeDate handleDate={handleDate} />
          <NumberOfPeoples handleNumberOfPeople={handleNumberOfPeople} />
          <Button onClick={onClick} />
        </div>
      </div>
      <div className={styles.wrapper} style={{background: "#FAFAFA"}}>
        <Popular />
      </div>
      <div className={styles.wrapper} style={{background: "#FFFFFF"}}>
        <Row type="flex">
          <Col>
            <div className={globalStyle.popularText}>ПOПУЛЯРНЫЕ ТУРЫ</div>
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
