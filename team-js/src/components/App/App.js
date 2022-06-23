import { useEffect, useState } from "react";
import Profile from "../Profile";
import Skills from "../Skills";

import Header from "../Header";
// import Hamburger from "../Hamburger/index.js";
// import { slide as Menu } from "react-burger-menu";

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
  const [goalList, setGoalList] = useState([]);
  const [copyGoalList, setCopyGoalList] = useState([]);

  // Put request handler
  async function updateGoal(goal) {
    const updateId = goal.goalid;
    const url = "/goals/" + updateId;
    console.log(goal);
    await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        details: goal.details,
        complete: !goal.complete,
        notes: goal.notes,
      }),
    });
  }

  // Toggle function to allow strike through of completed tasks
  const handleToggle = (id) => {
    let mapped = goalList.map((goal) => {
      console.log(id);
      if (goal.goalid === Number(id)) {
        updateGoal(goal);
        return { ...goal, complete: !goal.complete };
      } else {
        return { ...goal };
      }
    });
    setGoalList(mapped);
  };

  // DELETE Request for completed items

  async function deleteCompletedGoals(goals) {
    for (let i = 0; i < goals.length; i++) {
      const updateId = goals[i].goalid;
      const url = "/goals/" + updateId;
      await fetch(url, {
        method: "DELETE",
      });
    }
  }

  // Handle Filter Function used for delete button on each ToDo
  const handleFilter = () => {
    let filtered = goalList.filter((goal) => {
      return !goal.complete;
    });

    let deleted = goalList.filter((goal) => {
      return goal.complete;
    });
    console.log(deleted);
    deleteCompletedGoals(deleted);
    setGoalList(filtered);
  };

  // Add task function to be called on button click
  async function postNewGoal(goal) {
    const url = "/goals";
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          details: goal.details,
          complete: goal.complete,
          notes: goal.notes,
        },
      ]),
    });
  }

  const addGoal = async (userInput) => {
    let copy = [...goalList];
    let newGoal = {
      //goalid: goalList.length + 1,
      details: userInput,
      complete: false,
      notes: "",
    };
    copy = [...copy, newGoal];
    setGoalList(copy);
    setCopyGoalList(copy);
    await postNewGoal(newGoal);
    console.log(goalList);
  };

  useEffect(() => {
    async function fetchGoalData() {
      const response = await fetch("/goals");
      const data = await response.json();
      console.log(data.payload);
      setGoalList(data.payload);
    }
    fetchGoalData();
    console.log("This is the goal data: " + user);
  }, [copyGoalList]);

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

  async function postNewSkill(skill) {
    const url = "/skills";
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          title: skill.title,
          star: skill.star,
          notes: skill.notes,
        },
      ]),
    });
  }
  // this will need to be dynamic because new skills or deleted skills will to render
  // another state and have click event change the state
  useEffect(() => {
    async function fetchSkillsData() {
      const response = await fetch("/skills");
      const data = await response.json();
      setSkills(data);
    }
    fetchSkillsData();

    console.log("This is the skills data: " + skills);
  }, []);

  // console.log(skills);
  async function addSkill(userInput) {
    let copy = [...skills.payload];
    let newSkill = {
      skillsId: copy.length + 1,
      title: userInput,
      star: 0,
      notes: "",
    };
    copy = [...copy, newSkill];
    setSkills({ success: true, payload: copy });
    await postNewSkill(newSkill);
  }

  // End of Users and Skills

  // Start of toggle feature

  function toggleClick() {
    const copy = {
      ...show,
      showGoal: !show.showGoal,
      showSkills: !show.showSkills,
    };
    setShow(copy);
  }

  console.log(user);

  if (!user || !skills) {
    return <div>Server Pending</div>;
  }

  return (
    <div>
      <Header />
      <div className="app-container">
        <Profile profileDetails={user} />

        <div className="container-card">
          <button onClick={toggleClick}>Toggle me</button>
          {show.showSkills ? (
            <Skills
              skillsList={skills}
              buttonText={"Add new skill"}
              addSkill={addSkill}
            />
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
      </div>
    </div>
  );
}

export default App;
