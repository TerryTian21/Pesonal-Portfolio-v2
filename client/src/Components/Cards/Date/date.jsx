import React from "react";
import "./date.css";

function DateCard({
  day,
  currDate,
  currMonth,
  currYear,
  setCurrDate,
  setProfile,
  data,
}) {
  function checkDate(currentDate) {
    return (
      currentDate.getDate() === day &&
      currentDate.getMonth() == currMonth &&
      currentDate.getFullYear() == currYear
    );
  }

  function handleClick() {
    setCurrDate(day);
    setProfile(true);
  }

  const checkData = () => {
    for (const item of data) {
      const date = new Date(item.date);
      if (checkDate(date)) {
        return true;
      }
    }

    return false;
  };

  return (
    <div
      className={`item ${currDate === day ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className={checkDate(new Date()) ? "current" : "normal"}>{day}</div>
      {checkData() ? <div className="has-workout"> </div> : <div></div>}
    </div>
  );
}

export default DateCard;
