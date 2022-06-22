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
      console.log(goal.id === Number(id));
      console.log(typeof(goal.id));
      console.log(Number(id));
      return goal.id === Number(id)
        ? { ...goal, complete: !goal.complete }
        : { ...goal };
    });
    console.log(mapped);
    setGoalList(mapped);
  };
  //console.log(`app is running ok`);
  //console.log(goalList);
  return (
    <div className="app-container">
      <Profile profileDetails={dummyProfile} />
      {/* <Skills/> */}
      <GoalCard goallist={goalList} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
