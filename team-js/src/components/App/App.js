import Profile from "../Profile";
import Skills from "../Skills";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/user");
      const data = await response.json();
      setUser(data);
    }
    fetchData();
    console.log("This is the user data: " + user);
  }, []);

  if (!user) {
    return <div>Server Pending</div>;
  }
  return (
    <div className="app-container">
      <Profile profileDetails={user} />
      <Skills />
    </div>
  );
}

export default App;
