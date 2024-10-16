// src/pages/Home.js
import React from 'react';
import './Home.css'; // Create this CSS file for styling
import profilePic from '../assets/profile.jpg'; // Place your profile picture in src/assets
import { Link } from 'react-router-dom'; // Import Link
import { FaExternalLinkAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="home-section">
      <div className="intro-container">
        <div className="intro-text">
          <h1>Hi, I'm TAMILARASAN D</h1>
          <p>
            I'm a full-stack developer with a passion for building scalable web applications and working across the full stack.
          </p>
          <Link to="/projects" className="cta-button">View My Work</Link>
        </div>
        <div className="quote-section">
          <blockquote className="quote-text">"Efforts never fail"</blockquote>
          <Link to="/favorite-quotes" className="quotes-link">Check out Favorite Quotes of Mine <FaExternalLinkAlt /></Link>
        </div>
        <div className="intro-image">
          <img src={profilePic} alt="TAMILARASAN" />
        </div>
      </div>
    </section>
  );
};

export default Home;
