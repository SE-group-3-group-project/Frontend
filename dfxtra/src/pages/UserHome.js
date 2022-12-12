<<<<<<< HEAD:dfxtra/src/components/UserHome.jsx
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";

const UserHome = ({ data }) => {
	if (Object.keys(data).length > 0) {
		const key = data._id.toString();
		console.log(key);
		const { first, last } = data.name;
		const pronouns = data.pronoun.replaceAll("-", "/");
		const pEmail = data.contactDetails.personalEmail;
		const dfEmail = data.contactDetails.dfEmail;
		const github = data.contactDetails.github;
		const linkedIn = data.contactDetails.linkedIn;
		const phone = data.contactDetails.phoneNumber;
		return (
			<>
				<HomeHeader />
				<Profile
					key={key}
					name={first + " " + last + " (" + pronouns + ")"}
					pEmail={pEmail}
					dfEmail={dfEmail}
					github={github}
					linkedin={linkedIn}
					phone={phone}
				/>
				<Footer />
			</>
		);
	}
=======
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
>>>>>>> 2b5b959e1fa9f0a2459ac0e0872a3a706535f149:dfxtra/src/pages/UserHome.js
};

export default UserHome;
