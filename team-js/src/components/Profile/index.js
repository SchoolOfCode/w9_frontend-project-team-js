import "./index.css";

function Profile() {
  return (

    <div className="profile-container">

        <div className="profile-pic">
            <img alt="user" className="profile-image"/>
        </div>

        <div className="info-area">
                <p>Username</p>
                <p>Bio</p>
                <p>I want to help with: </p>
                <p>I want to improve: </p>
        </div>


    </div>
  )
  
}

export default Profile;