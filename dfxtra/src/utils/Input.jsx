export default function Input({ label, id, type, placeholder, value, inputHandler, onChange }) {


    return (
        <label>
            <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>{label}</div>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required />
        </label>
    )
}
