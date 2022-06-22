import React from "react";

const Goal = ({ goal, handleToggle }) => {
  const handleClick = (e) => {
    // console.log(e.currentTarget.id);
    // e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  //console.log(goal);
  return (
    <div
      id={goal.goalId}
      key={goal.goalId}
      onClick={handleClick}
      className={goal.complete ? "strike goal" : "goal"}
    >
      {goal.details}
    </div>
  );
};

export default Goal;
