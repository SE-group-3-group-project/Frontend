import { useState } from "react";
import TextInput from "../../utils/Input"

const PersonalAchievementsForm = () => {
    const [personalAchievements, setPersonalAchievements] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="flex flex-col px-2 w-full">
            <div className="flex flex-row items-center justify-between">
                <h2 className="pt-2 pb-4">Personal Achievements:</h2>
            </div>
            <div className="flex flex-col" id="personal-achievements">
                <form className="lg:flex lg:flex-row lg:items-center">
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="personal achievements"
                            id="personal-achievements"
                            placeholder="Regional Juggling Champion"
                            value={personalAchievements}
                            inputHandler={setPersonalAchievements}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="description"
                            id="description"
                            type="text"
                            placeholder="First place out of 30 contestants"
                            value={description}
                            inputHandler={setDescription}
                            required />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PersonalAchievementsForm;