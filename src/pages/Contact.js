// src/pages/Contact.js
import React from 'react';
import './Contact.css'; // Create this CSS file for styling

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <div className="social-links">
        <a href="https://github.com/TAMILARASAN-D" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/tamilarasand" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:tamilarasanckd@gmail.com">Email</a>
      </div>
    </section>
  );
};

export default Contact;
