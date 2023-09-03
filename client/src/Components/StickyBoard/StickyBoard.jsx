import React from "react";
import "./StickyBoard.css";

function StickyBoard() {
  return (
    <div className="right-sub-container">
      <h1> Achievements:</h1>
      <div className="achievements-container">
        <div className="achievement-item bench"> Benchpress: 175</div>
        <div className="achievement-item squat"> Squat: 265</div>
        <div className="achievement-item deadlift"> Deadlift: 245</div>
        <div className="achievement-item emtpy-note"></div>
      </div>
      <h1> Goals:</h1>
      <div className="goal-container">
        <div className="goal-item bench-goal"> Benchpress: 225 by 2024</div>
        <div className="goal-item squat-goal"> Squat: 315 by 2024</div>
        <div className="goal-item deadlift-goal"> Deadlift: 315 by 2024</div>
        <div className="goal-item weight-goal">Weight: 150 lbs</div>
      </div>
    </div>
  );
}

export default StickyBoard;
