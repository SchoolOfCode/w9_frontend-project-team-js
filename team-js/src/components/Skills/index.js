import './index.css'
import {useState} from 'react'
import Ratings from 'react-ratings-declarative';






      


function Skills () {



const [count, setCount] = useState(1);
    return (
        <div className='skills-container'>
            <div className='each-skill'>
                <label>Skill 1 </label>
                <Ratings
        rating={count}
        widgetDimensions="2vw"
        widgetSpacings="0vw"
        changeRating={setCount}
                           
      >
        <Ratings.Widget     widgetRatedColor="yellow" widgetHoverColor="yellow" />
        <Ratings.Widget  widgetRatedColor="yellow" widgetHoverColor="yellow" />
        <Ratings.Widget   widgetRatedColor="yellow" widgetHoverColor="yellow"/>
        <Ratings.Widget   widgetRatedColor="yellow" widgetHoverColor="yellow"/>
        <Ratings.Widget  widgetRatedColor="yellow" widgetHoverColor="yellow"/>
      </Ratings>
            </div>

            <div className='each-skill'>
                <label>Skill 2 </label>
                <Ratings
        rating={count}
        widgetDimensions="2vw"
        widgetSpacings="0vw"
        changeRating={setCount}
                           
      >
        <Ratings.Widget     widgetRatedColor="yellow" widgetHoverColor="yellow" />
        <Ratings.Widget  widgetRatedColor="yellow" widgetHoverColor="yellow" />
        <Ratings.Widget   widgetRatedColor="yellow" widgetHoverColor="yellow"/>
        <Ratings.Widget   widgetRatedColor="yellow" widgetHoverColor="yellow"/>
        <Ratings.Widget  widgetRatedColor="yellow" widgetHoverColor="yellow"/>
      </Ratings>
            </div>

            <div className='each-skill'>
                <label>Skill 3 </label>
                <Ratings
        rating={count}
        widgetDimensions="2vw"
        widgetSpacings="0vw"
        changeRating={setCount}
                           
      >
        <Ratings.Widget     widgetRatedColor="yellow" widgetHoverColor="yellow" />
        <Ratings.Widget  widgetRatedColor="yellow" widgetHoverColor="yellow" />
        <Ratings.Widget   widgetRatedColor="yellow" widgetHoverColor="yellow"/>
        <Ratings.Widget   widgetRatedColor="yellow" widgetHoverColor="yellow"/>
        <Ratings.Widget  widgetRatedColor="yellow" widgetHoverColor="yellow"/>
      </Ratings>
            </div>

            <div className='each-skill'>
                <label>Skill 4</label>
                <div className="star-div">

                <Ratings
        rating={count}
        widgetDimensions="2vw"
        widgetSpacings="0vw"
        changeRating={setCount}
                           
      >
        <Ratings.Widget     widgetRatedColor="yellow" widgetHoverColor="yellow" />
        <Ratings.Widget  widgetRatedColor="yellow" widgetHoverColor="yellow" />
        <Ratings.Widget   widgetRatedColor="yellow" widgetHoverColor="yellow"/>
        <Ratings.Widget   widgetRatedColor="yellow" widgetHoverColor="yellow"/>
        <Ratings.Widget  widgetRatedColor="yellow" widgetHoverColor="yellow"/>
      </Ratings>

                </div>
            </div>

            <div className='each-skill'>
                <label>Skill 5 </label>
                <Ratings
        rating={count}
        widgetDimensions="2vw"
        widgetSpacings="0vw"
        changeRating={setCount}
                           
      >
        <Ratings.Widget     widgetRatedColor="yellow" widgetHoverColor="yellow" />
        <Ratings.Widget  widgetRatedColor="yellow" widgetHoverColor="yellow" />
        <Ratings.Widget   widgetRatedColor="yellow" widgetHoverColor="yellow"/>
        <Ratings.Widget   widgetRatedColor="yellow" widgetHoverColor="yellow"/>
        <Ratings.Widget  widgetRatedColor="yellow" widgetHoverColor="yellow"/>
      </Ratings>
            </div>


        </div>
    )






}

export default Skills