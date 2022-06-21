import "./index.css";
import React from "react";
import Goal from "../GoalItem";

const GoalCard = ({ goallist, handleToggle, handleFilter }) => {
  return (
    <div>
      {goallist.map((goal) => {
        return <Goal goal={goal} handleToggle={handleToggle} />;
      })}
      <button onClick={handleFilter} style={{ margin: "25px" }}>
        Lets tidy this up please
      </button>
    </div>
  );
};

export default GoalCard;
