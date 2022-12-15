import { useState } from "react";
// import Input from "../../Utils/Input"
import Input from "../../Utils/Input";

const Certifications = ({ storyProgress, setStoryProgress, inputCertifications, setCertification }) => {

    let certificationsType;
    let certificationsIssuer;
    let certificationsGrade;
    let certificationsYear;

    for (let i = 0; i < inputCertifications.length; i++) {
        certificationsType = inputCertifications[i].type;
        certificationsIssuer = inputCertifications[i].issuer;
        certificationsGrade = inputCertifications[i].grade;
        certificationsYear = inputCertifications[i].year;
    }

    const [certificationsProfiles, setCertificationsProfile] = useState([{
        type: certificationsType,
        issuer: certificationsIssuer,
        grade: certificationsGrade,
        year: certificationsYear,
    }])

    const updateCertificationsFields = (index, event) => {
        const values = [...certificationsProfiles];
        values[index][event.target.id] = event.target.value;
        setCertificationsProfile(values)
    }

    const addFields = () => {
        const values = [...certificationsProfiles];
        values.push({
            type: "",
            issuer: "",
            grade: "",
            year: "",
        });
        setCertificationsProfile(values)
    }

    const removeFields = (index) => {
        let data = [...certificationsProfiles];
        data.splice(index, 1)
        setCertificationsProfile(data)
    }

    const handleSave = () => {
        setCertification(certificationsProfiles)
        setStoryProgress(storyProgress + 10)
    }

    return (
        <div className="flex flex-col px-2 pb-1 w-full border-b">
            <div className="flex flex-row items-center justify-between">
                <h2 className="pt-2 pb-4">Certifications:</h2>
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
            <div className="flex flex-col" id="certifications-form">
                <form className="flex flex-col items-center">
                    {certificationsProfiles.map((certificationsProfile, index) => {
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
                                    <Input
                                        label="type"
                                        id="type"
                                        type="text"
                                        placeholder="IBM Explorer Badge"
                                        value={certificationsProfile.type}
                                        onChange={event => updateCertificationsFields(index, event)}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <Input
                                        label="issuer"
                                        id="issuer"
                                        type="text"
                                        placeholder="IBM"
                                        value={certificationsProfile.issuer}
                                        onChange={event => updateCertificationsFields(index, event)}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <Input
                                        label="grade"
                                        id="grade"
                                        type="text"
                                        placeholder="Pass"
                                        value={certificationsProfile.grade}
                                        onChange={event => updateCertificationsFields(index, event)}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <Input
                                        label="year"
                                        id="year"
                                        type="number"
                                        min="1800"
                                        max="2022"
                                        placeholder="2020"
                                        value={certificationsProfile.year}
                                        onChange={event => updateCertificationsFields(index, event)}
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
export default Certifications;