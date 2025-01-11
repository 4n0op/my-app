import React from "react";
import "./App.css"; // Import styles for the App component

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data); // Log form data for debugging
  };

  return (
    <div className="App">
      <h1>Game Scoring Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Match Details */}
        <h2>Match Details</h2>
        <label>
          Match Number:
          <input name="matchNumber" type="number" required />
        </label>
        <label>
          Team Number:
          <input name="teamNumber" type="number" required />
        </label>

        {/* Auto Section */}
        <h2>Auto</h2>
        <label>
          Left Black Line:
          <input name="autoLeftBlackLine" type="checkbox" />
        </label>
        <label>
          Coral Scored Per Level:
          <input name="autoCoralLevel1" type="number" defaultValue={0} />
          <input name="autoCoralLevel2" type="number" defaultValue={0} />
          <input name="autoCoralLevel3" type="number" defaultValue={0} />
          <input name="autoCoralLevel4" type="number" defaultValue={0} />
        </label>
        <label>
          Algae Processed:
          <input name="autoAlgaeProcessed" type="number" defaultValue={0} />
        </label>
        <label>
          Algae Netted:
          <input name="autoAlgaeNetted" type="number" defaultValue={0} />
        </label>

        {/* Teleop Section */}
        <h2>Teleop</h2>
        <label>
          Coral Scored Per Level:
          <input name="teleopCoralLevel1" type="number" defaultValue={0} />
          <input name="teleopCoralLevel2" type="number" defaultValue={0} />
          <input name="teleopCoralLevel3" type="number" defaultValue={0} />
          <input name="teleopCoralLevel4" type="number" defaultValue={0} />
        </label>
        <label>
          Algae Processed:
          <input name="teleopAlgaeProcessed" type="number" defaultValue={0} />
        </label>
        <label>
          Algae in Net:
          <input name="teleopAlgaeInNet" type="number" defaultValue={0} />
        </label>
        <label>
          # of Algae Thrown (and by who):
          <textarea name="teleopAlgaeThrown" placeholder="Enter details" />
        </label>

        {/* Endgame Section */}
        <h2>Endgame</h2>
        <label>
          Cage Climb:
          <select name="endgameCageClimb">
            <option value="shallow">Shallow</option>
            <option value="deep">Deep</option>
            <option value="park">Park</option>
          </select>
        </label>
        <label>
          Comments:
          <textarea name="endgameComments" placeholder="Type comments about the robot" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;