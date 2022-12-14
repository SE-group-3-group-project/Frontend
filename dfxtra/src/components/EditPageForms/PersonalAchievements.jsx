import { useState } from "react";
import TextInput from "../../Utils/Input.jsx"

const PersonalAchievementsForm = ({ personalAchievements }) => {

    let achievement;
    let description;
    let year;

    for (let i = 0; i < personalAchievements.length; i++) {
        achievement = personalAchievements[i].achievement;
        description = personalAchievements[i].description;
        year = personalAchievements[i].year;
    }

    const [achievementsProfile, setAchievementsProfile] = useState({
        achievementTitle: achievement,
        achievementDescription: description,
        achievementYear: year,
    })

    const updateAchievementsFields = (e) => {
        const { id, value } = e.target
        setAchievementsProfile({ ...achievementsProfile, [id]: value })
    }

    const [formFields, setFormFields] = useState([
        {
            achievement: "",
            description: "",
            year: "",
        },
    ])

    const addFields = () => {
        let object = {
            achievement: "",
            description: "",
            year: "",
        }

        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
    }

    return (
        <div className="flex flex-col px-2 w-full">
            <div className="flex flex-row items-center justify-between">
                <h2 className="pt-2 pb-4">Personal Achievements:</h2>
                <button
                    className="w-fit h-fit bg-light-grey text-royal-blue font-medium border rounded-md px-4 py-2"
                    onClick={addFields}
                >
                    Add
                </button>
            </div>
            <div className="flex flex-col" id="personal-achievements">
                <form className="flex flex-col items-center">
                    {formFields.map((form, index) => {
                        return (
                            <div className="w-full flex flex-col items-center lg:flex lg:flex-row" key={index}>
                                <div className="w-full px-3 pb-4">
                                    <TextInput
                                        label="personal achievements"
                                        id="achivementsTitle"
                                        placeholder="Regional Juggling Champion"
                                        value={achievementsProfile.achievementTitle}
                                        onChange={updateAchievementsFields}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <TextInput
                                        label="description"
                                        id="achievementDescription"
                                        type="text"
                                        placeholder="First place out of 30 contestants"
                                        value={achievementsProfile.achievementDescription}
                                        onChange={updateAchievementsFields}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <TextInput
                                        label="year"
                                        id="achievementYear"
                                        type="number"
                                        min="1800"
                                        max="2022"
                                        placeholder="year completed"
                                        value={achievementsProfile.achievementYear}
                                        onChange={updateAchievementsFields}
                                        required />
                                </div>
                                <div className="flex flex-col">
                                    <button
                                        className="bg-red-100 text-red-500 py-1 px-2.5 rounded-md"
                                        type="button"
                                        onClick={() => removeFields(index)}
                                    >
                                        Remove
                                    </button>
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