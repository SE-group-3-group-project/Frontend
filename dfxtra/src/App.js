import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Edit from './pages/Edit';
import mockData from './utils/MockData.json';
import UserHome from './pages/UserHome';

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
