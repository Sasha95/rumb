import React, { useState, useEffect } from "react";
import { Modal, Input } from "antd";
import moment from "moment";
import "moment/locale/ru";
import { DayPickerRangeController, FocusedInputShape } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./customantd.css";
import styles from "./mainTravel.module.css";
import calnedar from "../../resources/mainCalendar.svg";

interface IProps {
  handleDate: (startDate: string, endDate: string) => void;
}

export const RangeDate: React.FC<IProps> = ({handleDate}) => {
  const [show, setShow] = useState();
  const [startDate, setstartDate] = useState(moment());
  const [endDate, setendDate] = useState(moment().add(3, "days"));
  const [countDate, setCountDate] = useState(
    `${moment().format("DD MMM")} - ${moment()
      .add(3, "days")
      .format("DD MMM")}`
  );
  const [focusedInput, setfocusedInput] = useState<FocusedInputShape>(
    "startDate"
  );

  useEffect(()=> {
    if (startDate && endDate){
    handleDate(startDate.format("YYYY-MM-DD"), endDate.format("YYYY-MM-DD"));
    }
  }, [startDate, endDate, handleDate])

  const onDatesChange = ({ startDate, endDate }: any) => {
    setstartDate(startDate);
    setendDate(endDate);
    if (startDate && endDate){
      setCountDate(`${startDate.format("DD MMM")} - ${endDate.format("DD MMM")}`);
    }
  };
  const onFocusChange = (focusedInput: any) => {
    setfocusedInput(!focusedInput ? "startDate" : focusedInput);
  };
  return (
    <>
      <Modal
        centered
        visible={show}
        onCancel={() => setShow(false)}
        footer={null}
      >
        <DayPickerRangeController
          numberOfMonths={2}
          onDatesChange={onDatesChange}
          onFocusChange={onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          withPortal={true}
          hideKeyboardShortcutsPanel
        />
      </Modal>
      <div onClick={() => setShow(true)} className={styles['date-container']}>
        <Input
            readOnly
            suffix={<span className={styles["custom-date"]}>{countDate}</span>}
            prefix={
            <span className={styles["custom-label"]}>
                <img className={styles.imageDate} src={calnedar} alt="calendar" />
                <span className={styles.date}>Дата</span>                
            </span>
          }            
        />
      </div>
    </>
  );
};
