// App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar'; // Import Navbar
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Technology from './pages/Technology';

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar displayed on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
