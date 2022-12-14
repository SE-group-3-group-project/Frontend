import axios from "axios";
export const getProfile = async (setProfile, setError) => {
	try {
		const response = await axios.get(
			"http://localhost:4000/gradprofile/63974c4181a2a1af5d8f2f35"
		);
		setProfile(response.data);
	} catch (error) {
		setError(error.message);
	}
};



const logout = async (e) => {
	e.preventDefault();
	const res = await axios.post(`http://localhost:4000/login`, user);
	setLoginUser(res.data.user ? false : true);
	setLoggedIn({ LoggedIn: false })
	console.log("You are logged out")
	alert('You have been logged out of the system');
}