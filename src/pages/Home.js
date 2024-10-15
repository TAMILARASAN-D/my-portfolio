// src/pages/Home.js
import React from 'react';
import './Home.css'; // Create this CSS file for styling
import profilePic from '../assets/profile.jpg'; // Place your profile picture in src/assets

const Home = () => {
  return (
    <section className="home-section">
      <div className="intro-container">
        <div className="intro-text">
          <h1>Hi, I'm TAMILARASAN D</h1>
          <p>
            I'm a full-stack developer with a passion for building scalable web applications and working across the full stack.
          </p>
          <a href="/projects" className="cta-button">View My Work</a>
        </div>
        <div className="intro-image">
          <img src={profilePic} alt="TAMILARASAN" />
        </div>
      </div>
    </section>
  );
};

export default Home;
