import Profile from './Profile';

const UserHome = ({ data }) => {
    return (
        <>

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
        </>
    );
};

export default UserHome;