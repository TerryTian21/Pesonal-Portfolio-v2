import React from "react";
import "./project.css";

function ProjectCard({ backgroundImg }) {
  const pageStyles = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front" style={pageStyles}></div>
        <div class="flip-card-back">
          <p>Back Content</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
