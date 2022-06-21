import Ratings from "react-ratings-declarative";

// Display only title and star
// click event to show notes

function SkillCard({ id, title, starRating, callChangeRating, notes }) {
  return (
    <div className="Skill-card" id={id}>
      <label>{title}</label>
      <p>{notes}</p>
      <Ratings
        rating={starRating}
        widgetDimensions="2vw"
        widgetSpacings="0vw"
        changeRating={callChangeRating}
      >
        <Ratings.Widget widgetRatedColor="yellow" widgetHoverColor="yellow" />
        <Ratings.Widget widgetRatedColor="yellow" widgetHoverColor="yellow" />
        <Ratings.Widget widgetRatedColor="yellow" widgetHoverColor="yellow" />
        <Ratings.Widget widgetRatedColor="yellow" widgetHoverColor="yellow" />
        <Ratings.Widget widgetRatedColor="yellow" widgetHoverColor="yellow" />
      </Ratings>
    </div>
  );
}

export default SkillCard;
