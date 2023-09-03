import React, { useState } from "react";

function Resume() {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <div>
      <a href="#" className="resume-link" onClick={toggleResume}>
        View my Resume
      </a>

      {showResume && (
        <div className="resume-modal">
          <iframe
            src="client/src/assets/TerryTian_Resume.pdf"
            title="Resume"
            width="100%"
            height="500px"
          />
          <button onClick={toggleResume}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Resume;
