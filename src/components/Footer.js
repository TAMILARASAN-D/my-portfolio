// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="contact-details-social">

        <div className="social-links">
          <a href="https://www.linkedin.com/in/tamilarasand/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/TAMILARASAN-D" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="mailto:tamilarasanckd@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={30} />
          </a>
        </div>
        </div>

        <div className="footer-credits">
        <p>Designed and developed by Tamilarasan Dhayalan</p>
        <p>&copy; 2024 Tamilarasan D. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
