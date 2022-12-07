import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import 'tailwindcss/tailwind.css';

import mockData from './Utils/MockData.json';
import UserHome from './components/UserHome';

function App() {
  return (
    <>
      <Header />
      <UserHome data={mockData} />
      <Footer />
    </>
  );
}

export default App;
