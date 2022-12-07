import StorySummary from "./StorySummary";


const Profile = ({ key, name, pEmail, dfEmail, github, linkedin, phone, story }) => {
    return (
        <div className="profile-container">
            <h2 className="heading">Your Profile</h2>
            <button id="edit-button">Edit</button>
            <div className="profile-headings" id={key}>
                <p className="bold-heading">Name: <span className="plain-content">{name}</span></p>
                <p className="bold-heading">Personal Email: <span className="plain-content">{pEmail}</span></p>
                <p className="bold-heading">Digital Futures Email: <span className="plain-content"> {dfEmail}</span></p>
                <p className="bold-heading">Github:<span className="plain-content"> {github}</span></p>
                <p className="bold-heading">Linkedin: <span className="plain-content">{linkedin}</span></p>
                <p className="bold-heading">Phone: <span className="plain-content"> {phone}</span></p>
            </div>
            {/* <StorySummary story={story} /> */}
        </div>
    );
};

export default Profile;