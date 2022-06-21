import SkillCard from "../SkillCard";

function DisplaySkills({ arr, callStarFunction }) {
  return (
    <div>
      {arr.map((item) => (
        <SkillCard
          id={item.skillId}
          title={item.title}
          starRating={item.star}
          callChangeRating={callStarFunction}
          notes={item.notes}
        />
      ))}
    </div>
  );
}

export default DisplaySkills;
