import { useState } from "react";
import TextInput from "../../Utils/Input.jsx"

const PersonalAchievementsForm = ({ storyProgress, setStoryProgress, inputAchievements, setAchievements }) => {

    let achievementTitle;
    let achievementDescription;
    let achievementYear;

    for (let i = 0; i < inputAchievements.length; i++) {
        achievementTitle = inputAchievements[i].achievement;
        achievementDescription = inputAchievements[i].description;
        achievementYear = inputAchievements[i].year;
    }

    const [achievementsProfiles, setAchievementsProfile] = useState([{
        achievement: achievementTitle,
        description: achievementDescription,
        year: achievementYear,
    }])

    const updateAchievementsFields = (index, event) => {
        const values = [...achievementsProfiles];
        values[index][event.target.id] = event.target.value;
        setAchievementsProfile(values)
    }
    const addFields = () => {
        const values = [...achievementsProfiles];
        values.push({
            achievement: "",
            description: "",
            year: "",
        });
        setAchievementsProfile(values)
    }

    const removeFields = (index) => {
        let data = [...achievementsProfiles];
        data.splice(index, 1)
        setAchievementsProfile(data)
    }
    const handleSave = () => {
        setAchievements(achievementsProfiles)
        setStoryProgress(storyProgress + 10)
    }

    return (
        <div className="flex flex-col px-2 pb-1 w-full border-b">
            <div className="flex flex-row items-center justify-between">
                <h2 className="pt-2 pb-4">Personal Achievements:</h2>
                <div className="flex flex-row gap-2">
                    <button
                        className="w-fit h-fit bg-light-blue text-white font-medium rounded-md px-4 py-2 hover:bg-royal-blue"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                    <button
                        className="bg-light-grey text-royal-blue font-medium rounded-md py-1 px-4"
                        type="button"
                        onClick={() => addFields()}
                    >
                        Add
                    </button>
                </div>
            </div>
            <div className="flex flex-col" id="personal-achievements">
                <form className="flex flex-col items-center">
                    {achievementsProfiles.map((achievementsProfile, index) => {
                        return (
                            <div className="w-full flex flex-col items-center lg:flex lg:flex-row" key={index}>
                                <button
                                    className="bg-red-100 text-red-500 text-xl text-center rounded-md py-1 px-3 mt-1.5"
                                    type="button"
                                    onClick={() => removeFields(index)}
                                >
                                    X
                                </button>
                                <div className="w-full px-3 pb-4">
                                    <TextInput
                                        label="achievement"
                                        id="achievement"
                                        placeholder="Regional Juggling Champion"
                                        value={achievementsProfile.achievement}
                                        onChange={event => updateAchievementsFields(index, event)}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <TextInput
                                        label="description"
                                        id="description"
                                        type="text"
                                        placeholder="First place out of 30 contestants"
                                        value={achievementsProfile.description}
                                        onChange={event => updateAchievementsFields(index, event)}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <TextInput
                                        label="year"
                                        id="year"
                                        type="number"
                                        min="1800"
                                        max="2022"
                                        placeholder="year completed"
                                        value={achievementsProfile.year}
                                        onChange={event => updateAchievementsFields(index, event)}
                                        required />
                                </div>
                            </div>
                        )
                    })}
                </form>
            </div>
        </div>
    )
}
export default PersonalAchievementsForm;