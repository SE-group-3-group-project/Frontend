import Profile from './Profile';
import Footer from '../components/Footer';
import Header from '../components/Header';

const UserHome = ({ data }) => {
    return (
        <>
            <Header />
            {data.map(profile => (
                <Profile
                    key={profile._id}
                    name={profile.name.first}
                    pEmail={profile.contactDetails.personalEmail}
                    dfEmail={profile.contactDetails.dfEmail}
                    github={profile.contactDetails.github}
                    linkedin={profile.contactDetails.linkedIn}
                    phone={profile.contactDetails.phoneNumber}
                    story={profile.personalStories}
                />
            ))}
            <Footer />
        </>
    );
};

export default UserHome;