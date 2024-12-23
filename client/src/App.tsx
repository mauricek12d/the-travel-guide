import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Contact from './pages/Contact';
import Login from './pages/Login';
import './App.css'; // Imported CSS file
import logo from './assets/New Jersey Vacations.png';

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar">
        <img src={logo} alt="New Jersey Vacations Logo" className="navbar-logo" />
        <ul className="navbar-list">
          <li>
            <Link to="/" className="navbar-button">Home</Link>
          </li>
          <li>
            <Link to="/about" className="navbar-button">About</Link>
          </li>
          <li>
            <Link to="/destinations" className="navbar-button">Destinations</Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-button">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="navbar-button">Login</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
