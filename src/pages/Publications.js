import React from 'react';
import './Publications.css'; // Apply the styles
import { FaExternalLinkAlt } from 'react-icons/fa';

const Publications = () => {
  const papers = [
    {
      title: "Applying Deep Learning and Transfer Learning Techniques for Improving Animal Intrusion Detection in Agriculture Farms",
      authors: "Tamilarasan D and others",
      journal: "2023 International Conferences on Data Science, Agents, and Artificial Intelligence",
      year: "2023",
      link: "https://ieeexplore.ieee.org/abstract/document/10452442", // Link to the paper
    },
    {
      title: "College Hostel Inventory Management System",
      authors: "Tamilarasan D and others",
      journal: "International Journal for Research in Applied Science and Engineering Technology (IJRASET)",
      year: "2023",
      link: "https://www.ijraset.com/research-paper/college-hostel-inventory-management-system",
    },
    {
      title: "Global Environmental Health Assessment: Analyzing Air Quality and Water Pollution Data ",
      authors: "Tamilarasan D and others",
      journal: "International Journal for Research in Applied Science and Engineering Technology (IJRASET)",
      year: "2024",
      link: "https://www.ijraset.com/research-paper/global-environmental-health-assessment-analyzing-air-quality-and-water-pollution-data",
    },
    {
        title: "Non-Contact Heart Rate Variability Monitoring Using Pupil Changes on Mobile Devices",
        authors: "Tamilarasan D and others",
        journal: "Journal of Emerging Technologies and Innovative Research",
        year: "2024",
        link: "https://www.jetir.org/papers/JETIR2405B71.pdf",
      },
      {
        title: "Examining the Psychological and Behavioral Impacts of Social Media Breakups ",
        authors: "Tamilarasan D and others",
        journal: "Journal of Emerging Technologies and Innovative Research",
        year: "2024",
        link: "https://www.jetir.org/papers/JETIR2406075.pdf",
      },
  ];

  return (
    <section className="publications-section">
        <h2>Paper Publications</h2>
      <div className="publications-container">
        {papers.map((paper, index) => (
          <div key={index} className="publication-card">
            <h3 className="publication-title">{paper.title}</h3>
            <p className="publication-authors"><strong>Authors:</strong> {paper.authors}</p>
            <p className="publication-journal"><strong>Journal/Conference:</strong> {paper.journal}</p>
            <p className="publication-year"><strong>Year:</strong> {paper.year}</p>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-link"
            >
              View Paper <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
