import "./index.css";

function Profile({ profileDetails }) {
  // function that takes array and adds separator ', '

  return (
    <div className="profile-container">
      <div className="profile-pic">
        <img
          src={profileDetails.payload[0].imagesrc}
          alt="user"
          className="profile-image"
        />
      </div>

      <div className="info-area">
        <div className="info-area-box">
          <label>Username</label>
          <p>{profileDetails.payload[0].name} </p>
        </div>

        <div className="info-area-box">
          <label>Bio</label>
          <p>{profileDetails.payload[0].bio}</p>
        </div>

        <div className="info-area-box">
          <label>I want to help with</label>
          <p>{profileDetails.payload[0].skillsgood} </p>
        </div>

        <div className="info-area-box">
          <label>I want to improve</label>
          <p>{profileDetails.payload[0].skillsbad} </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
