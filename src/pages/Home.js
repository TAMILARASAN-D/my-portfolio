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
          Full-Stack Developer and Mentor with expertise in modern web technologies, programming, and problem-solving. UGC NET qualified, with a strong foundation in software development and knowledge dissemination.
          </p>
          <Link to="/projects" className="cta-button">View My Work</Link>
        </div>
        <div className="quote-section">
          <blockquote className="quote-text">"முயற்சி திருவினை ஆக்கும்"<br></br>"Efforts never fail"</blockquote>
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
