import Header from "../components/Header";
import Footer from "../components/Footer";
import EditProgress from "../components//EditPageComponents/EditProgress";
import EditInfo from "../components//EditPageComponents/EditInfo";
import EditStory from "../components/EditPageComponents/EditStory";

const Edit = () => {
    return (
        <>
            <Header />
            <EditProgress />
            <EditInfo />
            <EditStory />
            <Footer />
        </>
    );
};

export default Edit;