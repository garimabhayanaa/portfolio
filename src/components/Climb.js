import React from 'react';
import "../stylesheets/Climb.css";
const experiences = [
  {
    title: 'AI Intern',
    organization: 'AICTE',
    duration: 'January - February 2025',
    description: 'Worked as an AI Intern under the AICTE TechSaksham initiative, developing an AI-powered medical assistant using Retrieval-Augmented Generation (RAG) and multimodal LLMs. I integrated FAISS for vector search, Hugging Face models for NLP, and Groq’s LLM for text and image-based medical analysis. This experience strengthened my expertise in AI-driven healthcare solutions, problem-solving, and scalable AI development. Moving forward, I aim to leverage these skills to build innovative AI solutions that drive real-world impact in healthcare and beyond.',
  },
  {
    title: 'Coordinator',
    organization: 'Training and Placement Cell, ADGIPS',
    duration: 'October 2024 - Present',
    description: 'Served as a Placement Cell Coordinator, where I facilitated smooth placement drives by collaborating with HR representatives and fellow coordinators. This role honed my organizational and communication skills as I ensured seamless event execution, from managing student databases to scheduling interviews. By working in high-pressure environments, I developed the ability to handle challenges effectively and maintain professionalism. This experience has provided me with strong collaborative and operational capabilities, which I believe will be valuable in contributing to the success of future roles within the company.',
  },{
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
