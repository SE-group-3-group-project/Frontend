import { useState } from "react";
import TextInput from "../../utils/TextInput"

const WorkForm = () => {
    const [organisation, setOrganisation] = useState('');
    const [role, setRole] = useState('');

    return (
        <div className="flex flex-col px-2 w-full">
            <h2 className="pt-2 pb-4">Work Experience:</h2>
            <div className="flex flex-col" id="work-form">
                <form className="lg:flex lg:flex-row lg:items-end">
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="organisation"
                            id="organisation"
                            placeholder="Architect LLP"
                            value={organisation}
                            inputHandler={setOrganisation}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <TextInput
                            label="role"
                            id="role"
                            type="text"
                            placeholder="Architect"
                            value={role}
                            inputHandler={setRole}
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
export default WorkForm;