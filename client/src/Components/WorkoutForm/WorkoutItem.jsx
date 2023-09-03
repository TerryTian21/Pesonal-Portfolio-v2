import React, { useState } from "react";
import "./WorkoutItem.css";

const WorkoutItem = ({ item, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="workout-item">
      <div className="item-header" onClick={toggleExpansion}>
        <h2>{item.exercise}</h2>
      </div>
      {expanded && [
        <p>Weight: {item.weight}</p>,
        <p>Sets: {item.sets}</p>,
        <p>Reps: {item.reps}</p>,
      ]}
      <button className="delete-button" onClick={() => onDelete(item)}>
        &times;
      </button>
    </div>
  );
};

export default WorkoutItem;
