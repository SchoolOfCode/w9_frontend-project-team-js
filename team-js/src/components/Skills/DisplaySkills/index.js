import SkillCard from "../SkillCard";
import { useState } from "react";

function DisplaySkills({ arr, callStarFunction, onClick }) {
  const [maxCards, setMaxCards] = useState(false);
  let reverse = [].concat(arr.payload).reverse();
  return (
    <div>
      {!maxCards
        ? reverse
            .slice(0, 4)
            .map((item) => (
              <SkillCard
                id={item.skillsid}
                title={item.title}
                starRating={item.star}
                callChangeRating={callStarFunction}
                onClick={onClick}
                notes={item.notes}
              />
            ))
        : reverse.map((item) => (
            <SkillCard
              id={item.skillsid}
              title={item.title}
              starRating={item.star}
              callChangeRating={callStarFunction}
              onClick={onClick}
              notes={item.notes}
            />
          ))}

      {arr.payload.length > 4 && (
        <button onClick={() => setMaxCards(true)}>See more</button>
      )}
    </div>
  );
}

export default DisplaySkills;
