import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import 'tailwindcss/tailwind.css';
import Edit from './pages/Edit';
import mockData from './Utils/MockData.json';
import UserHome from './components/UserHome';

function App() {
  return (
    <>
      <Header />
      <UserHome data={mockData} />
      <Footer />
      
      <Router>
        <Routes>
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
