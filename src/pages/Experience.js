// src/pages/Experience.js
import React from 'react';
import './Experience.css'; // Create this CSS file for styling

const experiences = [
  {
    role: 'Freelancer',
    //company: 'Freelance',
    duration: 'September 2024 - Present',
    responsibilities: [
      
      'Developed and launched personal portfolio websites.',
      'Experienced in transcribing audio files, including projects used to train AI models.',
    ],
  },
  {
    role: 'Assistant Professor, Department of Computer Applications',
    company: 'Sri Venkateswara College of Engineering and Technology, Chittoor, Andhra Pradesh',
    duration: 'August 2023 - August 2024',
    responsibilities: [
      
      'Taught programming and software development subjects, including C, Python, Data Structures, Machine Learning, Full Stack Web Development, and Android App Development.',
      'Mentored students in hands-on coding projects, fostering a deep understanding of software development, debugging, and optimization.',
      'Guided students in building full-stack web applications and Android apps, aligning with industry best practices.',
      'Integrated modern development tools and frameworks into teaching to ensure students were equipped with practical, job-ready skills.',
      'Conducted research and collaborated on technical projects to stay current with emerging software trends.',
    ],
  },
  
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
