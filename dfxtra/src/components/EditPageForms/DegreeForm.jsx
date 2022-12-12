import { useState } from "react";
import TextInput from "../../utils/TextInput"

const DegreeForm = () => {

    const [university, setUniversity] = useState("");
    const [subject, setSubject] = useState("");
    const [degreeLevel, setDegreeLevel] = useState("");
    const [grade, setGrade] = useState("");

    // function showDegreeForm() {
    //     const degreeForm = document.getElementById("degree-form");
    //     degreeForm.style.display = "block"
    // }

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
                            id="university"
                            placeholder="University of Arts London"
                            value={university}
                            inputHandler={setUniversity}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="subject"
                            id="subject"
                            type="text"
                            placeholder="Photography"
                            value={subject}
                            inputHandler={setSubject}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="degree level"
                            id="degree-level"
                            type="text"
                            placeholder="Masters"
                            value={degreeLevel}
                            inputHandler={setDegreeLevel}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="grade"
                            id="grade"
                            type="text"
                            placeholder="2:1"
                            value={grade}
                            inputHandler={setGrade}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="degree-from">
                            From
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            name="degree-from"
                            id="degree-from"
                            type="date"
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="degree-to">
                            To
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            name="degree-to"
                            id="degree-to"
                            type="date"
                            required />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default DegreeForm;