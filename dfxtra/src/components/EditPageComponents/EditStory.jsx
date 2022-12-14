import Certifications from "../EditPageForms/CertificationsForm";
import { useState } from "react";
import DegreeForm from "../EditPageForms/DegreeForm";
import PersonalAchievementsForm from "../EditPageForms/PersonalAchievements";
import Portfolio from "../EditPageForms/PortfolioForm";
import SchoolForm from "../EditPageForms/SchoolForm";
import WorkForm from "../EditPageForms/WorkForm";

const EditStory = ({ progress, setProgress, stories, setCurrentStories }) => {
    const [workExperiences, setWork] = useState({})
    const [degrees, setDegree] = useState({})
    const [schoolQualifications, setSchoolQualifications] = useState({})
    const [certifications, setCertifications] = useState({});
    const [personalAchievements, setAchievements] = useState({});
    const [portfolio, setPortfolio] = useState({})

    const inputWork = stories.workExperiences;
    const inputDegrees = stories.degrees;
    const inputSchoolQualifications = stories.schoolQualifications;
    const inputCertifications = stories.certifications;
    const inputAchievements = stories.personalAchievements;
    const inputPortfolio = stories.portfolio;

    const handleSave = () => {
        if (progress < 100) {
            setProgress(progress + 50)
        }
        const data = { workExperiences, degrees, schoolQualifications, certifications, personalAchievements, portfolio };
        setCurrentStories(data)
    }



    return (
        <>
            <div className="flex flex-col px-12 py-6 m-4 bg-white rounded-2xl">
                <h1 className="pt-2 text-xl text-royal-blue">Personal Story</h1>
                <div className="flex flex-col justify-between md:justify-evenly gap-4 py-3">
                    <WorkForm
                        inputWork={inputWork}
                        setWork={setWork}
                    />
                    <DegreeForm
                        inputDegrees={inputDegrees}
                        setDegree={setDegree}
                    />
                    <SchoolForm
                        inputSchoolQualifications={inputSchoolQualifications}
                        setSchoolQualifications={setSchoolQualifications}
                    />
                    <Certifications
                        inputCertifications={inputCertifications}
                        setCertification={setCertifications}
                    />
                    <PersonalAchievementsForm
                        inputAchievements={inputAchievements}
                        setAchievements={setAchievements}
                    />
                    <Portfolio
                        inputPortfolio={inputPortfolio}
                        setPortfolio={setPortfolio}
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