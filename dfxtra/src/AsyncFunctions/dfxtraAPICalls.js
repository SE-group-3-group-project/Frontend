import axios from "axios";
export const getProfile = async (setProfile, setError) => {
	try {
		const response = await axios.get(
			`${process.env.REACT_APP_LOCALHOST}63974c4181a2a1af5d8f2f35`
		);
		setProfile(response.data);
	} catch (error) {
		setError(error.message);
	}
};
