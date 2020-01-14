import React, { useState, useEffect } from "react";
import { Modal, Input } from "antd";
import moment from "moment";
import "moment/locale/ru";
import { DayPickerRangeController, FocusedInputShape, DayPickerRangeControllerShape } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import styles from "./range.module.css";
import calnedar from "../../resources/mainCalendar.svg";
import classnames from "classnames"
import globalStyle from "../../core/theme/commonStyle.module.css";
import "../../modules/mainTravel/customantd.css"
import { CalendarModal } from "./CalendarModal";

interface IProps {
  handleDate: (startDate: string, endDate: string) => void;
}

export const RangeDate: React.FC<IProps> = ({handleDate}) => {
  const [show, setShow] = useState();
  const [countDate, setCountDate] = useState(
    `${moment().format("DD MMM")} - ${moment()
      .add(3, "days")
      .format("DD MMM")}`
  );
  
  return (
    <div className={styles.container}>
      <CalendarModal 
        setShow={setShow} 
        show={show} 
        handleDate={handleDate}
        setCountDate={setCountDate}
      />
      <div onClick={() => setShow(true)} className={styles.dateContainer}>
        <Input
            readOnly
            suffix={<span className={classnames(styles.customDate, globalStyle.cursorPointer)}>{countDate}</span>}
            prefix={
            <span className={globalStyle.customLabel}>
                <img className={styles.imageDate} src={calnedar} alt="calendar" />
                <span className={classnames(styles.date, globalStyle.unselectable)}>Дата</span>                
            </span>
          }            
        />
      </div>
    </div>
  );
};