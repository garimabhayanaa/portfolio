import React from 'react';
import "../stylesheets/Climb.css";
const experiences = [
  {
    title: 'Contributor',
    organization: 'GirlScript Summer of Code',
    duration: 'October - November 2024',
    description: 'Played a key role in integrating AI solutions and designing logos for multiple projects, significantly improving both the functionality and visual appeal of the initiatives. I improved the project\'s productivity and overall user experience by contributing to AI-driven features. My work in logo design also increased brand awareness, guaranteeing a more polished and unified presentation.',
  },
  {
    title: 'Student Coordinator',
    organization: 'Tech Mahindra Job Fair',
    duration: '26 - 27 September 2024',
    description: 'Acted as a student coordinator for Tech Mahindra\'s job fair at my college, where I handled the registration of over 500 candidates and managed batch assignments while coordinating closely with the team to ensure a seamless recruitment process.',
  },
];

const Climb = () => {
  return (
    <section id="experience" className="climb-section">
      <h2 className="climb-header">The Climb</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="vertical-line"></div> {/* Vertical line */}
            <div className="horizontal-line"></div> {/* Horizontal line connecting to experience */}
            <div className="experience-details">
              <h3 className="experience-title">{exp.title}</h3>
              <h4 className="organization">{exp.organization}</h4>
              <p className="duration">{exp.duration}</p>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Climb;
