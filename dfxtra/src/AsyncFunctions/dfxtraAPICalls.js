import axios from "axios";
export const getProfile = async (setProfile, setError, user) => {
	try {
		const response = await axios.get(
			`${process.env.REACT_APP_LOCALHOST}${user.personalEmail}`
		);
		setProfile(response.data);
	} catch (error) {
		setError(error.message);
	}
};

// export const logout = async (e) => {
// 	e.preventDefault();
// 	const res = await axios.post(`http://localhost:4000/login`, user);
// 	setLoginUser(res.data.user ? false : true);
// 	setLoggedIn({ LoggedIn: false });
// 	console.log("You are logged out");
// 	alert("You have been logged out of the system");
// };
