import SkillCard from "../SkillCard";
import { useState } from "react";
import './index.css';


function DisplaySkills({ arr, callStarFunction }) {
  const [maxCards, setMaxCards] = useState(false);
  let reverse = [].concat(arr.payload).reverse();
  console.log(reverse);
  return (
    <div>
    {!maxCards ? (
    reverse.slice(0, 4).map((item) => (
    
        <SkillCard className='skill-card'
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
          id={item.skillsid}
          title={item.title}
          starRating={item.star}
          callChangeRating={callStarFunction}
          notes={item.notes}
        />
      ))
     )} 
      
      {arr.payload.length > 4 && (
        <button onClick={() => setMaxCards(true)}>See more</button>
      )}
    </div>
  );
}

export default DisplaySkills;
