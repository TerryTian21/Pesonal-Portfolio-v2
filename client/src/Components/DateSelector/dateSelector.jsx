import React, { useState } from "react";
import "./dateSelector.css";

const currentYear = new Date().getFullYear();
const startYear = 2019;
const years = [];

for (let year = startYear; year <= currentYear; year++) {
  years.push(year);
}

function DateSelector({
  selectedMonth,
  setSelectedMonth,
  selectedYear,
  setSelectedYear,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectMonth = (month) => {
    setSelectedMonth(month);
    toggleDropdown();
  };

  const handleNextYear = () => {
    if (selectedYear === years[years.length - 1]) {
      return;
    } else {
      setSelectedYear(years[years.indexOf(selectedYear) + 1]);
    }
  };

  const handlePrevYear = () => {
    if (selectedYear === years[0]) {
      return;
    } else {
      setSelectedYear(years[years.indexOf(selectedYear) - 1]);
    }
  };

  return (
    <div className="dropdown-container">
      <div className="custom-dropdown">
        <div className="selected-option" onClick={toggleDropdown}>
          {"Select Date"}
        </div>
        {isDropdownOpen && (
          <div className="options">
            <div className="year-option">
              <button className="year-button" onClick={handlePrevYear}>
                &#8249;
              </button>
              <div className="selected-year">{selectedYear}</div>
              <button className="year-button" onClick={handleNextYear}>
                &#8250;
              </button>
            </div>
            {months.map((month, index) => (
              <div
                key={index}
                className={selectedMonth === month ? "selected" : "option"}
                onClick={() => selectMonth(month)}
              >
                {month}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DateSelector;
