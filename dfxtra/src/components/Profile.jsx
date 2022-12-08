// import StorySummary from "./StorySummary";
import { Link } from "react-router-dom"

const Profile = ({ key, name, pEmail, dfEmail, github, linkedin, phone, story }) => {
    return (
        <div className="bg-light-grey py-6 px-4">
            <div className="px-12 py-6 my-4 mx-10 bg-off-white rounded-2xl">
                <div className="flex flex-row items-center gap-6">
                    <h1 className="text-3xl py-2">Your Profile</h1>
                    <Link to="/edit">
                        <button className="bg-light-grey text-royal-blue border rounded px-3 py-0.5" id="edit-button">Edit</button>
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="flex flex-col" id={key}>
                        <p className="font-semibold">Name: <span className="font-normal">{name}</span></p>
                        <p className="font-semibold">Personal Email: <span className="font-normal">{pEmail}</span></p>
                        <p className="font-semibold">Digital Futures Email: <span className="font-normal"> {dfEmail}</span></p>
                        <p className="font-semibold">Github:<span className="font-normal"> {github}</span></p>
                        <p className="font-semibold">Linkedin: <span className="font-normal">{linkedin}</span></p>
                        <p className="font-semibold">Phone: <span className="font-normal"> {phone}</span></p>
                    </div>

                    <div className="sm:border sm:py-2 sm:px-4 sm:ml-20">
                        <p className="font-semibold">Personal Story Summary:</p>
                        <div className="">
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
    );
};

export default Profile;