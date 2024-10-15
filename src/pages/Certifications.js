// src/pages/Certifications.js
import React from 'react';
import './Certifications.css'; // Create this CSS file for styling

const certifications = [
  {
    title: 'Build a Face Recognition Application using Python',
    issuer: 'GUVI Geek Networks, IITM Research Park',
    date: 'April 2021',
    credential: 'https://www.guvi.in/verify-certificate?id=XTDq6719B6162px5o6',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM',
    date: 'March 2023',
    credential: 'https://www.credly.com/badges/0194d6b0-c7b4-478c-a606-2db70559cb13/linked_in_profile',
  },
  {
    title: 'MongoDB',
    issuer: 'GUVI Geek Networks, IITM Research Park',
    date: 'May 2022',
    credential: 'https://www.guvi.in/verify-certificate?id=S4052vH2C6Uu3e85d1',
  },
  {
    title: 'SQL',
    issuer: 'Sololearn',
    date: 'March 2020',
    credential: 'https://www.sololearn.com/certificates/CT-QOQ278SY',
  },
  {
    title: 'HTML and CSS',
    issuer: 'GUVI Geek Networks, IITM Research Park',
    date: 'September 2021',
    credential: 'https://www.guvi.in/verify-certificate?id=XH1396zR414707FBjb',
  },
  {
    title: 'Python',
    issuer: 'GUVI Geek Networks, IITM Research Park',
    date: 'August 2023',
    credential: 'https://www.guvi.in/verify-certificate?id=618M48Hp6G19l9r1t6',
  },
  {
    title: 'JAVA',
    issuer: 'Sololearn',
    date: 'September 2019',
    credential: 'https://www.sololearn.com/certificates/CT-2IG7OBKS',
  },
  {
    title: 'Kotlin',
    issuer: 'Sololearn',
    date: 'March 2023',
    credential: 'https://www.sololearn.com/certificates/CT-FAEAFYHZ',
  },
  {
    title: 'HTML',
    issuer: 'Sololearn',
    date: 'January 2021',
    credential: 'https://www.sololearn.com/certificates/CT-I3KIIGZP',
  },
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
