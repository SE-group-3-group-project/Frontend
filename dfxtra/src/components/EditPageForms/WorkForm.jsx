import { useState } from "react";
import axios from "axios";
import Input from "../../Utils/Input.jsx"

function WorkForm({ workExperiences }) {
    let type;
    let employer;
    let position;
    let startDate;
    let endDate;

    for (let i = 0; i < workExperiences.length; i++) {
        type = workExperiences[i].type;
        employer = workExperiences[i].employer;
        position = workExperiences[i].position;
        startDate = new Date(workExperiences[i].startDate).toISOString().split('T')[0];
        endDate = new Date(workExperiences[i].endDate).toISOString().split('T')[0];
    }

    const [workProfile, setWorkProfile] = useState({
        workType: type,
        workEmployer: employer,
        workPosition: position,
        workStart: startDate,
        workEnd: endDate,
    })

    const updateWorkFields = (e) => {
        const { id, value } = e.target
        setWorkProfile({ ...workProfile, [id]: value })
    }

    const [formFields, setFormFields] = useState([
        {
            type: "",
            employer: "",
            position: "",
            startDate: "",
            endDate: ""
        },
    ])

    // const handleFormChange = (event, index) => {
    //     let data = [...formFields];
    //     data[index][event.target.name] = event.target.value;
    //     setFormFields(data);
    // }

    const submit = async (e) => {
        e.preventDefault();

        const id = "63974c4181a2a1af5d8f2f35"
        const workData = { id, type, employer, position, startDate, endDate }

        // if (workData) {
        //     await axios.put(process.env.REACT_APP_WORK, workData);
        // }

        console.log(workData)
    }

    const addFields = () => {
        let object = {
            type: "",
            employer: "",
            position: "",
            startDate: "",
            endDate: ""
        }

        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
    }

    return (
        <div>
            <div className="flex flex-col px-2 w-full">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="pt-2 pb-4">Work Experience:</h2>
                    <button
                        className="w-fit h-fit bg-light-grey text-royal-blue font-medium border rounded-md px-4 py-2"
                        onClick={addFields}
                    >
                        Add
                    </button>
                </div>
                <div className="flex flex-col" id="work-form">
                    <form className="flex flex-col items-center" onSubmit={submit}>
                        {formFields.map((form, index) => {
                            return (
                                <div className="w-full flex flex-col items-center lg:flex lg:flex-row" key={index}>
                                    <div className="flex flex-col w-full px-3 pb-4">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="work-type">
                                            Type
                                        </label>
                                        <select
                                            id="workType"
                                            name="workType"
                                            className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                            multiple={false}
                                            value={workProfile.workType || ""}
                                            onChange={updateWorkFields}
                                        >
                                            <option>Select type of employment</option>
                                            <option value="Full-Time">Full-Time</option>
                                            <option value="Part-Time">Part-Time</option>
                                            <option value="Self-Employed">Self-Employed</option>
                                        </select>
                                    </div>
                                    <div className="w-full px-3 pb-4">
                                        <Input
                                            label="employer"
                                            id="employer"
                                            type="text"
                                            placeholder="Architect LLP"
                                            value={workProfile.workEmployer || ""}
                                            onChange={updateWorkFields}
                                            // onChange={event => handleFormChange(event, index)}
                                            required />
                                    </div>
                                    <div className="w-full px-3 pb-4">
                                        <Input
                                            label="position"
                                            id="position"
                                            type="text"
                                            placeholder="Architect"
                                            value={workProfile.workPosition || ""}
                                            onChange={updateWorkFields}
                                            // onChange={event => handleFormChange(event, index)}
                                            required />
                                    </div>
                                    <div className="w-full px-3 pb-4">
                                        <Input
                                            label="From"
                                            id="degree-from"
                                            type="date"
                                            placeholder="start date"
                                            value={workProfile.workStart || ""}
                                            onChange={updateWorkFields}
                                            // onChange={event => handleFormChange(event, index)}
                                            required
                                        />
                                    </div>
                                    <div className="w-full px-3 pb-4">
                                        <Input
                                            label="To"
                                            id="degree-to"
                                            type="date"
                                            placeholder="end date"
                                            value={workProfile.workEnd || ""}
                                            onChange={updateWorkFields}
                                            // onChange={event => handleFormChange(event, index)}
                                            required
                                        />
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
                </div >
            </div >
        </div>
    );
}

// const WorkForm = () => {
// const [organisation, setOrganisation] = useState('');
// const [position, setPosition] = useState('');

//     return (
// <div className="flex flex-col px-2 w-full">
//     <h2 className="pt-2 pb-4">Work Experience:</h2>
//     <div className="flex flex-col" id="work-form">
//         <form className="flex flex-col items-center lg:flex lg:flex-row lg:items-center">
//             <div className="w-full px-3 pb-4">
//                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="work-type">
//                     Type
//                 </label>
//                 <select id="work-type" name="work-type" className="block w-full p-2.5 bg-gray-200 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white">
//                     <option>Select type of employment</option>
//                     <option value="full-time">Full-time</option>
//                     <option value="part-time">Part-time</option>
//                     <option value="self-employed">Self-employed</option>
//                 </select>
//             </div>
//             <div className="w-full px-3 pb-4">
//                 <Input
//                     label="organisation"
//                     id="organisation"
//                     placeholder="Architect LLP"
//                     value={organisation}
//                     inputHandler={setOrganisation}
//                     required />
//             </div>
//             <div className="w-full px-3 pb-4">
//                 <Input
//                     label="role"
//                     id="role"
//                     type="text"
//                     placeholder="Architect"
//                     value={position}
//                     inputHandler={setPosition}
//                     required />
//             </div>
//             <div className="w-full px-3 pb-4">
//                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="degree-from">
//                     From
//                 </label>
//                 <input
//                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
//                     name="degree-from"
//                     id="degree-from"
//                     type="date"
//                     required />
//             </div>
//             <div className="w-full px-3 pb-4">
//                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="degree-to">
//                     To
//                 </label>
//                 <input
//                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
//                     name="degree-to"
//                     id="degree-to"
//                     type="date"
//                     required />
//             </div>
//             <button
//                 className="bg-light-grey text-royal-blue font-medium border rounded-full px-4 py-2"
//             // onClick={addFields}
//             >
//                 +
//             </button>
//         </form>
//     </div >
// </div >
//     )
// }
export default WorkForm;