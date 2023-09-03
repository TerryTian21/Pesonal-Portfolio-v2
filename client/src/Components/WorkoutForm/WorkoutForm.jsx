import React, { useState } from "react";
import WorkoutItem from "./WorkoutItem"; // Import the WorkoutItem component
import "./WorkoutForm.css";

function WorkoutForm() {
  const [date, setDate] = useState("");
  const [bodyweight, setBodyweight] = useState("");
  const [workoutItems, setWorkoutItems] = useState([]);
  const [image, setImage] = useState(null);
  const [workoutItem, setWorkoutItem] = useState({
    exercise: "",
    weight: "",
    sets: "",
    reps: "",
  });

  const handleAddWorkoutItem = () => {
    if (
      workoutItem.exercise.trim() !== "" &&
      workoutItem.weight.trim() !== "" &&
      workoutItem.sets.trim() !== "" &&
      workoutItem.reps.trim() !== ""
    ) {
      setWorkoutItems([...workoutItems, workoutItem]);
      setWorkoutItem({ exercise: "", weight: "", sets: "", reps: "" });
    }
  };

  const handleDeleteItem = (itemToDelete) => {
    const updatedItems = workoutItems.filter((item) => item !== itemToDelete);
    setWorkoutItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., send it to a server
    console.log("Form submitted:", { date, bodyweight, image, workoutItems });
  };

  const handleImageUpload = (file) => {
    if (file) {
      // Do something with the uploaded file, like displaying a preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        // You can set the imageDataURL to your component's state or use it in any way you want
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Enter Workout Details</h1>
      <form className="workout-form" onSubmit={handleSubmit}>
        <div className="date-form-container">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="bodyweight-form-container">
          <label>Bodyweight:</label>
          <input
            type="text"
            value={bodyweight}
            onChange={(e) => setBodyweight(e.target.value)}
          />
        </div>
        <div className="image-form-container">
          <label>Image:</label>
          <input
            className="image-file-input"
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e.target.files[0])}
          />
        </div>
        <div className="workout-form-container">
          <label>Workout Items:</label>
          <div className="workout-form-items">
            <input
              type="text"
              placeholder="Exercise"
              value={workoutItem.exercise}
              onChange={(e) =>
                setWorkoutItem({ ...workoutItem, exercise: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Weight"
              value={workoutItem.weight}
              onChange={(e) =>
                setWorkoutItem({ ...workoutItem, weight: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Sets"
              value={workoutItem.sets}
              onChange={(e) =>
                setWorkoutItem({ ...workoutItem, sets: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Reps"
              value={workoutItem.reps}
              onChange={(e) =>
                setWorkoutItem({ ...workoutItem, reps: e.target.value })
              }
            />
            <button type="button" onClick={handleAddWorkoutItem}>
              Add Item
            </button>
          </div>
          <div className="scrollable-list">
            {workoutItems.map((item, index) => (
              <WorkoutItem
                key={index}
                item={item}
                onDelete={handleDeleteItem}
              />
            ))}
          </div>
          <button type="submit" className="form-submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default WorkoutForm;
