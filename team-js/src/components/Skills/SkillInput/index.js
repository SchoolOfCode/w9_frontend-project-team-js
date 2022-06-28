import React, { useState } from "react";
import './index.css';

function SkillInput({ buttonText, addSkill }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = function (event) {
    setUserInput(event.currentTarget.value);
  };

  const handleSubmit = function () {
    addSkill(userInput);
    setUserInput("");
  };

  return (
    <div className="skill-input-add">
      <input className="skill-input-field"
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="What skill would you like to track?"
      ></input>
      <button className="add-skill-btn" onClick={handleSubmit}>
        {/* {" "} */}
        {buttonText}
      </button>
    </div>
  );
}

export default SkillInput;
