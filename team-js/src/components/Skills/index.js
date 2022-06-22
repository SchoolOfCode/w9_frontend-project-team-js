import "./index.css";
import DisplaySkills from "./DisplaySkills";
import SkillCard from "./SkillCard";
import SkillInput from "./SkillInput";

function Skills({ skillsList, buttonText, addSkill }) {
  return (
    <div className="skills-and-input">
      <SkillInput buttonText={buttonText} addSkill={addSkill} />

      <div className="skills-containers">
        <DisplaySkills arr={skillsList} />
      </div>
    </div>
  );
}

export default Skills;
