// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Install react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className="logo">Tamil's</NavLink>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
      <li>
          <NavLink to="/projects" activeClassName="active" onClick={() => setIsOpen(false)}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/skills" activeClassName="active" onClick={() => setIsOpen(false)}>Skills</NavLink>
        </li>
        <li>
          <NavLink to="/certifications" activeClassName="active" onClick={() => setIsOpen(false)}>Certifications</NavLink>
        </li>
        
        <li>
          <NavLink to="/experience" activeClassName="active" onClick={() => setIsOpen(false)}>Experience</NavLink>
        </li>
        
        <li>
          <NavLink to="/contact" activeClassName="active" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
