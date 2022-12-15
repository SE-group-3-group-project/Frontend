import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Header from "../components/Header";

const UserHome = ({ data }) => {
    if (Object.keys(data).length > 0) {
        const key = data._id.toString();
        const { first, last } = data.name;
        const pronouns = data.pronoun.replaceAll("-", "/");
        const profilePicture = data.profilePicture;
        const pEmail = data.contactDetails.personalEmail;
        const dfEmail = data.contactDetails.dfEmail;
        const github = data.contactDetails.github;
        const linkedIn = data.contactDetails.linkedIn;
        const phone = data.contactDetails.phoneNumber;
        const nationality = data.nationality.charAt(0).toUpperCase() + data.nationality.slice(1);
        const personality = data.personality;
        const stories = data.personalStories;
        return (
            <>
                <Header profilePicture={profilePicture} />
                <Profile
                    key={key}
                    name={first + " " + last + " (" + pronouns + ")"}
                    profilePicture={profilePicture}
                    pEmail={pEmail}
                    dfEmail={dfEmail}
                    github={github}
                    linkedin={linkedIn}
                    phone={phone}
                    nationality={nationality}
                    personality={personality}
                    story={stories}
                />
                <Footer />
            </>
        );
    }
};

export default UserHome;
