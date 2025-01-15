import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

const App = () => {
  const { register, handleSubmit } = useForm();
  const [autoCoralScores, setAutoCoralScores] = useState([0, 0, 0, 0]);
  const [teleopCoralScores, setTeleopCoralScores] = useState([0, 0, 0, 0]);
  const [autoAlgae, setAutoAlgae] = useState(0);
  const [teleopAlgae, setTeleopAlgae] = useState(0);
  const [autoShooting, setAutoShooting] = useState(0);
  const [teleopShooting, setTeleopShooting] = useState(0);

  const handleIncrement = (scores, setScores, index) => {
    const newScores = [...scores];
    newScores[index]++;
    setScores(newScores);
  };

  const handleDecrement = (scores, setScores, index) => {
    const newScores = [...scores];
    if (newScores[index] > 0) {
      newScores[index]--;
    }
    setScores(newScores);
  };

  const onSubmit = (data) => {
    console.log({
      ...data,
      autoCoralScores,
      teleopCoralScores,
      autoAlgae,
      teleopAlgae,
      autoShooting,
      teleopShooting,
    });
  };

  return (
    <div className="app">
      <h1>Game Scoring App</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Match Details</h2>
        <label>
          Match Number:
          <input {...register("matchNumber")} type="number" />
        </label>
        <label>
          Team Number:
          <input {...register("teamNumber")} type="number" />
        </label>

        <h2>Auto</h2>
        <label>
          <input {...register("auto.leftBlackLine")} type="checkbox" />
          Left black line
        </label>

        <div>
          <label>Coral scored per level:</label>
          {["Level 1", "Level 2", "Level 3", "Level 4"].map((level, index) => (
            <div key={index} className="score-control">
              <span>{level}</span>
              <button
                type="button"
                onClick={() =>
                  handleDecrement(autoCoralScores, setAutoCoralScores, index)
                }
              >
                -
              </button>
              <span>{autoCoralScores[index]}</span>
              <button
                type="button"
                onClick={() =>
                  handleIncrement(autoCoralScores, setAutoCoralScores, index)
                }
              >
                +
              </button>
            </div>
          ))}
        </div>

        <div>
          <label>
            Algae processed:
            <button type="button" onClick={() => setAutoAlgae(autoAlgae - 1)}>
              -
            </button>
            <span>{autoAlgae}</span>
            <button type="button" onClick={() => setAutoAlgae(autoAlgae + 1)}>
              +
            </button>
          </label>
        </div>

        <div>
          <label>
            Algae shooting:
            <button type="button" onClick={() => setAutoShooting(autoShooting - 1)}>
              -
            </button>
            <span>{autoShooting}</span>
            <button type="button" onClick={() => setAutoShooting(autoShooting + 1)}>
              +
            </button>
          </label>
        </div>

        <h2>Teleop</h2>
        <div>
          <label>Coral scored per level:</label>
          {["Level 1", "Level 2", "Level 3", "Level 4"].map((level, index) => (
            <div key={index} className="score-control">
              <span>{level}</span>
              <button
                type="button"
                onClick={() =>
                  handleDecrement(teleopCoralScores, setTeleopCoralScores, index)
                }
              >
                -
              </button>
              <span>{teleopCoralScores[index]}</span>
              <button
                type="button"
                onClick={() =>
                  handleIncrement(teleopCoralScores, setTeleopCoralScores, index)
                }
              >
                +
              </button>
            </div>
          ))}
        </div>

        <div>
          <label>
            Algae processed:
            <button type="button" onClick={() => setTeleopAlgae(teleopAlgae - 1)}>
              -
            </button>
            <span>{teleopAlgae}</span>
            <button type="button" onClick={() => setTeleopAlgae(teleopAlgae + 1)}>
              +
            </button>
          </label>
        </div>

        <div>
          <label>
            Algae shooting:
            <button
              type="button"
              onClick={() => setTeleopShooting(teleopShooting - 1)}
            >
              -
            </button>
            <span>{teleopShooting}</span>
            <button
              type="button"
              onClick={() => setTeleopShooting(teleopShooting + 1)}
            >
              +
            </button>
          </label>
        </div>

        <h2>Endgame</h2>
        <label>
          Cage climb:
          <select {...register("endgame.cageClimb")}>
            <option value="shallow">Shallow</option>
            <option value="deep">Deep</option>
            <option value="park">Park</option>
          </select>
        </label>

        <label>
          Comments:
          <textarea {...register("endgame.comments")} placeholder="Type comments here" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
