# Backpack - from Team.js

## Introduction

Backpack is an app that aims to support students learning to code - or learning any skill for that matter!

The general premise of the app is to help students to keep track of their development, by breaking down the topics into individual skills, as well as tools to assist in improving those skills.

This is currently the MVP for Backpack, V.1.0, and future releases will aim to include functionality such as:

- connecting with friends
- mental health support
- flashcard revision
- resource library
- user login and authentication

## Installation

Clone the two repositories (frontend and backend) down to your machine. Open up two terminals and use one to navigate to front end, and one to navigate to the back.

In both, enter the command to install dependancies:

Install with npm

### Frontend

```bash
cd w9_frontend-project-team-js/team-js
npm i
```

### Backend

```bash
cd w9_backend-project-team-js
npm i
```

Once the necessary nodes have been installed you can spin up the app! First open your backend terminal, and run the dev script:

### Backend

```bash
npm run dev
```

and once thats spinning round round baby right round you can open your Frontend terminal and start the react app 😊

### Frontend

```bash
npm start
```

Backpack will then start up in your browser, and you should be able to see the data pulled through from the database.

## Example

![image](./images/skill.JPG)

This is the default component currently displayed when you start the app. As you will see the data is pulled through from the database. Each skill has its own card, with an accompanying star rating. This is for the users to self-evaluate their abilities.

Users can enter new skills in the Skills Input field above. This will update the database when the button is clicked.

To navigate to the Goals component, the user clicks the Toggle Me button at the top.

![image](./images/goals.JPG)

The Goals component is straight forward, as it stands just a simple To Do list. There is functionality for the user to strike through completed goals by clicking them. When the time comes, they can then remove all striked goalsd by clicking the Clear button at the bottom.

This functionality is persistent and will update the database accordingly.


---

<br/>

## Components

### Goals

The goals compnent rendered on the main page consists of three smaller components:

- GoalCard
- GoalItem
- GoalInput

The GoalItem and GoalInput are both pulled through into the GoalCard, which is then pulled through into app.js.

### GoalCard

_props_

- goallist
- handleToggle
- handleFilter
- addGoal
- buttonText

_behaviour_

- renders entire goals component within dynamic div
- renders the GoalInput component, handing in required props
- maps over goalList array and renders a GoalItem component for each one
- renders a button for clearing the list, with prop handleFilter applied to onClick, which removes checked items on the list

### GoalItem

_props_

- goal
- handleToggle

_behaviour_

- takes goal prop and renders a goal based on the details provided
- assigns key and id to the div
- displays prop goal.details
- depending on status of goal.complete, applies strike class or not

### GoalInput

_state_

- userInput

_props_

- buttonText
- addGoal

_behaviour_

- handleChange function applied to input field, updates state to catch user input
- handleSubmit function takes addGoal prop from app.js to update state in parent


### Profile component

The Profile component is a pure component that dynamically displays the authenticated user's details from the database.

_Prop_

* profileDetails


_Behaviour_

* The profileDetails prop is handed the 'users' state that contains the user details. The users state will be set through a fetch request to the databse.
The object is then accessed in the Profile component and appended to the relevant tags.


### Header component

The Header component is a pure component that displays the logo, 'backpack' in text format and the Hamburger component for a menu.
The Header component has a nested, imported 'Menu' component from 'react-burger-menu' from npmjs.

_Behaviour_

* The Header component displays our Hamburger menu and logo. It uses CSS styling to match our brand appeal. The imported Menu component accepts 'a' tags as links to different parts of the website. This can be updated in the index.js for the Header component. The Menu component also accepts a prop for a custom logo: customBurgerIcon.



### App component

The App component is a smart component that dynamically displays all of our pure components.

_State_

* show
* hover
* goalList
* copyGoalList


_Behaviour_

The App component displays our components by providing various controlled states to our rendered components using the 'useState' Hook.
* The _show_ state is used to set whether the 'Skills' or 'GoalCard' component is displayed in our 'dynamic-container-card' div.
* The _hover_ state is used to set a state for our star ratings in the skills component.
* The _goalList_ state is used to track the users goals.
* The _copyGoalList_ state is used to avoid an inifinite loop when using the useEffect hook. This allows us to track new goal submissions and re-render the GoalCard component accordingly.
