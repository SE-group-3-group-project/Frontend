import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const EditProgress = ({ progress, totalData, getProfileHandler }) => {
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const { name, pronoun, profilePicture, contactDetails, nationality, personality, personalStories } = totalData;
    const { workExperiences, degrees, schoolQualifications, certifications, personalAchievements, portfolio } = personalStories;

    const handleSubmit = async () => {
        const submitData = {
            name: name,
            pronoun: pronoun,
            profilePicture: profilePicture,
            contactDetails: {
                personalEmail: contactDetails.personalEmail,
                dfEmail: contactDetails.dfEmail,
                github: contactDetails.github,
                linkedIn: contactDetails.linkedIn,
                phoneNumber: contactDetails.phoneNumber
            },
            nationality: nationality,
            personality: personality,
            personalStories: {
                degrees: degrees,
                schoolQualifications: schoolQualifications,
                workExperiences: workExperiences,
                certifications: certifications,
                personalAchievements: personalAchievements,
                portfolio: portfolio
            }
        }
        try {
            const res = await axios.put(
                `${process.env.REACT_APP_LOCALHOST}63974c4181a2a1af5d8f2f35`,
                submitData
            );
            console.log(res.data.message)
            if (res.data.message === "Profile updated!") {
                getProfileHandler();
                navigate("/profile");
            }
            return
        } catch (error) {
            setError(error)
        }

    }

    return (
        <div className="px-12 py-6 m-4 bg-white flex flex-col items-center justify-between md:grid md:grid-cols-3 rounded-2xl">
            <h1 className="pt-2 pb-4 text-xl text-royal-blue">Your profile</h1>
            <div className="flex flex-col mb-2 items-center justify-between">
                <div className="relative pt-1">
                    <div className="flex py-2 mb-2 items-center justify-between gap-6">
                        <p className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-lg text-royal-blue bg-light-grey">Profile completion:</p>
                        <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-royal-blue">
                                {`${progress}%`}
                            </span>
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-light-grey">
                        <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-light-blue"></div>
                    </div>
                </div>
            </div>
            <div className='place-self-end self-center'>
                <button
                    className="h-fit w-fit border rounded-full bg-royal-blue text-white px-3 py-1 sm:py-3 sm:px-4 hover:bg-light-blue hover:opacity-70"
                    onClick={handleSubmit}
                >Submit Draft</button>

                {/* <button className="h-fit border rounded-full bg-royal-blue text-white px-3 py-1 sm:py-3 sm:px-4 hover:opacity-70">Reset Draft</button> */}
            </div>
        </div >
    );
};

export default EditProgress;