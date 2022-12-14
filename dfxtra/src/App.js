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
	const [gradId, setGradId] = useState("")

	const getProfileHandler = () => {
		getProfile(setProfile, setError, gradId);
	};

	useEffect(() => {
		getProfileHandler();
	}, []);

	if (error) {
		setError({ error });
	}
	console.log(gradId)

	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Login setLoginUser={setLoginUser} setGradId={setGradId} />}
					/>
					<Route path="/profile" element={<UserHome data={profile} user={user} />} />
					<Route
						path="/edit"
						element={<Edit profile={profile} setEditProfile={setEditProfile} user={user} getProfileHandler={getProfileHandler} />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
