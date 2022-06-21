import "./index.css";
import { useState } from "react";
import DisplaySkills from "./DisplaySkills";

// DisplaySkills component map
const dummySkills = [
  {
    skillId: 1,
    title: "JavaScript",
    star: 4,
    notes: "I be getting good at this",
  },
  {
    skillId: 2,
    title: "CSS",
    star: 1,
    notes: "I be getting bad at this",
  },
  {
    skillId: 3,
    title: "node.js",
    star: 2,
    notes: "I be getting ok at this",
  },
];

function Skills() {
  // const [count, setCount] = useState(1);

  return (
    <div className="skills-container">
      <DisplaySkills arr={dummySkills} />
    </div>
  );
}

export default Skills;
