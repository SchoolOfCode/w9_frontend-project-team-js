import "./index.css";
import React from "react";
import Goal from "../GoalItem";
import Input from "../GoalInput";

const GoalCard = ({
  goallist,
  handleToggle,
  handleFilter,
  addGoal,
  buttonText,
}) => {
  return (
    <div className="skills-containers">
      <div className="goal-input">
        <Input addGoal={addGoal} buttonText={buttonText} />
      </div>
      <div>
        {goallist.map((goal) => {
          return (
            <Goal goal={goal} handleToggle={handleToggle} key={goal.goalid} />
          );
        })}
        <button
          className="clear-items-btn"
          onClick={handleFilter}
          style={{ margin: "25px" }}
        >
          Clear Completed Items
        </button>
      </div>
    </div>
  );
};

export default GoalCard;
