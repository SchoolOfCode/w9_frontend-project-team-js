import "./index.css";
import DisplaySkills from "./DisplaySkills";

function Skills({ skillsList }) {
  return (
    <div className="skills-container">
      <DisplaySkills arr={skillsList} />
    </div>
  );
}

export default Skills;
