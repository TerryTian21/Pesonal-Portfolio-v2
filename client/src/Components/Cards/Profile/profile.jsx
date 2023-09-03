import React from "react";
import WorkoutForm from "../../WorkoutForm/WorkoutForm";
import { storeData } from "../../../Controllers/workoutController";
import "./profile.css";

function ProfileCard({ day, setProfile, animate, getData }) {
  const data = getData();
  const toggleVisibility = () => {
    setProfile(false);
  };

  const checkData = () => {
    return data != null;
  };

  const exercises = [];
  if (data != null) {
    for (const exercise of data.workout) {
      exercises.push(
        <h1 className={`exercise-item ${animate ? "slide-in" : ""}`}>
          {" "}
          {exercise.name}{" "}
        </h1>,
        <h1 className={`exercise-item ${animate ? "slide-in" : ""}`}>
          {" "}
          {exercise.weight}{" "}
        </h1>,
        <h1 className={`exercise-item ${animate ? "slide-in" : ""}`}>
          {" "}
          {`${exercise.sets} x ${exercise.reps}`}
        </h1>
      );
    }
  }

  return (
    <div className="profile">
      <div className="button-profile-container">
        <div className="profile-content">{day}</div>
        <button className="button-close" onClick={toggleVisibility}>
          X
        </button>
      </div>

      {checkData() ? (
        <div className="workout-info">
          <div className="left-profile-container">
            <div className="workout-img-container">
              <div className="workout-image"></div>
            </div>
            <h1 className="weight"> Weight: {data.bodyweight}</h1>
          </div>
          <div className="right-profile-container">
            <div className="workout-exercise-container">
              <h1 className="workout-exercise-title"> Daily Workout</h1>
              <div className="workout-exercise">
                <h1 className="list-heading"> Exercise </h1>
                <h1 className="list-heading"> Weight</h1>
                <h1 className="list-heading"> Sets x Weight</h1>
                {exercises}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <WorkoutForm />
      )}
    </div>
  );
}

export default ProfileCard;
