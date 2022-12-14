import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import axios from 'axios';
// import Edit from './pages/Edit';
import UserHome from './pages/UserHome';
import Login from './components/Login.jsx';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [user, setLoginUser] = useState({});
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState("");

  // const getProfile = async () => {
  //   try {

  //     const response = await axios.get('http://localhost:4000/gradprofile/63974c4181a2a1af5d8f2f35');
  //     setProfile(response.data);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getProfile();
  // }, []);

  if (error) {
    setError({ error });
  }

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          {/* for adding later */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/" element={<UserHome data={profile} />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
