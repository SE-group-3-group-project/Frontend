import { useState } from "react";
// import Input from "../../Utils/Input"
import Input from "../../Utils/Input.jsx"

const Certifications = ({ certifications }) => {

    let type;
    let issuer;
    let grade;
    let year;

    for (let i = 0; i < certifications.length; i++) {
        type = certifications[i].type;
        issuer = certifications[i].issuer;
        grade = certifications[i].grade;
        year = certifications[i].year;
    }

    const [certificationsProfile, setCertificationsProfile] = useState({
        certificationsType: type,
        certificationsIssuer: issuer,
        certificationsGrade: grade,
        certificationsYear: year,
    })

    const updateCertificationsFields = (e) => {
        const { id, value } = e.target
        setCertificationsProfile({ ...certificationsProfile, [id]: value })
    }

    const [formFields, setFormFields] = useState([
        {
            type: "",
            issuer: "",
            grade: "",
            year: "",
        },
    ])

    const addFields = () => {
        let object = {
            type: "",
            issuer: "",
            grade: "",
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
                <h2 className="pt-2 pb-4">Certifications:</h2>
                <button
                    className="w-fit h-fit bg-light-grey text-royal-blue font-medium border rounded-md px-4 py-2"
                    onClick={addFields}
                >
                    Add
                </button>
            </div>
            <div className="flex flex-col" id="certifications-form">
                <form className="flex flex-col items-center">
                    {formFields.map((form, index) => {
                        return (
                            <div className="w-full flex flex-col items-center lg:flex lg:flex-row" key={index}>
                                <div className="w-full px-3 pb-4">
                                    <Input
                                        label="type"
                                        id="certificationsType"
                                        type="text"
                                        placeholder="IBM Explorer Badge"
                                        value={certificationsProfile.certificationsType}
                                        onChange={updateCertificationsFields}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <Input
                                        label="issuer"
                                        id="certificationsIssuer"
                                        type="text"
                                        placeholder="IBM"
                                        value={certificationsProfile.certificationsIssuer}
                                        onChange={updateCertificationsFields}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <Input
                                        label="grade"
                                        id="certificationsGrade"
                                        type="text"
                                        placeholder="Pass"
                                        value={certificationsProfile.certificationsGrade}
                                        onChange={updateCertificationsFields}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <Input
                                        label="year"
                                        id="certificationsYear"
                                        type="number"
                                        min="1800"
                                        max="2022"
                                        placeholder="2020"
                                        value={certificationsProfile.certificationsYear}
                                        onChange={updateCertificationsFields}
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
export default Certifications;