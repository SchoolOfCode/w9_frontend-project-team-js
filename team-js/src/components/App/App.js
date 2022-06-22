import React, { useEffect, useState } from "react";
import Profile from "../Profile";
import Skills from "../Skills";

import GoalCard from "../GoalsCard";

import "./App.css";

const goals = [
  { goalId: 1, details: "get better at react", complete: true },
  { goalId: 2, details: "get better at backend", complete: false },
  { goalId: 3, details: "get better at all of it", complete: false },
];

const toggle = { showGoal: false, showSkills: true };

function App() {
  const [show, setShow] = useState(toggle);
  // Start of Goals
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
  // End of Goals

  // Start of Users and Skills

  const [user, setUser] = useState();
  const [skills, setSkills] = useState();

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch("/user");
      const data = await response.json();
      setUser(data);
    }
    fetchUserData();
    console.log("This is the user data: " + user);
  }, []);

  useEffect(() => {
    async function fetchSkillsData() {
      const response = await fetch("/skills");
      const data = await response.json();
      setSkills(data);
    }
    fetchSkillsData();

    console.log("This is the skills data: " + skills);
  }, []);

  if (!user || !skills) {
    return <div>Server Pending</div>;
  }
  // End of Users and Skills

  // Start of toggle feature

  return (
    <div className="app-container">
      <Profile profileDetails={user} />

      {show.showSkills ? (
        <Skills skillsList={skills} />
      ) : (
        <GoalCard
          goallist={goalList}
          handleToggle={handleToggle}
          handleFilter={handleFilter}
          addGoal={addGoal}
          buttonText={`Lets f do this!!`}
        />
      )}
    </div>
  );
}

export default App;
