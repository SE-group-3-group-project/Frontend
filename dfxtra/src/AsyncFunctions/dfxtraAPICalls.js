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
