import Certifications from "../EditPageForms/CertificationsForm";
import { useState } from "react";
import DegreeForm from "../EditPageForms/DegreeForm";
import PersonalAchievementsForm from "../EditPageForms/PersonalAchievements";
import Portfolio from "../EditPageForms/PortfolioForm";
import SchoolForm from "../EditPageForms/SchoolForm";
import WorkForm from "../EditPageForms/WorkForm";

const EditStory = ({ progress, setProgress, stories, setCurrentStories }) => {
    const [workExperiences, setWork] = useState({});
    const [degrees, setDegree] = useState({});
    const [schoolQualifications, setSchoolQualifications] = useState({});
    const [certifications, setCertifications] = useState({});
    const [personalAchievements, setAchievements] = useState({});
    const [portfolio, setPortfolio] = useState({});
    const [storyProgress, setStoryProgress] = useState(0);

    const inputWork = stories.workExperiences;
    const inputDegrees = stories.degrees;
    const inputSchoolQualifications = stories.schoolQualifications;
    const inputCertifications = stories.certifications;
    const inputAchievements = stories.personalAchievements;
    const inputPortfolio = stories.portfolio;

    const handleSave = () => {
        if (progress < 100) {
            setProgress(progress + storyProgress)
        }
        const data = { workExperiences, degrees, schoolQualifications, certifications, personalAchievements, portfolio };
        setCurrentStories(data)
    }

    console.log(storyProgress)

    return (
        <>
            <div className="flex flex-col px-12 py-6 m-4 bg-white rounded-2xl">
                <h1 className="pt-2 text-xl text-royal-blue">Personal Story</h1>
                <div className="flex flex-col justify-between md:justify-evenly gap-4 py-3">
                    <WorkForm
                        inputWork={inputWork}
                        setWork={setWork}
                        storyProgress={storyProgress}
                        setStoryProgress={setStoryProgress}
                    />
                    <DegreeForm
                        inputDegrees={inputDegrees}
                        setDegree={setDegree}
                        storyProgress={storyProgress}
                        setStoryProgress={setStoryProgress}
                    />
                    <SchoolForm
                        inputSchoolQualifications={inputSchoolQualifications}
                        setSchoolQualifications={setSchoolQualifications}
                        storyProgress={storyProgress}
                        setStoryProgress={setStoryProgress}
                    />
                    <Certifications
                        inputCertifications={inputCertifications}
                        setCertification={setCertifications}
                        storyProgress={storyProgress}
                        setStoryProgress={setStoryProgress}
                    />
                    <PersonalAchievementsForm
                        inputAchievements={inputAchievements}
                        setAchievements={setAchievements}
                        storyProgress={storyProgress}
                        setStoryProgress={setStoryProgress}
                    />
                    <Portfolio
                        inputPortfolio={inputPortfolio}
                        setPortfolio={setPortfolio}
                        storyProgress={storyProgress}
                        setStoryProgress={setStoryProgress}
                    />
                </div>
                <button
                    className="w-9/12 place-self-center border rounded-2xl bg-royal-blue text-white px-4 py-1 sm:py-3 sm:px-5 hover:opacity-70"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </>
    );
};

export default EditStory;