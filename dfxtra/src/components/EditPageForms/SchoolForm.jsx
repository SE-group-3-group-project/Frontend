import { useState } from "react";
import TextInput from "../../utils/Input"

const SchoolForm = ({ schoolQualifications }) => {
    let school;
    let examType;
    let subject;
    let grade;
    let startDate;
    let endDate;

    for (let i = 0; i < schoolQualifications.length; i++) {
        school = schoolQualifications[i].school;
        examType = schoolQualifications[i].examType;
        subject = schoolQualifications[i].subject;
        grade = schoolQualifications[i].grade;
        startDate = new Date(schoolQualifications[i].startDate).toISOString().split('T')[0];
        endDate = new Date(schoolQualifications[i].endDate).toISOString().split('T')[0];
    }

    const [schoolProfile, setSchoolProfile] = useState({
        schoolName: school,
        schoolExamType: examType,
        schoolSubject: subject,
        schoolGrade: grade,
        schoolStart: startDate,
        schoolEnd: endDate,
    })

    const updateSchoolFields = (e) => {
        const { id, value } = e.target
        setSchoolProfile({ ...schoolProfile, [id]: value })
    }

    return (
        <div className="flex flex-col px-2 w-full">
            <h2 className="pt-2 pb-4">School:</h2>
            <div className="flex flex-col" id="school-form">
                <form className="lg:flex lg:flex-row lg:items-end">
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="school"
                            id="schoolName"
                            placeholder="Walthamstow Upper School"
                            value={schoolProfile.schoolName}
                            onChange={updateSchoolFields}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="subject"
                            id="subject"
                            type="text"
                            placeholder="Maths"
                            value={schoolProfile.schoolSubject}
                            onChange={updateSchoolFields}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="qualification-level"
                            id="schoolExamType"
                            type="text"
                            placeholder="A Level"
                            value={schoolProfile.schoolExamType}
                            onChange={updateSchoolFields}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="grade"
                            id="schoolGrade"
                            type="text"
                            placeholder="A"
                            value={schoolProfile.schoolGrade}
                            onChange={updateSchoolFields}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="degree-from">
                            From
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            name="degree-from"
                            id="schoolStart"
                            type="date"
                            value={schoolProfile.schoolStart}
                            onChange={updateSchoolFields}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="degree-to">
                            To
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            name="degree-to"
                            id="schoolEnd"
                            type="date"
                            value={schoolProfile.schoolEnd}
                            onChange={updateSchoolFields}
                            required />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SchoolForm;