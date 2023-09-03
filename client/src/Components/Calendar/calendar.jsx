import React, { useEffect, useState } from "react";
import "./calendar.css";
import DateCard from "../Cards/Date/date";
import StickyBoard from "../StickyBoard/StickyBoard";
import ProfileCard from "../Cards/Profile/profile";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function Calendar({ year, month, data }) {
  var [currDate, setCurrDate] = useState(null);
  var [profile, setProfile] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  const getDatabyDate = () => {
    if (currDate) {
      for (const item of data) {
        const date = new Date(item.date);
        const inputDay = date.getDate();
        const inputMonth = date.getMonth();
        const inputYear = date.getFullYear();

        if (
          inputDay === currDate &&
          month === inputMonth &&
          year === inputYear
        ) {
          return item;
        }
      }
    }

    return null;
  };

  // The following code dynamically changes the calendar layout depending on the selected month/year
  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const calendarCells = [];
  for (let i = 0; i < firstDay; i++) {
    calendarCells.push(<div className="empty-cell"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(
      <DateCard
        day={day}
        setCurrDate={setCurrDate}
        currDate={currDate}
        currMonth={month}
        currYear={year}
        setProfile={setProfile}
        data={data}
      />
    );
  }

  for (let i = 0; i < calendarCells.length % 7; i++) {
    calendarCells.push(<div className="empty-cell"></div>);
  }

  // Use Effects
  useEffect(() => {
    setAnimationTrigger(false);
    setTimeout(() => {
      setAnimationTrigger(true);
    }, 500);
  }, [year, month, currDate]);

  // Rendered HTML elements
  return (
    <div className="information-container">
      <div className="calendar-main">
        {days.map((date) => (
          <div className="days">{date}</div>
        ))}
        {calendarCells}
      </div>
      <div className="right-container">
        {profile ? (
          <ProfileCard
            day={currDate}
            profile={profile}
            animate={animationTrigger}
            setProfile={setProfile}
            getData={getDatabyDate}
          />
        ) : (
          <StickyBoard />
        )}
      </div>
    </div>
  );
}

export default Calendar;
