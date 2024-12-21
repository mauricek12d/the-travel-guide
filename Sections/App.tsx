import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../client/src/components/Navbar';
import Home from '../client/src/pages/Home';
import About from '../client/src/pages/About';
import Destinations from '../client/src/pages/Destinations';
import Contact from '../client/src/pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
