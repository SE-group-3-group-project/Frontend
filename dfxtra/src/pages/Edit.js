import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EditProgress from "../components//EditPageComponents/EditProgress";
import EditInfo from "../components//EditPageComponents/EditInfo";
import EditStory from "../components/EditPageComponents/EditStory";

const Edit = () => {
    const [progress, setProgress] = useState(0)

    return (
        <>
            <Header />
            <EditProgress progress={progress} />
            <EditInfo progress={progress} setProgress={setProgress} />
            <EditStory progress={progress} setProgress={setProgress} />
            <Footer />
        </>
    );
};

export default Edit;