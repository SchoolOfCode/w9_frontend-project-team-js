import Profile from "../Profile";
import Skills from "../Skills";
import { useEffect, useState } from "react";
import Header from "../Header";
import Hamburger from '../Hamburger/index.js'
import { slide as Menu } from 'react-burger-menu'

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

function App() {
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

  
  return (
    <div>
    
    <header className='Header-top'>
    <Header />
    </header>
    <div className="app-container">
        <Profile profileDetails={user} />
        <Skills skillsList={skills} />
      </div>
    </div>
  );
}

export default App;
