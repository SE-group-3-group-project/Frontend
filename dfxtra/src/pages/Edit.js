import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EditProgress from "../components//EditPageComponents/EditProgress";
import EditInfo from "../components//EditPageComponents/EditInfo";
import EditStory from "../components/EditPageComponents/EditStory";

const Edit = ({ profile }) => {
    const [progress, setProgress] = useState(0)

    if (Object.keys(profile).length > 0) {
        const key = profile._id.toString();
        const firstName = profile.name.first;
        const lastName = profile.name.last;
        const pronouns = profile.pronoun.replaceAll("-", "/");
        const profilePicture = profile.profilePicture;
        const pEmail = profile.contactDetails.personalEmail;
        const dfEmail = profile.contactDetails.dfEmail;
        const github = profile.contactDetails.github;
        const linkedIn = profile.contactDetails.linkedIn;
        const phone = profile.contactDetails.phoneNumber;
        const nationality = profile.nationality;
        const personality = profile.personality;
        const stories = profile.personalStories;

        return (
            <>
                <Header />
                <EditProgress progress={progress} />
                <EditInfo
                    progress={progress}
                    setProgress={setProgress}
                    profile={profile}
                    key={key}
                    firstName={firstName}
                    lastName={lastName}
                    pronouns={pronouns}
                    profilePicture={profilePicture}
                    pEmail={pEmail}
                    dfEmail={dfEmail}
                    github={github}
                    linkedin={linkedIn}
                    phone={phone}
                    nationality={nationality}
                    personality={personality}
                />
                <EditStory
                    progress={progress}
                    setProgress={setProgress}
                    profile={profile}
                    stories={stories}
                />
                <Footer />
            </>
        );
    };
};

export default Edit;