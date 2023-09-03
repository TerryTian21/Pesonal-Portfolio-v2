import React, { useState, useEffect } from "react";
import backgroundImg from "../../images/home.jpg";
import "./landing.css";
import Typewriter from "../../Components/TypeWriter/typewriter";
import Navbar from "../../Components/Navbar/navbar";
import Preloader from "../../Components/PreLoader/preloader";
import { motion } from "framer-motion";

function Landing() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [activePage, setActivePage] = useState("home");

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 2000);
  }, []);

  const pageStyles = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  return showPreloader ? (
    <Preloader />
  ) : (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 2, type: "spring", stiffness: 100 }}
    >
      <div className="background-container" style={pageStyles}>
        <Navbar
          onNavClick={handleNavClick}
          activePage={activePage}
          position="home"
        />
        <div className="text-container">
          <h1 className="title">
            <Typewriter text="Hi, I'm Terry" delay={50} />
          </h1>
          <p className="subtitle">
            <Typewriter
              text="Software Engineer, Student at UofT, and Athlete"
              delay={50}
            />
          </p>
          <a className="transition" href="/about">
            Explore
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Landing;
