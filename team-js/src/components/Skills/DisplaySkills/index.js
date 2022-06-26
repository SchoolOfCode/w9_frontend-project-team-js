import SkillCard from "../SkillCard";
import { useState } from "react";
import './index.css';


function DisplaySkills({ arr, callStarFunction }) {
  const [maxCards, setMaxCards] = useState(false);
  let reverse = [].concat(arr.payload).reverse();
  return (
    <div>
    {!maxCards ? (
    reverse.slice(0, 4).map((item) => (
    
        <SkillCard className='skill-card'
          item={item}
          id={item.skillsid}
          title={item.title}
          starRating={item.star}
          callChangeRating={callStarFunction}
          notes={item.notes}
        />
     
      ))
     ):(
       reverse.map((item) => (
        <SkillCard
          item={item}
          starRating={item.star}
          id={item.skillsid}
          title={item.title}
          notes={item.notes}
        />
      ))
     )} 
      
      {arr.payload.length > 4 && (
        <button className="button-56" onClick={() => setMaxCards(true)}>See more</button>
      )}
    </div>
  );
}

export default DisplaySkills;
