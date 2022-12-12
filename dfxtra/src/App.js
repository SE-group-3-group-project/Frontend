import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import axios from "axios";
import Edit from "./pages/Edit";
import UserHome from "./pages/UserHome";

function App() {
	const [profile, setProfile] = useState([]);
	const [error, setError] = useState("");

	const getProfile = async () => {
		try {
			const response = await axios.get(
				"http://localhost:4000/gradprofile/6395ae2116838db6d3b67cbe"
			);
			setProfile(response.data);
		} catch (error) {
			setError(error.message);
		}
	};

	useEffect(() => {
		getProfile();
	}, []);

	if (error) {
		setError({ error });
	}

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<UserHome data={profile} />} />
					<Route path="/edit" element={<Edit />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
