

const Profile = ({ key, name, pEmail, dfEmail, github, linkedin, phone, story }) => {
    return (
        <div className="profile-container">
            <h2>Your Profile</h2>
            <div className="profile-headings" id={key}>
                <p>Name: {name}</p>
                <p>Personal Email: {pEmail}</p>
                <p>Digital Futures Email {dfEmail}</p>
                <p>Github: {github}</p>
                <p>Linkedin: {linkedin}</p>
                <p>phone: {phone}</p>
            </div>


        </div>
    );
};

export default Profile;