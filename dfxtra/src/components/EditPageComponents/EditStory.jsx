import DegreeForm from "../EditPageForms/DegreeForm";
import PersonalAchievementsForm from "../EditPageForms/PersonalAchievements";
import SchoolForm from "../EditPageForms/SchoolForm";
import WorkForm from "../EditPageForms/WorkForm";

const EditStory = ({ progress, setProgress }) => {
    const handleSave = () => {
        setProgress(progress + 50)
    }

    return (
        <>
            <div className="flex flex-col px-12 py-6 m-4 bg-white rounded-2xl">
                <h1 className="pt-2 text-xl text-royal-blue">Personal Story</h1>
                <div className="flex flex-col justify-between md:justify-evenly gap-4 py-3">
                    <WorkForm />
                    <DegreeForm />
                    <SchoolForm />
                    <PersonalAchievementsForm />
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