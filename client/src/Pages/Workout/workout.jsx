import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/navbar";
import Modal from "../../Components/Modal/modal";
import Calendar from "../../Components/Calendar/calendar";
import DateSelector from "../../Components/DateSelector/dateSelector";
import { getMonthlyData } from "../../Controllers/workoutController";
import backgroundImg from "../../images/gym-background.jpg";
import "./workout.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getData(month, year) {
  return getMonthlyData(month, year);
}

function Workout() {
  const pageStyles = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  const currentDate = new Date();
  const [activePage, setActivePage] = useState("workout");
  const [selectedMonth, setSelectedMonth] = useState(
    months[currentDate.getMonth()]
  );
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [showModal, setshowModal] = useState(false);
  const [loadContent, setLoadContent] = useState(false);
  var [data, setData] = useState(getData(selectedMonth, selectedYear));

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  const handleOpen = () => setshowModal(true);

  useEffect(() => {
    setData(getData(selectedMonth, selectedYear));
  }, [selectedMonth, selectedYear]);

  return !loadContent ? (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 2, type: "spring", stiffness: 100 }}
    >
      <div style={pageStyles} className="page-container">
        <Navbar activePage={activePage} onNavClick={handleNavClick} />
        <div className="button-modal-container">
          <button className="button-modal" onClick={handleOpen}>
            Enter
          </button>
        </div>
        {showModal && (
          <Modal setshowModal={setshowModal} setLoadContent={setLoadContent} />
        )}
      </div>
    </motion.div>
  ) : (
    <div className="workout-container">
      <Navbar activePage={activePage} onNavClick={handleNavClick} />
      <div className="calendar-container">
        <div className="selector">
          <h1 className="month">
            {selectedMonth} {selectedYear}
          </h1>
          <DateSelector
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
        </div>
        <Calendar
          month={months.indexOf(selectedMonth)}
          year={selectedYear}
          data={data}
        />
      </div>
    </div>
  );
}

export default Workout;
