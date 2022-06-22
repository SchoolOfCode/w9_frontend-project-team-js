import React, { useState } from "react";
import Profile from "../Profile";
import Skills from "../Skills";
import GoalCard from "../GoalsCard";
import "./App.css";

const dummyProfile = [
  {
    userName: "Adam",
    bio: "Bootcamper no.1455",
    imageSrc:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/therock-253954517-279993034023432-628278073878740852-n-1636731864.jpg",
    help: ["css", "html", "react"],
    improve: ["node.js", "postgres"],
  },
];

const goals = [
  { goalId: 1, details: "get better at react", complete: true },
  { goalId: 2, details: "get better at backend", complete: false },
  { goalId: 3, details: "get better at all of it", complete: false },
];

function App() {
  const [goalList, setGoalList] = useState(goals);

  // Toggle function to allow strike through of completed tasks
  const handleToggle = (id) => {
    let mapped = goalList.map((goal) => {
      return goal.goalId === Number(id)
        ? { ...goal, complete: !goal.complete }
        : { ...goal };
    });
    setGoalList(mapped);
  };

  // Handle Filter Function used for delete button on each ToDo
  const handleFilter = () => {
    let filtered = goalList.filter((goal) => {
      return !goal.complete;
    });
    setGoalList(filtered);
  };

  // Add task function to be called on button click
  const addGoal = (userInput) => {
    console.log(goalList);
    let copy = [...goalList];
    copy = [
      ...copy,
      { goalId: goalList.length + 1, details: userInput, complete: false },
    ];
    setGoalList(copy);
  };

  //console.log(`app is running ok`);
  //console.log(goalList);
  return (
    <div className="app-container">
      <Profile profileDetails={dummyProfile} />
      {/* <Skills/> */}
      <GoalCard
        goallist={goalList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
        addGoal={addGoal}
        buttonText={`Lets f do this!!`}
      />
    </div>
  );
}

export default App;
