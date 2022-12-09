// import StorySummary from "./StorySummary";
import { Link } from "react-router-dom"

const Profile = ({ key, name, pEmail, dfEmail, github, linkedin, phone, story }) => {
    return (
        <div className="bg-light-grey py-6 px-4">
            <div className="px-12 py-6 my-4 bg-off-white rounded-2xl w-fit mx-auto">
                <div className="flex flex-row items-center gap-6">
                    <h1 className="text-3xl py-2">Your Profile</h1>
                    <Link to="/edit">
                        <button className="bg-light-grey text-royal-blue border rounded px-3 py-0.5" id="edit-button">Edit</button>
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center">
                    <div className="flex flex-col">
                        <p className="font-semibold">Name: <span className="font-normal">{name}</span></p>
                        <p className="font-semibold">Personal Email: <span className="font-normal">{pEmail}</span></p>
                        <p className="font-semibold">Digital Futures Email: <span className="font-normal"> {dfEmail}</span></p>
                        <p className="font-semibold">Github:<span className="font-normal"> {github}</span></p>
                        <p className="font-semibold">Linkedin: <span className="font-normal">{linkedin}</span></p>
                        <p className="font-semibold">Phone: <span className="font-normal"> {phone}</span></p>
                    </div>

                    <div className="flex flex-col sm:py-2 sm:px-4 sm:ml-20">
                        <p className="font-semibold pb-2">Personal Story Summary:</p>
                        <div className="lg:grid lg:grid-cols-4 lg:gap-y-2 lg:gap-x-2 items-center border border-light-blue rounded-lg py-1 px-2 sm:py-2 sm:px-4">
                            <p className="font-medium">Work experiences:</p>
                            <p>2015-2020</p>
                            <p>ArchitectCorp LLP</p>
                            <p className="pb-2 sm:pb-0">Architect</p>
                            <p className="font-medium">Degree:</p>
                            <p>2012-2015</p>
                            <div className="flex flex-col">
                                <p>School of Life</p>
                                <p>Philosophy</p>
                            </div>
                            <p className="pb-2 sm:pb-0">2:1</p>
                            <p className="font-medium">School:</p>
                            <p>2002 - 2012</p>
                            <p>Friday High School</p>
                            <p className="pb-2 sm:pb-0">2A*, 2B</p>
                            <p className="font-medium">Personal Achievements:</p>
                            <p>Juggling</p>
                            <p>Axe-throwing</p>
                            <p className="pb-2 sm:pb-0">Stand-up comedy</p>
                            {/* <StorySummary story={story} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;