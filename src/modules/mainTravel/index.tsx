import React, { useState } from "react";
import { Interests } from "./Interests";
import styles from "./mainTravel.module.css";
import book from "../../resources/book.png";
import location from "../../resources/location.png";
import { Country } from "./Country";
import { RangeDate } from "./RangeDate";
import { NumberOfPeoples } from "./NumberOfPeoples";
import { Button } from "../../components/button/Button";
import parachute from "../../resources/parachute.svg";
import ellipse from "../../resources/ellipse.svg";
import ellipse1 from "../../resources/ellipse1.svg";
import { Footer } from "../footer/Footer";
import { useHistory } from "react-router-dom"; 

export const MainTravel = () => {
    const [selectedInteres, setSelectedInteres] = useState();
    const history = useHistory();
    const onClick = () => {   
    history.push(`/search`)
 };

  const handleSelected = (x: string[]) => {
    x.shift();
    setSelectedInteres(x)
  }
  return (
    <>
      <div className={styles.parachute}>
        <img src={parachute} alt="parachute" />
      </div>
      <div className={styles.ellipse}>
        <img src={ellipse} alt="ellipse" />
      </div>
      <div className={styles.ellipse1}>
        <img src={ellipse1} alt="ellipse1" />
      </div>

      <div className={styles.wrapper}>
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
              <Interests handleSelected={handleSelected}/>
              <Country />
            </div>
          </div>
          <RangeDate />
          <NumberOfPeoples />
          <Button onClick={onClick}/>
        </div>
      </div>
      <Footer />
    </>
  );
};
