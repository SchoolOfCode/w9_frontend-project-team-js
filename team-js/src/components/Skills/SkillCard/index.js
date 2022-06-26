import Ratings from "react-ratings-declarative";
import useCollapse from "react-collapsed";


function SkillCard({ id, item, title, starRating, callChangeRating, notes }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

console.log(title)

  return (
    <div className="Skill-card" {...getToggleProps()}>
      <label>{title}</label>
      <p {...getCollapseProps()}>{notes}</p>
      <div className="star-container">
        <Ratings
          id={id}
          rating={starRating}
          widgetDimensions="2vw"
          widgetSpacings="0vw"
          changeRating={callChangeRating}
        >
          <Ratings.Widget widgetRatedColor='#FFCB47' widgetHoverColor='#FFCB47' />
          <Ratings.Widget widgetRatedColor='#FFCB47' widgetHoverColor='#FFCB47' />
          <Ratings.Widget widgetRatedColor='#FFCB47' widgetHoverColor='#FFCB47' />
          <Ratings.Widget widgetRatedColor='#FFCB47' widgetHoverColor='#FFCB47' />
          <Ratings.Widget widgetRatedColor='#FFCB47' widgetHoverColor='#FFCB47' />
        </Ratings>
      </div>
    </div>
  );
}

export default SkillCard;
