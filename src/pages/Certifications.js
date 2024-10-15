// src/pages/Certifications.js
import React from 'react';
import './Certifications.css'; // Create this CSS file for styling

const certifications = [
  {
    title: 'Certified JavaScript Developer',
    issuer: 'Tech Institute',
    date: 'March 2021',
    credential: 'https://example.com/certification-link',
  },
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'July 2022',
    credential: 'https://example.com/certification-link',
  },
  // Add more certifications as needed
];

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2>Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <h3>{cert.title}</h3>
            <h4>{cert.issuer}</h4>
            <span className="date">{cert.date}</span>
            <a href={cert.credential} target="_blank" rel="noopener noreferrer" className="credential-link">
              View Credential
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
