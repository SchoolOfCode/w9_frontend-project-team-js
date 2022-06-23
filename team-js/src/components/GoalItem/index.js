import React from "react";

const Goal = ({ goal, handleToggle }) => {
  const handleClick = (e) => {
    // console.log(e);
    // e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  //console.log(goal);
  return (
    <div
      id={goal.goalid}
      key={goal.goalid}
      onClick={handleClick}
      className={goal.complete ? "strike goal" : "goal"}
    >
      {goal.details}
    </div>
  );
};

export default Goal;
