import Profile from "../components/Profile";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";

const UserHome = ({ data }) => {
    if (Object.keys(data).length > 0) {
        const key = data._id.toString();
        console.log(key);
        const { first, last } = data.name;
        const pronouns = data.pronoun.replaceAll("-", "/");
        const profilePicture = data.profilePicture;
        const pEmail = data.contactDetails.personalEmail;
        const dfEmail = data.contactDetails.dfEmail;
        const github = data.contactDetails.github;
        const linkedIn = data.contactDetails.linkedIn;
        const phone = data.contactDetails.phoneNumber;
        const stories = data.personalStories;
        return (
            <>
                <HomeHeader />
                <Profile
                    key={key}
                    name={first + " " + last + " (" + pronouns + ")"}
                    profilePicture={profilePicture}
                    pEmail={pEmail}
                    dfEmail={dfEmail}
                    github={github}
                    linkedin={linkedIn}
                    phone={phone}
                    story={stories}
                />
                <Footer />
            </>
        );
    }
};

export default UserHome;
