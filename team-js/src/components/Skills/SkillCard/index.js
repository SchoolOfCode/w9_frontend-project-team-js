import Ratings from "react-ratings-declarative";
import useCollapse from "react-collapsed";

function SkillCard({
  id,
  title,
  starRating,
  callChangeRating,
  notes,
  onClick,
}) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="Skill-card" id={id} {...getToggleProps()}>
      <label>{title}</label>
      <p {...getCollapseProps()}>{notes}</p>
      <div className="star-container">
        <Ratings
          rating={starRating}
          widgetDimensions="2vw"
          widgetSpacings="0vw"
          changeRating={function () {
            callChangeRating();
            onClick(id);
          }}
        >
          <Ratings.Widget widgetRatedColor="yellow" widgetHoverColor="yellow" />
          <Ratings.Widget widgetRatedColor="yellow" widgetHoverColor="yellow" />
          <Ratings.Widget widgetRatedColor="yellow" widgetHoverColor="yellow" />
          <Ratings.Widget widgetRatedColor="yellow" widgetHoverColor="yellow" />
          <Ratings.Widget widgetRatedColor="yellow" widgetHoverColor="yellow" />
        </Ratings>
      </div>
    </div>
  );
}

export default SkillCard;
