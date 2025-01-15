import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, handleSubmit } = useForm();
  
  // Separate state for Auto and Teleop sections
  const [autoCoralLevels, setAutoCoralLevels] = useState([0, 0, 0, 0]);
  const [teleopCoralLevels, setTeleopCoralLevels] = useState([0, 0, 0, 0]);
  const [algaeProcessedAuto, setAlgaeProcessedAuto] = useState(0);
  const [algaeProcessedTeleop, setAlgaeProcessedTeleop] = useState(0);
  const [algaeNettedAuto, setAlgaeNettedAuto] = useState(0);
  const [algaeNettedTeleop, setAlgaeNettedTeleop] = useState(0);
  const [algaeInNetAuto, setAlgaeInNetAuto] = useState(0);
  const [algaeInNetTeleop, setAlgaeInNetTeleop] = useState(0);

  // Increase value for Auto or Teleop section
  const increaseValue = (index, type, section) => {
    if (section === "auto") {
      if (type === "coral") {
        const newLevels = [...autoCoralLevels];
        newLevels[index] += 1;
        setAutoCoralLevels(newLevels);
      } else if (type === "algaeProcessed") {
        setAlgaeProcessedAuto(algaeProcessedAuto + 1);
      } else if (type === "algaeNetted") {
        setAlgaeNettedAuto(algaeNettedAuto + 1);
      } else if (type === "algaeInNet") {
        setAlgaeInNetAuto(algaeInNetAuto + 1);
      }
    } else if (section === "teleop") {
      if (type === "coral") {
        const newLevels = [...teleopCoralLevels];
        newLevels[index] += 1;
        setTeleopCoralLevels(newLevels);
      } else if (type === "algaeProcessed") {
        setAlgaeProcessedTeleop(algaeProcessedTeleop + 1);
      } else if (type === "algaeNetted") {
        setAlgaeNettedTeleop(algaeNettedTeleop + 1);
      } else if (type === "algaeInNet") {
        setAlgaeInNetTeleop(algaeInNetTeleop + 1);
      }
    }
  };

  // Decrease value for Auto or Teleop section
  const decreaseValue = (index, type, section) => {
    if (section === "auto") {
      if (type === "coral" && autoCoralLevels[index] > 0) {
        const newLevels = [...autoCoralLevels];
        newLevels[index] -= 1;
        setAutoCoralLevels(newLevels);
      } else if (type === "algaeProcessed" && algaeProcessedAuto > 0) {
        setAlgaeProcessedAuto(algaeProcessedAuto - 1);
      } else if (type === "algaeNetted" && algaeNettedAuto > 0) {
        setAlgaeNettedAuto(algaeNettedAuto - 1);
      } else if (type === "algaeInNet" && algaeInNetAuto > 0) {
        setAlgaeInNetAuto(algaeInNetAuto - 1);
      }
    } else if (section === "teleop") {
      if (type === "coral" && teleopCoralLevels[index] > 0) {
        const newLevels = [...teleopCoralLevels];
        newLevels[index] -= 1;
        setTeleopCoralLevels(newLevels);
      } else if (type === "algaeProcessed" && algaeProcessedTeleop > 0) {
        setAlgaeProcessedTeleop(algaeProcessedTeleop - 1);
      } else if (type === "algaeNetted" && algaeNettedTeleop > 0) {
        setAlgaeNettedTeleop(algaeNettedTeleop - 1);
      } else if (type === "algaeInNet" && algaeInNetTeleop > 0) {
        setAlgaeInNetTeleop(algaeInNetTeleop - 1);
      }
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <h2 className="header">Scout Match Form</h2>

        {/* Match Details */}
        <div className="input-group">
          <label>Match Number:</label>
          <input {...register("matchNumber")} type="number" />
        </div>
        <div className="input-group">
          <label>Team Number:</label>
          <input {...register("teamNumber")} type="number" />
        </div>

        {/* Auto Section */}
        <div className="section">
          <h3>Autonomous</h3>
          <div className="input-group">
            <label>Left Black Line:</label>
            <input {...register("auto.leftBlackLine")} type="checkbox" />
          </div>

          {/* Coral Scoring */}
          <h4>Coral Scored per Level:</h4>
          {["Level 1", "Level 2", "Level 3", "Level 4"].map((level, index) => (
            <div key={index} className="level-control">
              <span>{level}</span>
              <button
                type="button"
                className="button-decrease"
                onClick={() => decreaseValue(index, "coral", "auto")}
              >
                -
              </button>
              <input
                {...register(`auto.coralScored.level${index + 1}`)}
                value={autoCoralLevels[index]}
                type="number"
                readOnly
                className="level-input"
              />
              <button
                type="button"
                className="button-increase"
                onClick={() => increaseValue(index, "coral", "auto")}
              >
                +
              </button>
            </div>
          ))}

          {/* Algae Processed */}
          <h4>Algae Processed:</h4>
          <div className="algae-control">
            <button
              type="button"
              className="button-decrease"
              onClick={() => decreaseValue(null, "algaeProcessed", "auto")}
            >
              -
            </button>
            <input
              {...register("auto.algaeProcessed")}
              value={algaeProcessedAuto}
              type="number"
              readOnly
              className="algae-input"
            />
            <button
              type="button"
              className="button-increase"
              onClick={() => increaseValue(null, "algaeProcessed", "auto")}
            >
              +
            </button>
          </div>

          {/* Algae Netted */}
          <h4>Algae Netted:</h4>
          <div className="algae-control">
            <button
              type="button"
              className="button-decrease"
              onClick={() => decreaseValue(null, "algaeNetted", "auto")}
            >
              -
            </button>
            <input
              {...register("auto.algaeNetted")}
              value={algaeNettedAuto}
              type="number"
              readOnly
              className="algae-input"
            />
            <button
              type="button"
              className="button-increase"
              onClick={() => increaseValue(null, "algaeNetted", "auto")}
            >
              +
            </button>
          </div>
        </div>

        {/* Teleop Section */}
        <div className="section">
          <h3>Teleoperated</h3>
          <h4>Coral Scored per Level:</h4>
          {["Level 1", "Level 2", "Level 3", "Level 4"].map((level, index) => (
            <div key={index} className="level-control">
              <span>{level}</span>
              <button
                type="button"
                className="button-decrease"
                onClick={() => decreaseValue(index, "coral", "teleop")}
              >
                -
              </button>
              <input
                {...register(`teleop.coralScored.level${index + 1}`)}
                value={teleopCoralLevels[index]}
                type="number"
                readOnly
                className="level-input"
              />
              <button
                type="button"
                className="button-increase"
                onClick={() => increaseValue(index, "coral", "teleop")}
              >
                +
              </button>
            </div>
          ))}

          {/* Algae Processed */}
          <h4>Algae Processed:</h4>
          <div className="algae-control">
            <button
              type="button"
              className="button-decrease"
              onClick={() => decreaseValue(null, "algaeProcessed", "teleop")}
            >
              -
            </button>
            <input
              {...register("teleop.algaeProcessed")}
              value={algaeProcessedTeleop}
              type="number"
              readOnly
              className="algae-input"
            />
            <button
              type="button"
              className="button-increase"
              onClick={() => increaseValue(null, "algaeProcessed", "teleop")}
            >
              +
            </button>
          </div>

          {/* Algae Netted */}
          <h4>Algae Netted:</h4>
          <div className="algae-control">
            <button
              type="button"
              className="button-decrease"
              onClick={() => decreaseValue(null, "algaeNetted", "teleop")}
            >
              -
            </button>
            <input
              {...register("teleop.algaeNetted")}
              value={algaeNettedTeleop}
              type="number"
              readOnly
              className="algae-input"
            />
            <button
              type="button"
              className="button-increase"
              onClick={() => increaseValue(null, "algaeNetted", "teleop")}
            >
              +
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
