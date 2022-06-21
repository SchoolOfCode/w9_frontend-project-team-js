import Profile from "../Profile";
import "./App.css";

const dummyProfile = [
  {
    userName: "Adam",
    bio: "Bootcamper no.1455",
    imageSrc:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/therock-253954517-279993034023432-628278073878740852-n-1636731864.jpg",
    help: ["css", "html", "react"],
    improve: ["node.js", "postgres"],
  },
];

function App() {
  return <Profile profileDetails={dummyProfile} />;
}

export default App;
