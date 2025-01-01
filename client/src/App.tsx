import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import DestinationsList from './pages/DestinationsList';
import Contact from './pages/Contact';
import Login from './pages/Login';
import './App.css'; // Imported CSS file
import logo from './assets/New Jersey Vacations.png';

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar">
        <img
          src={logo}
          alt="New Jersey Vacations logo, discover destinations in NJ"
          className="navbar-logo"
        />
        <ul className="navbar-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'navbar-button active' : 'navbar-button')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'navbar-button active' : 'navbar-button')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destinations"
              className={({ isActive }) => (isActive ? 'navbar-button active' : 'navbar-button')}
            >
              Destinations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'navbar-button active' : 'navbar-button')}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'navbar-button active' : 'navbar-button')}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<DestinationsList />} />
        <Route path="/destinations/:name" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
