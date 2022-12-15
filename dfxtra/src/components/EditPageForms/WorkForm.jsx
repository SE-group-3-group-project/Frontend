import { useState } from "react";
import Input from "../../Utils/Input"

function WorkForm({ storyProgress, setStoryProgress, inputWork, setWork }) {
    let workType;
    let workEmployer;
    let workPosition;
    let workStart;
    let workEnd;

    for (let i = 0; i < inputWork.length; i++) {
        workType = inputWork[i].type;
        workEmployer = inputWork[i].employer;
        workPosition = inputWork[i].position;
        workStart = new Date(inputWork[i].startDate).toISOString().split('T')[0];
        workEnd = new Date(inputWork[i].endDate).toISOString().split('T')[0];
    }

    const [workProfiles, setWorkProfile] = useState([{
        type: workType,
        employer: workEmployer,
        position: workPosition,
        startDate: workStart,
        endDate: workEnd,
    }])

    const updateWorkFields = (index, event) => {
        const values = [...workProfiles];
        values[index][event.target.id] = event.target.value;
        setWorkProfile(values)
    }
    const addFields = () => {
        const values = [...workProfiles];
        values.push({
            type: "",
            employer: "",
            position: "",
            startDate: "",
            endDate: ""
        });
        setWorkProfile(values)
    }

    const removeFields = (index) => {
        let data = [...workProfiles];
        data.splice(index, 1)
        setWorkProfile(data)
    }


    const handleSave = () => {
        setWork(workProfiles)
        setStoryProgress(storyProgress + 10)
    }



    return (
        <div>
            <div className="flex flex-col px-2 pb-1 w-full border-b">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="pt-2 pb-4">Work Experience:</h2>
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
                <div className="flex flex-col" id="work-form">
                    <form className="flex flex-col items-center">
                        {workProfiles.map((workProfile, index) => {
                            return (
                                <div className="w-full flex flex-col items-center lg:flex lg:flex-row" key={index}>
                                    <button
                                        className="bg-red-100 text-red-400 text-xl text-center rounded-md py-1 px-3.5 mt-1.5"
                                        type="button"
                                        onClick={() => removeFields(index)}
                                    >
                                        X
                                    </button>
                                    <div className="flex flex-col w-full px-3 pb-4">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="work-type">
                                            Type
                                        </label>
                                        <select
                                            id="type"
                                            name="workType"
                                            className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                            multiple={false}
                                            value={workProfile.type}
                                            onChange={event => updateWorkFields(index, event)}
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
                                            value={workProfile.employer}
                                            onChange={event => updateWorkFields(index, event)}
                                            required />
                                    </div>
                                    <div className="w-full px-3 pb-4">
                                        <Input
                                            label="position"
                                            id="position"
                                            type="text"
                                            placeholder="Architect"
                                            value={workProfile.position}
                                            onChange={event => updateWorkFields(index, event)}
                                            required />
                                    </div>
                                    <div className="w-full px-3 pb-4">
                                        <Input
                                            label="From"
                                            id="startDate"
                                            type="date"
                                            placeholder="start date"
                                            value={workProfile.startDate}
                                            onChange={event => updateWorkFields(index, event)}
                                            required
                                        />
                                    </div>
                                    <div className="w-full px-3 pb-4">
                                        <Input
                                            label="To"
                                            id="endDate"
                                            type="date"
                                            placeholder="end date"
                                            value={workProfile.endDate}
                                            onChange={event => updateWorkFields(index, event)}
                                            required
                                        />
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
export default WorkForm;