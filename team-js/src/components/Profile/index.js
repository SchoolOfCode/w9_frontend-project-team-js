import "./index.css";

function Profile({ profileDetails }) {
  // function that takes array and adds separator ', '

  return (
    <div className="profile-container">
      <div className="profile-pic">
        <img
          src={profileDetails[0].imageSrc}
          alt="user"
          className="profile-image"
        />
      </div>

      <div className="info-area">
        <div className="info-area-box">
          <label>Username</label>
          <p>{profileDetails[0].userName} </p>
        </div>

        <div className="info-area-box">
          <label>Bio</label>
          <p>{profileDetails[0].bio}</p>
        </div>

        <div className="info-area-box">
          <label>I want to help with</label>
          <p>{profileDetails[0].help} </p>
        </div>

        <div className="info-area-box">
          <label>I want to improve</label>
          <p>{profileDetails[0].improve} </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
