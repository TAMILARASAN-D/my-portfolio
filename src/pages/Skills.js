// src/pages/Skills.js
import React from 'react';
import './Skills.css'; // Create this CSS file for styling

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Languages</h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Ajax</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>PHP</li>
            <li>Django</li>
            <li>Spring Boot</li>
            <li>REST API</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools and Version Control</h3>
          <ul>
            <li>NPM</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>DevOps</h3>
          <ul>
            <li>CI/CD</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
