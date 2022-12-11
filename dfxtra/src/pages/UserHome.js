import Profile from '../components/Profile';
import Footer from '../components/Footer';
import HomeHeader from '../components/HomeHeader';

const UserHome = ({ data }) => {
    return (
        <>
            <HomeHeader />
            {data.map(profile => (
                <Profile
                    key={profile._id.toString()}
                    name={profile.name.first + " " + profile.name.last + " (" + profile.pronoun.replaceAll(`-`, `/`) + ")"}
                    pEmail={profile.contactDetails.personalEmail}
                    dfEmail={profile.contactDetails.dfEmail}
                    github={profile.contactDetails.github}
                    linkedin={profile.contactDetails.linkedIn}
                    phone={profile.contactDetails.phoneNumber}
                />
            ))}
            <Footer />
        </>
    );
};

export default UserHome;