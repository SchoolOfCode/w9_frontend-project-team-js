import SkillCard from "../SkillCard";

function DisplaySkills({ arr, callStarFunction }) {
  return (
    <div>
      {arr.payload.map((item) => (
        <SkillCard
          id={item.skillsid}
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
