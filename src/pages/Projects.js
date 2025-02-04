// src/pages/Projects.js
import React from 'react';
import './Projects.css'; // Create this CSS file for styling

const projectsData = [
  {
    title: 'College Hostel Inventory Management System',
    description: 'Hostel Inventory Management System is a web and Android app that revolutionizes hostel inventory management. Aim to maximize efficiency, eliminate errors, and enable data-driven decisions. Real-time data access empowers administrators to reduce wastage and maintain optimal stock levels.​​​',
    techStack: ['PHP','HTML','CSS','JavaScript','AJAX','MySQL','Java','jQuery','Android','Volley Library'],
    image: './assets/project1.png', 
    link:'https://github.com/TAMILARASAN-D/College-Hostel-Inventory-Management-System',
    demo: 'https://drive.google.com/file/d/1GeSEzEJ--ZKlWA0-64ITzEmqcLR8V0Am/view',
  },
  {
    title: 'My Portfolio',
    description: 'Designed, developed and hosted my portfolio website to showcase my skills.',
    techStack: ['React.js','HTML','CSS'],
    image: './assets/project1.png',
    link:'https://github.com/TAMILARASAN-D/my-portfolio',
    demo: 'https://tamilarasan-d.github.io/my-portfolio/',
  },
  {
    title: 'e-Shopping Cart',
    description: 'This is a single web page task of a full stack developer interview without using any libraries only HTML, CSS, JavaScript.',
    techStack: ['JavaScript','HTML','CSS'],
    image: './assets/project1.png',
    link:'https://github.com/TAMILARASAN-D/e-Shopping-Cart',
    demo: 'https://tamilarasan-d.github.io/e-Shopping-Cart/',
  },
  {
    title: 'Django-CRM',
    description: 'Developed a Customer Relationship Management - CRM App with this we\'ll be able to Register, Log In, Log Out, Add Records, View Records, Update Records, and Delete Records.',
    techStack: ['Django','Python','MySQL'],
    image: './assets/project1.png',
    link:'https://github.com/TAMILARASAN-D/Django-CRM',
    demo: 'https://github.com/TAMILARASAN-D/Django-CRM/blob/main/README.md',
  },
  {
    title: 'Authentication signup and login page using session',
    description: 'Authentication of user done using session and sign up and login page created using HTML,CSS,NODE.JS,MySQL.',
    techStack: ['Node.js','MySQL','HTML','CSS'],
    image: './assets/project1.png',
    link:'https://github.com/TAMILARASAN-D/Authentication-signup-and-login-using-session',
    demo: 'https://github.com/TAMILARASAN-D/Authentication-signup-and-login-using-session/blob/main/Screenshot_20230225_113930.png',
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
           {/* <img src={project.image} alt={project.title} className="project-image" />*/}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-item">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View on Github
            </a><br></br>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
              View Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
