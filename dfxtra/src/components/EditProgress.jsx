const EditProgress = () => {
    return (
        <div className="px-12 py-6 m-4 bg-white flex flex-col sm:flex-row justify-between rounded-2xl">
            <h1 className="pt-2 pb-4">Your profile</h1>
            <div className="flex flex-col mb-2 items-center justify-between">
                <div className="relative pt-1">
                    <div className="flex py-2 mb-2 items-center justify-between gap-6">
                        <p className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-lg text-royal-blue bg-light-grey">Profile completion:</p>
                        <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-royal-blue">
                                30%
                            </span>
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-light-grey">
                        <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-light-blue"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center gap-4">
                <button className="h-fit border rounded-full bg-white px-3 py-1 2xl">Submit Draft</button>
                <button className="h-fit border rounded-2xl bg-royal-blue text-white px-3 py-1">Reset Draft</button>
            </div>
        </div >
    );
};

export default EditProgress;