import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './Pages/LandingPage/Index';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
