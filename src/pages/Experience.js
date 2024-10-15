// src/pages/Experience.js
import React from 'react';
import './Experience.css'; // Create this CSS file for styling

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Tech Company A',
    duration: 'Jan 2022 - Present',
    responsibilities: [
      'Developed and maintained web applications using React and Node.js.',
      'Collaborated with cross-functional teams to define and design new features.',
      'Implemented RESTful APIs and integrated third-party services.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Startup B',
    duration: 'Jun 2020 - Dec 2021',
    responsibilities: [
      'Built responsive user interfaces with React and Redux.',
      'Optimized application for maximum speed and scalability.',
      'Worked closely with designers to translate UI/UX designs into code.',
    ],
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <span className="duration">{exp.duration}</span>
            <ul>
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
