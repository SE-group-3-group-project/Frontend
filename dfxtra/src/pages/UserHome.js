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
};

export default UserHome;
