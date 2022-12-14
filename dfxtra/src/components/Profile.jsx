import { Link } from "react-router-dom"
import StorySummary from "./StorySummary";

const Profile = ({ name, profilePicture, pEmail, dfEmail, github, linkedin, phone, nationality, personality, story }) => {
    return (
        <div className="bg-light-grey py-6 px-4 sm:px-12">
            <div className="px-12 py-6 my-y bg-off-white rounded-2xl">
                <div className="flex flex-row items-center gap-6">
                    <h1 className="text-3xl py-2 place-content-left">Your Profile</h1>
                    <Link to="/edit">
                        <button className="bg-light-grey text-royal-blue border rounded px-3 py-0.5" id="edit-button">Edit</button>
                    </Link>
                </div>
                <div className="w-full flex flex-col items-center">

                    <div className="flex flex-col items-center justify-between gap-8 lg:grid lg:grid-cols-2 lg:gap-40 pt-8 pb-6 pr-2 sm:px-6 max-w-6xl">
                        <div className="flex flex-wrap justify-center">
                            <img
                                src={profilePicture}
                                alt="grad profile" style={{ "width": "300px", "height": "300px", "borderRadius": "50%" }}
                                className="max-w-md" />
                        </div>
                        <div className="w-full max-w-md">
                            <div className="flex flex-col md:flex-row items-start sm:items-center justify-between pb-4">
                                <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
                                    Name
                                </p>
                                <p className="appearance-none block w-fit sm:w-3/5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white">
                                    {name}
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-start sm:items-center justify-between pb-4">
                                <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
                                    Nationality
                                </p>
                                <p className="appearance-none block w-fit sm:w-3/5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white">
                                    {nationality}
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-start sm:items-center justify-between pb-4">
                                <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
                                    Personality Type
                                </p>
                                <p className="appearance-none block w-fit sm:w-3/5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white">
                                    {personality}
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-start sm:items-center justify-between pb-4">
                                <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
                                    Personal Email
                                </p>
                                <p className="appearance-none block w-fit sm:w-3/5  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white">
                                    {pEmail}
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-start sm:items-center justify-between pb-4">
                                <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
                                    Digital Futures Email
                                </p>
                                <p className="appearance-none block w-fit sm:w-3/5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white">
                                    {dfEmail}
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-start sm:items-center justify-between pb-4">
                                <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
                                    Github Account
                                </p>
                                <p className="appearance-none block w-fit sm:w-3/5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white">
                                    {github}
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-start sm:items-center justify-between pb-4">
                                <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
                                    LinkedIn Account
                                </p>
                                <p className="appearance-none block w-fit sm:w-3/5  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white">
                                    {linkedin}
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-start sm:items-center justify-between pb-4">
                                <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
                                    Phone Number
                                </p>
                                <p className="appearance-none block w-fit sm:w-3/5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white">
                                    {phone}
                                </p>
                            </div>
                        </div>
                    </div>
                    <StorySummary story={story} />
                </div>
            </div>
        </div >
    );
};

export default Profile;