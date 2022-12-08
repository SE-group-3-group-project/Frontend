import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'tailwindcss/tailwind.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Edit from './pages/Edit';
import mockData from './Utils/MockData.json';
import UserHome from './components/UserHome';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserHome data={mockData} />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
