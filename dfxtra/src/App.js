import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { getProfile } from "./AsyncFunctions/dfxtraAPICalls";
import Edit from "./pages/Edit";
import UserHome from "./pages/UserHome";
import Login from "./components/Login.jsx";

function App() {
	const [user, setLoginUser] = useState({});
	const [profile, setProfile] = useState([]);
	const [editProfile, setEditProfile] = useState({});
	const [error, setError] = useState("");

	const getProfileHandler = () => {
		getProfile(setProfile, setError);
	};

	console.log(editProfile);
	useEffect(() => {
		getProfileHandler();
	}, []);

	if (error) {
		setError({ error });
	}

	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/login"
						element={<Login setLoginUser={setLoginUser} />}
					/>
					<Route path="/" element={<UserHome data={profile} />} />
					<Route
						path="/edit"
						element={<Edit profile={profile} setEditProfile={setEditProfile} />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
