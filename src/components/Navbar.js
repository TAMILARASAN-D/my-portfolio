// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Make sure you have installed react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/my-portfolio" className="logo">Tamil's Portfolio</NavLink>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => (isActive ? 'active' : '')} 
            onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/skills" 
            className={({ isActive }) => (isActive ? 'active' : '')} 
            onClick={() => setIsOpen(false)}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/certifications" 
            className={({ isActive }) => (isActive ? 'active' : '')} 
            onClick={() => setIsOpen(false)}>
            Certifications
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/experience" 
            className={({ isActive }) => (isActive ? 'active' : '')} 
            onClick={() => setIsOpen(false)}>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/publications" 
            className={({ isActive }) => (isActive ? 'active' : '')} 
            onClick={() => setIsOpen(false)}>
            Publications
          </NavLink>
        </li>{/*
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? 'active' : '')} 
            onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </li>*/}
      </ul>
    </nav>
  );
};

export default Navbar;
