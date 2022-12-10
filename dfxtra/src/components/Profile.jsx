// import StorySummary from "./StorySummary";
import { Link } from "react-router-dom"

const Profile = ({ name, pEmail, dfEmail, github, linkedin, phone, story }) => {
    return (
        <div className="bg-light-grey py-6 px-4">
            <div className="px-12 py-6 my-4 bg-off-white rounded-2xl w-full mx-auto">
                <div className="flex flex-row items-center gap-6">
                    <h1 className="text-3xl py-2">Your Profile</h1>
                    <Link to="/edit">
                        <button className="bg-light-grey text-royal-blue border rounded px-3 py-0.5" id="edit-button">Edit</button>
                    </Link>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-2 pt-8 pb-6 px-2 sm:px-6">
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
                    </div>
                    <div className="w-full max-w-md">
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

                <div className="w-full max-w-4xl md:max-w-6xl py-2">
                    <p className="font-semibold uppercase tracking-wide text-gray-700 text-sm font-bold mb-3">Personal Story Summary:</p>
                    <div className="border border-light-blue rounded-lg py-1 px-4">
                        <div className="my-2 sm:py-2 border-b border-dashed border-mid-grey border-opacity-20">
                            <p className="font-medium">Work experiences:</p>
                            <div className="sm:grid sm:grid-cols-4 sm:gap-y-2 sm:gap-x-4 py-2">
                                <p>2015-2020</p>
                                <p>Architect</p>
                                <p>ArchitectCorp LLP</p>
                            </div>
                        </div>
                        <div className="my-2 sm:py-2 border-b borer-dashed border-mid-grey border-opacity-20">
                            <p className="font-medium">Degree:</p>
                            <div className="sm:grid sm:grid-cols-4 sm:gap-y-2 sm:gap-x-4 py-2">
                                <p>2012-2015</p>
                                <p>School of Life</p>
                                <p>Philosophy</p>
                                <p>2:1</p>
                            </div>
                        </div>
                        <div className="my-2 sm:py-2 border-b border-dashed border-mid-grey border-opacity-20">
                            <p className="font-medium">School:</p>
                            <div className="sm:grid sm:grid-cols-4 sm:gap-y-2 sm:gap-x-4 py-2">
                                <p>2006-2012</p>
                                <p>Friday High School</p>
                                <div className="flex flex-col">
                                    <p>Maths</p>
                                    <p>Physics</p>
                                    <p>Art</p>
                                    <p>Textiles</p>
                                </div>
                                <div className="flex flex-col">
                                    <p>A*</p>
                                    <p>A</p>
                                    <p>B</p>
                                    <p>C</p>
                                </div>
                            </div>
                        </div>
                        <div className="my-2 sm:py-2">
                            <p className="font-medium">Personal Achievements:</p>
                            <div className="sm:grid sm:grid-cols-2 sm:gap-y-2 sm:gap-x-4 py-2">
                                <div className="flex flex-row gap-6">
                                    <p className="font-medium">Juggling:</p>
                                    <p>Regional Juggling Champion</p>
                                </div>
                                <div className="flex flex-row gap-6">
                                    <p className="font-medium">Axe-throwing:</p>
                                    <p>Some description about axe throwing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Profile;