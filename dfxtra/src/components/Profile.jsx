// import StorySummary from "./StorySummary";
import { Link } from "react-router-dom"

const Profile = ({ key, name, pEmail, dfEmail, github, linkedin, phone, story }) => {
    return (
        <div className="bg-light-grey py-6 px-4">
            <div className="px-12 py-6 m-4 bg-off-white rounded-2xl">
                <h1 className="heading">Your Profile</h1>
                <Link to="/edit">
                    <button id="edit-button">Edit</button>
                </Link>

                <div className="box">
                    <div className="left">
                        <div className="profile-headings" id={key}>
                            <p className="bold-heading">Name: <span className="plain-content">{name}</span></p>
                            <p className="bold-heading">Personal Email: <span className="plain-content">{pEmail}</span></p>
                            <p className="bold-heading">Digital Futures Email: <span className="plain-content"> {dfEmail}</span></p>
                            <p className="bold-heading">Github:<span className="plain-content"> {github}</span></p>
                            <p className="bold-heading">Linkedin: <span className="plain-content">{linkedin}</span></p>
                            <p className="bold-heading">Phone: <span className="plain-content"> {phone}</span></p>
                        </div>
                    </div>

                    <div className="right">
                        <div className="story">
                            <p className="bold-heading">Personal Story Summary:</p>
                            <div className="summary">
                                <p>Degree</p>
                                <p>School qualifications</p>
                                <p>Work experiences</p>
                                <p>Personal achievements</p>
                                <p>Etc</p>
                            </div>
                            {/* <StorySummary story={story} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;