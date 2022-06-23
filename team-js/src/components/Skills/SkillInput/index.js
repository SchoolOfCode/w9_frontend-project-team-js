import React, { useState } from "react";

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
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="What skill would you like to track?"
      ></input>
      <button onClick={handleSubmit}>
        {/* {" "} */}
        {buttonText}
      </button>
    </div>
  );
}

export default SkillInput;
