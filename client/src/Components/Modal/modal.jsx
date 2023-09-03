import React, { useState } from "react";
import Lottie from "lottie-react";
import workoutAnimation from "../../assets/workout.json";
import "./modal.css";

function Modal({ setshowModal, setLoadContent }) {
  const [answer, setAnswer] = useState("");

  const handleInput = (input) => {
    setAnswer(input.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && answer === "135") {
      setshowModal(false);
      setLoadContent(true);
    }
  };

  return (
    <div class="modal">
      <div class="modal-content">
        <div class="image-section">
          <Lottie
            animationData={workoutAnimation}
            loop={true}
            autoplay={true}
          />
        </div>
        <div class="qa-section">
          <h2> Answer to Enter</h2>
          <p>What is 45 + 45</p>
          <input
            type="text"
            placeholder="Your answer..."
            onChange={handleInput}
            onKeyDown={handleKeyPress}
          />
          <button className="modal-button" onClick={() => setshowModal(false)}>
            I'm not a Gymrat
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
