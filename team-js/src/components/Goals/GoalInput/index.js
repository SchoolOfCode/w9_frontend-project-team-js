import React, { useState } from "react";
import "./index.css";

function Input({ buttonText, addGoal }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = function (event) {
    setUserInput(event.currentTarget.value);
  };

  const handleSubmit = function () {
    // debugger;
    addGoal(userInput);
    setUserInput("");
  };

  return (
    <div className="input-add">
      <input
        className="goal-input-field"
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="So what needs done?"
      ></input>
      <button onClick={handleSubmit}>{buttonText}</button>
    </div>
  );
}

export default Input;
