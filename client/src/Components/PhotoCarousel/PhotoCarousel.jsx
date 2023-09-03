import React, { useState, useEffect } from "react";
import "./PhotoCaroucel.css";

import img1 from "../../images/calendar.jpg";
import img2 from "../../images/calendar2.jpg";
import img3 from "../../images/calendar3.jpg";
import img4 from "../../images/calendar4.jpg";
import img5 from "../../images/calendar5.jpg";
import img6 from "../../images/calendar6.jpg";
import img7 from "../../images/calendar7.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

function PhotoCaroucel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 500); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [images, isPaused]);

  const handleImageClick = () => {
    setIsShrunk(true);
    setTimeout(() => {
      setIsShrunk(false);
    }, 200);

    setIsPaused(!isPaused); // Toggle the paused state on image click
  };

  return (
    <div className="photo-caroucel-container">
      <img
        src={images[currentIndex]}
        alt="Image"
        className={`caroucel-img ${isShrunk ? "shrunk" : ""}`}
        onClick={handleImageClick}
      />
    </div>
  );
}

export default PhotoCaroucel;
