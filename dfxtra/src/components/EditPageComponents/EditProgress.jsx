import axios from 'axios';
const EditProgress = ({ progress, totalData }) => {
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
                github: contactDetails.dfEmail,
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
        console.log(submitData);
            try {
                 await axios.put(
                    `${process.env.REACT_APP_LOCALHOST}63974c4181a2a1af5d8f2f35`,
                    submitData
                );
            } catch (error) {
            }
    }

    return (
        <div className="px-12 py-6 m-4 bg-white flex flex-col sm:flex-row justify-between rounded-2xl">
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
            <div className="flex flex-row items-center justify-center gap-4">
                <button className="h-fit border rounded-full bg-white px-3 py-1 sm:py-3 sm:px-4 hover:bg-light-blue hover:text-white" onClick={handleSubmit}>Submit Draft</button>
                <button className="h-fit border rounded-full bg-royal-blue text-white px-3 py-1 sm:py-3 sm:px-4 hover:opacity-70">Reset Draft</button>
            </div>
        </div >
    );
};

export default EditProgress;