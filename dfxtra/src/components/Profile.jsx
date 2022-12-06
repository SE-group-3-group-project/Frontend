const Profile = () => {
    return (
        <div className="profile-container">
            <h2>Your Profile</h2>
            <div className="profile-headings">
                <p>Name:</p>
                <p>Personal Email:</p>
                <p>Github:</p>
                <p>Linkedin:</p>
                <p>phone:</p>
            </div>
            <div className="story">
                <p>Personal Story Summary:</p>
                <div className="summary"></div>
            </div>

        </div>
    );
};

export default Profile;