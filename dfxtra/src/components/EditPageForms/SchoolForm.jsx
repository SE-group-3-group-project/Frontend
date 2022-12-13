import { useState } from "react";
import TextInput from "../../utils/Input"

const SchoolForm = () => {
    const [school, setSchool] = useState('');

    return (
        <div className="flex flex-col px-2 w-full">
            <h2 className="pt-2 pb-4">School:</h2>
            <div className="flex flex-col" id="school-form">
                <form className="lg:flex lg:flex-row lg:items-end">
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="school"
                            id="school"
                            placeholder="Walthamstow Upper School"
                            value={school}
                            inputHandler={setSchool}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="subject"
                            id="subject"
                            type="text"
                            placeholder="Maths"
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="qualification-level"
                            id="qualification-level"
                            type="text"
                            placeholder="A Level"
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="grade"
                            id="grade"
                            type="text"
                            placeholder="A"
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
export default SchoolForm;