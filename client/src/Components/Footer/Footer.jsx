import React from "react";
import "./Footer.css";

import instagram from "../../images/instagram.png";
import mail from "../..//images/mail.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";

function Footer() {
  return (
    <div className="contact">
      <h1> Let's Connect: </h1>
      <a
        href="https://www.instagram.com/terry_tian.21/?next=%2F"
        target="_blank"
        style={{
          backgroundImage: `url(${instagram})`,
          backgroundSize: "cover",
        }}
      ></a>
      <a
        href="mailto:terry.tian@mail.utoronto.ca"
        style={{
          backgroundImage: `url(${mail})`,
          backgroundSize: "cover",
        }}
      />
      <a
        href="https://github.com/TerryTian21"
        target="_blank"
        style={{
          backgroundImage: `url(${github})`,
          backgroundSize: "cover",
        }}
      />
      <a
        href="https://www.linkedin.com/in/terry-tian/"
        target="_blank"
        style={{
          backgroundImage: `url(${linkedin})`,
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}

export default Footer;
