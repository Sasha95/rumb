import React, { useState, useEffect } from "react"
import { Modal, Button } from "antd"
import { DayPickerRangeController, FocusedInputShape } from "react-dates"
import { useMedia } from "../../hooks/useMedia";
import moment from "moment";

interface IProps {
  show: boolean;
  setShow: (state: boolean) => void;
  setCountDate?: (date: string) => void;
  handleDate: (startDate: string, endDate: string) => void;
}

export const CalendarModal: React.FC<IProps> = ({ show, setShow, setCountDate, handleDate, children }) => {
  const Sizes = ["SMALL"];
  const [startDate, setstartDate] = useState(moment()); //
  const [endDate, setendDate] = useState(moment().add(3, "days")); //

  const [focusedInput, setfocusedInput] = useState<FocusedInputShape>("startDate");
  const isMinimum = useMedia(["(max-width: 800px)"], Sizes, "BIG");
  const onDatesChange = ({ startDate, endDate }: any) => {
    setstartDate(startDate);
    setendDate(endDate);
    if (startDate && endDate && setCountDate) {
      setCountDate(`${startDate.format("DD MMM")} - ${endDate.format("DD MMM")}`);
    }
  };
  const onFocusChange = (focusedInput: FocusedInputShape | null) => {
    setfocusedInput(!focusedInput ? "startDate" : focusedInput);
  };

  useEffect(() => {
    if (startDate && endDate) {
      handleDate(startDate.format("YYYY-MM-DD"), endDate.format("YYYY-MM-DD"));
    }
  }, [startDate, endDate, handleDate])

  return (
    <Modal
      width={isMinimum && "375px"}
      centered
      visible={show}
      onCancel={() => setShow(false)}
      footer={null}
    >
      <div style={{ height: isMinimum === "SMALL" ? "500px" : "100%" }}>
        <DayPickerRangeController
          numberOfMonths={isMinimum === "SMALL" ? 12 : 2}
          onDatesChange={onDatesChange}
          onFocusChange={onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          withPortal={true}
          hideKeyboardShortcutsPanel
          minimumNights={3}
          navNext={isMinimum === "SMALL" ? <div /> : undefined}
          orientation={isMinimum === "SMALL" ? "verticalScrollable" : "horizontal"}
        />
      </div>
    </Modal>
  )
}