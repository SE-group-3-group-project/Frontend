import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { getProfile } from "./AsyncFunctions/dfxtraAPICalls";
import Edit from "./pages/Edit";
import UserHome from "./pages/UserHome";
import Login from "./components/Login.jsx";

function App() {
	const [loginUser, setLoginUser] = useState({});
	const [profile, setProfile] = useState([]);
	const [editProfile, setEditProfile] = useState({});
	const [error, setError] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	const getProfileHandler = () => {
		getProfile(setProfile, setError, loginUser);
	};

	useEffect(() => {
		getProfileHandler();
	}, [])



	if (error) {
		setError({ error });
	}

	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Login setLoginUser={setLoginUser} setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}
					/>
					<Route path="/profile" element={<UserHome data={profile} setLoginUser={setLoginUser} setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />
					<Route
						path="/edit"
						element={<Edit profile={profile} setEditProfile={setEditProfile} loginUser={loginUser} />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
