import { useState } from "react";
import TextInput from "../../Utils/Input.jsx"

const SchoolForm = ({ storyProgress, setStoryProgress, inputSchoolQualifications, setSchoolQualifications }) => {
    let schoolName;
    let schoolExamType;
    let schoolSubject;
    let schoolGrade;
    let schoolStart;
    let schoolEnd;

    for (let i = 0; i < inputSchoolQualifications.length; i++) {
        schoolName = inputSchoolQualifications[i].school;
        schoolExamType = inputSchoolQualifications[i].examType;
        schoolSubject = inputSchoolQualifications[i].subject;
        schoolGrade = inputSchoolQualifications[i].grade;
        schoolStart = new Date(inputSchoolQualifications[i].startDate).toISOString().split('T')[0];
        schoolEnd = new Date(inputSchoolQualifications[i].endDate).toISOString().split('T')[0];
    }

    const [schoolProfiles, setSchoolProfile] = useState([{
        school: schoolName,
        examType: schoolExamType,
        subject: schoolSubject,
        grade: schoolGrade,
        startDate: schoolStart,
        endDate: schoolEnd,
    }])
    const updateSchoolFields = (index, event) => {
        // const { id, value } = e.target
        const values = [...schoolProfiles];
        values[index][event.target.id] = event.target.value;
        setSchoolProfile(values)
    }

    const addFields = () => {
        const values = [...schoolProfiles];
        values.push({
            school: "",
            examType: "",
            subject: "",
            grade: "",
            startDate: "",
            endDate: ""
        });
        setSchoolProfile(values)
    }

    const removeFields = (index) => {
        let data = [...schoolProfiles];
        data.splice(index, 1)
        setSchoolProfile(data)
    }
    const handleSave = () => {
        setSchoolQualifications(schoolProfiles)
        setStoryProgress(storyProgress + 10)
    }

    return (
        <div className="flex flex-col px-2 pb-1 w-full border-b">
            <div className="flex flex-row items-center justify-between">
                <h2 className="pt-2 pb-4">School:</h2>
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
            <div className="flex flex-col" id="school-form">
                <form className="flex flex-col items-center">
                    {schoolProfiles.map((schoolProfile, index) => {
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
                                        label="school"
                                        id="school"
                                        placeholder="Walthamstow Upper School"
                                        value={schoolProfile.school}
                                        onChange={event => updateSchoolFields(index, event)}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <TextInput
                                        label="subject"
                                        id="subject"
                                        type="text"
                                        placeholder="Maths"
                                        value={schoolProfile.subject}
                                        onChange={event => updateSchoolFields(index, event)}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <TextInput
                                        label="qualification"
                                        id="examType"
                                        type="text"
                                        placeholder="A Level"
                                        value={schoolProfile.examType}
                                        onChange={event => updateSchoolFields(index, event)}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <TextInput
                                        label="grade"
                                        id="grade"
                                        type="text"
                                        placeholder="A"
                                        value={schoolProfile.grade}
                                        onChange={event => updateSchoolFields(index, event)}
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
                                        value={schoolProfile.startDate}
                                        onChange={event => updateSchoolFields(index, event)}
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
                                        value={schoolProfile.endDate}
                                        onChange={event => updateSchoolFields(index, event)}
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
export default SchoolForm;