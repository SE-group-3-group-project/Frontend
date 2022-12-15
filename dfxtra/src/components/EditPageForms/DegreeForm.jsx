import { useState } from "react";
import TextInput from "../../Utils/Input.jsx"

const DegreeForm = ({ storyProgress, setStoryProgress, inputDegrees, setDegree }) => {
    let universityName;
    let universitySubject;
    let universityDegreeLevel;
    let universityGrade;
    let universityStart;
    let universityEnd;

    for (let i = 0; i < inputDegrees.length; i++) {
        universityName = inputDegrees[i].university;
        universitySubject = inputDegrees[i].degreeSubject;
        universityDegreeLevel = inputDegrees[i].degreeLevel;
        universityGrade = inputDegrees[i].grade;
        universityStart = new Date(inputDegrees[i].startDate).toISOString().split('T')[0];
        universityEnd = new Date(inputDegrees[i].endDate).toISOString().split('T')[0];
    }

    const [degreesProfiles, setDegreesProfile] = useState([{
        university: universityName,
        degreeSubject: universitySubject,
        degreeLevel: universityDegreeLevel,
        grade: universityGrade,
        startDate: universityStart,
        endDate: universityEnd,
    }])

    const updateDegreesFields = (index, event) => {
        const values = [...degreesProfiles];
        values[index][event.target.id] = event.target.value;
        setDegreesProfile(values)
    }

    const addFields = () => {
        const values = [...degreesProfiles];
        values.push({
            university: "",
            degreeSubject: "",
            degreeLevel: "",
            grade: "",
            startDate: "",
            endDate: "",
        });
        setDegreesProfile(values)
    }

    const removeFields = (index) => {
        let data = [...degreesProfiles];
        data.splice(index, 1)
        setDegreesProfile(data)
    }

    const handleSave = () => {
        setDegree(degreesProfiles)
        setStoryProgress(storyProgress + 10)
    }

    return (
        <div className="flex flex-col px-2 pb-1 w-full border-b">
            <div className="flex flex-row items-center justify-between">
                <h2 className="pt-2 pb-4">Degrees:</h2>
                <div className="flex flex-row gap-3">
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
            <div className="flex flex-col" id="degree-form">
                <form className="flex flex-col items-center">
                    {degreesProfiles.map((degreesProfile, index) => {
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
                                        label="university"
                                        id="university"
                                        placeholder="University of Arts London"
                                        value={degreesProfile.university}
                                        onChange={event => updateDegreesFields(index, event)}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <TextInput
                                        label="subject"
                                        id="degreeSubject"
                                        type="text"
                                        placeholder="Photography"
                                        value={degreesProfile.degreeSubject}
                                        onChange={event => updateDegreesFields(index, event)}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <TextInput
                                        label="degree level"
                                        id="degreeLevel"
                                        type="text"
                                        placeholder="Masters"
                                        value={degreesProfile.degreeLevel}
                                        onChange={event => updateDegreesFields(index, event)}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <TextInput
                                        label="grade"
                                        id="grade"
                                        type="text"
                                        placeholder="2:1"
                                        value={degreesProfile.grade}
                                        onChange={event => updateDegreesFields(index, event)}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="degree-from">
                                        From
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        name="degree-from"
                                        id="startDate"
                                        type="date"
                                        value={degreesProfile.startDate}
                                        onChange={event => updateDegreesFields(index, event)}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="degree-to">
                                        To
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        name="degree-to"
                                        id="endDate"
                                        type="date"
                                        value={degreesProfile.endDate}
                                        onChange={event => updateDegreesFields(index, event)}
                                        required />
                                </div>
                                <div className="flex flex-col">
                                </div>
                            </div>
                        )
                    })}
                </form>
            </div >

        </div >
    )
}

export default DegreeForm;