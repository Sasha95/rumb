import React, { useState, useEffect } from "react"
import { DayPickerRangeController, FocusedInputShape } from "react-dates"
import { useMedia } from "../../hooks/useMedia";
import moment from "moment";

interface IProps {
  setCountDate?: (date: string) => void;
  handleDate: (startDate: string, endDate: string) => void;
  reset?: boolean;
}

export const CalendarModal: React.FC<IProps> = ({ setCountDate, handleDate, reset }) => {
  const [startDate, setstartDate] = useState(moment()); //
  const [endDate, setendDate] = useState(moment().add(3, "days")); //

  const [focusedInput, setfocusedInput] = useState<FocusedInputShape>("startDate");
  const Sizes = ["SMALL"];
  const isMinimum = useMedia(["(max-width: 800px)"], Sizes, "BIG");
  const onDatesChange = ({ startDate, endDate }: any) => {
    setstartDate(startDate);
    setendDate(endDate);
    if (startDate && endDate && setCountDate) {
      setCountDate(`${startDate.format("DD MMM")} - ${endDate.format("DD MMM")}`);
    }
  };
  useEffect(()=> {
    setstartDate(moment());
    setendDate(moment().add(3, "days"));
  }, [reset])

  const onFocusChange = (focusedInput: FocusedInputShape | null) => {
    setfocusedInput(!focusedInput ? "startDate" : focusedInput);
  };
  useEffect(() => {
    if (startDate && endDate) {
      handleDate(startDate.format("YYYY-MM-DD"), endDate.format("YYYY-MM-DD"));
    }
  }, [startDate, endDate, handleDate])

  return (
    <div style={{ height: isMinimum === "SMALL" ? "500px" : "" }}>
      <DayPickerRangeController
        numberOfMonths={isMinimum === "SMALL" ? 12 : 2}
        onDatesChange={onDatesChange}
        onFocusChange={onFocusChange}
        focusedInput={focusedInput}
        startDate={startDate}
        endDate={endDate}
        hideKeyboardShortcutsPanel
        minimumNights={3}
        navNext={isMinimum === "SMALL" ? <div /> : undefined}
        orientation={isMinimum === "SMALL" ? "verticalScrollable" : "horizontal"}
      />
    </div>
  )
}