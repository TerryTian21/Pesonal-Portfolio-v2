import React, { useState } from "react";
import "./About.css";
import Lottie from "lottie-react";
import codingAnimation from "../../assets/coding2.json";
import Navbar from "../../Components/Navbar/navbar";
import ProjectCard from "../../Components/Cards/Project/project";
import Footer from "../../Components/Footer/Footer";
import { motion } from "framer-motion";

import sky1 from "../../images/sky1.jpg";
import sky2 from "../../images/sky2.jpg";
import sky3 from "../../images/sky3.jpg";
import sky4 from "../../images/sky4.jpg";
import sky5 from "../../images/sky5.jpg";

function About() {
  const [activePage, setActivePage] = useState("about");

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 2, type: "spring", stiffness: 100 }}
    >
      <div className="flex flex-col ">
        <Navbar activePage={activePage} onNavClick={handleNavClick} />
        <div className="main-container">
          <div className="introduction">
            <h1>
              <span className="text-4xl open-sans">Never</span>{" "}
              <span className="text-2xl lobster"> Forget About Your </span>
              <span className="text-5xl end"> Passion </span>
            </h1>
            <p className="content">
              {" "}
              Hello, I'm a versatile software engineer specializing in
              full-stack development and machine learning. Currently
              contributing my expertise at the Ontario Public Service, I'm based
              in Toronto but hail from Calgary. Beyond coding, I'm an avid boxer
              and basketball enthusiast so let me know if you ever want to hit a
              workout.
            </p>
          </div>
          <Lottie
            animationData={codingAnimation}
            loop={true}
            autoplay={true}
            className="lottie-animation"
          />
        </div>
        <div className="project-container">
          <div className="project-heading">
            <h1>Projects & Experience </h1>
            <p> An amalganation of my best work. Scroll to see more.</p>
          </div>
          <a
            href="client/src/assets/TerryTian_Resume.pdf"
            className="resume"
            data-replace="View my Resume"
          >
            <span>View my Resume</span>
          </a>
        </div>
        <div className="projects">
          <ProjectCard backgroundImg={sky1} />
          <ProjectCard backgroundImg={sky2} />
          <ProjectCard backgroundImg={sky3} />
          <ProjectCard backgroundImg={sky4} />
          <ProjectCard backgroundImg={sky5} />
        </div>
        <Footer />
      </div>
    </motion.div>
  );
}

export default About;
