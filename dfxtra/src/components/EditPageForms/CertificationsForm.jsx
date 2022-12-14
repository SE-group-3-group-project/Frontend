import { useState } from "react";
import Input from "../../utils/Input"

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

    return (
        <div className="flex flex-col px-2 w-full">
            <h2 className="pt-2 pb-4">Certifications:</h2>
            <div className="flex flex-col" id="certifications-form">
                <form className="lg:flex lg:flex-row lg:items-end">
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
                </form>
            </div>
        </div>
    )
}
export default Certifications;