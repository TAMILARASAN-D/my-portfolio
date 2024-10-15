// src/pages/Projects.js
import React from 'react';
import './Projects.css'; // Create this CSS file for styling

const projectsData = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    image: '/path-to-image/project1.png', // Replace with actual image paths
    link: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    techStack: ['Vue.js', 'Firebase'],
    image: '/path-to-image/project2.png',
    link: 'https://github.com/yourusername/project-two',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-item">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
