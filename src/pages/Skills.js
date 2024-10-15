// src/pages/Skills.js
import React from 'react';
import './Skills.css'; // Create this CSS file for styling

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>DevOps</h3>
          <ul>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
