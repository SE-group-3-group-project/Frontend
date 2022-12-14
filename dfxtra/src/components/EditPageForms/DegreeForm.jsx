import { useState } from "react";
import TextInput from "../../utils/Input"

const DegreeForm = ({ degrees }) => {
    let university;
    let subject;
    let degreeLevel;
    let grade;
    let startDate;
    let endDate;

    for (let i = 0; i < degrees.length; i++) {
        university = degrees[i].university;
        subject = degrees[i].degreeSubject;
        degreeLevel = degrees[i].degreeLevel;
        grade = degrees[i].grade;
        startDate = new Date(degrees[i].startDate).toISOString().split('T')[0];
        endDate = new Date(degrees[i].endDate).toISOString().split('T')[0];
    }

    const [degreesProfile, setDegreesProfile] = useState({
        universityName: university,
        universitySubject: subject,
        universityDegreeLevel: degreeLevel,
        universityGrade: grade,
        universityStart: startDate,
        universityEnd: endDate,
    })

    const updateDegreesFields = (e) => {
        const { id, value } = e.target
        setDegreesProfile({ ...degreesProfile, [id]: value })
    }

    // function handleSave() {
    //     const container = document.querySelector("#degree-form");
    //     const allInput = container.querySelectorAll("input");
    //     for (let i = 0; i < allInput.length; i++) {
    //         allInput[i].readOnly = true;
    //         allInput[i].style.background = "#667589"
    //         allInput[i].style.color = "#EAEAEA"
    //     }
    // }

    return (
        <div className="flex flex-col px-2 w-full">
            <div className="flex flex-row items-center justify-between">
                <h2 className="pt-2 pb-4">Degrees:</h2>
            </div>
            <div className="flex flex-col" id="degree-form">
                <form className="lg:flex lg:flex-row lg:items-end">
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="university"
                            id="universityName"
                            placeholder="University of Arts London"
                            value={degreesProfile.universityName}
                            onChange={updateDegreesFields}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="subject"
                            id="niversitySubject"
                            type="text"
                            placeholder="Photography"
                            value={degreesProfile.universitySubject}
                            onChange={updateDegreesFields}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="degree level"
                            id="universityDegreeLevel"
                            type="text"
                            placeholder="Masters"
                            value={degreesProfile.universityDegreeLevel}
                            onChange={updateDegreesFields}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="grade"
                            id="universityGrade"
                            type="text"
                            placeholder="2:1"
                            value={degreesProfile.universityGrade}
                            onChange={updateDegreesFields}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="degree-from">
                            From
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            name="degree-from"
                            id="universityStart"
                            type="date"
                            value={degreesProfile.universityStart}
                            onChange={updateDegreesFields}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="degree-to">
                            To
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            name="degree-to"
                            id="universityEnd"
                            type="date"
                            value={degreesProfile.universityEnd}
                            onChange={updateDegreesFields}
                            required />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default DegreeForm;