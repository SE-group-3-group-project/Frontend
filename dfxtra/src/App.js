import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import axios from 'axios';
import Edit from './pages/Edit';
import UserHome from './pages/UserHome';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  const [user, setLoginUser] = useState({});
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState("");

  const getProfile = async () => {
    try {
      const response = await axios.get('http://localhost:4000/gradprofile');
      setProfile(response.data);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  if (error) {
    setError({ error })
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
