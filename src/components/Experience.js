import React, { useState } from 'react';
import '../stylesheets/Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "EY GDS & AICTE (via Edunet Foundation)",
      position: "Software Development Intern",
      period: "March - April 2025",
      description: [
        "Designed and developed a real-time collaboration tool using MERN stack, enabling seamless multi-user interactions, reducing manual coordination efforts by 40%",
        "Implemented WebSockets for real-time updates, reducing latency by 50% and improving synchronization efficiency",
        "Optimized backend performance by implementing efficient database queries and caching strategies, improving query response time by 30%",
        "Integrated authentication and access control, enhancing application security and preventing unauthorized access",
        "Deployed the application using cloud services, ensuring 99.9% uptime and improved scalability"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "WebSockets", "Socket.io", "Git", "CI/CD"]
    },
    {
      company: "Microsoft & SAP (via AICTE TechSaksham Program)",
      position: "AI Intern",
      period: "January - February 2025",
      description: [
        "Developed an AI-powered medical assistant capable of answering health-related queries using Retrieval-Augmented Generation (RAG), reducing manual research time for users",
        "Implemented a document retrieval system with FAISS, improving response accuracy by 35% through efficient indexing and search optimization",
        "Integrated a multimodal LLM to enable both text-based and image-based medical inquiries, expanding chatbot capabilities by 50%",
        "Designed and optimized an embedding pipeline to process and store medical documents, reducing data retrieval time by 40%",
        "Built a user-friendly interface with Streamlit, increasing accessibility and usability for non-technical users",
        "Fine-tuned NLP models for medical context understanding, achieving a 25% improvement in response accuracy"
      ],
      technologies: ["Python", "Hugging Face Transformers", "FAISS", "Mistral LLM", "Groq Multimodal API", "Streamlit", "NLP", "Vector Embeddings"]    
    }, 
    {
      company: "GirlScript Summer of Code",
      position: "Contributor",
      period: "October - November 2024",
      description: [
        "Integrated AI-driven features into applications, increasing user engagement by 30% and improving workflow efficiency",
        "Contributed to multiple projects by implementing AI solutions, leading to a 40% reduction in manual effort for end users",
        "Designed logos and branding for projects, increasing visibility across GitHub and community forums by 35%",
        "Strengthened UI/UX consistency, leading to a 25% increase in user retention and overall application usability"
      ],
      technologies: ["Hugging Face API", "OpenAI API", "Groq API", "Canva", "Postman", "GitHub"]
    }
  ];
  

  return (
    <div className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-container">
        <div className="tabs">
          {experiences.map((exp, index) => (
            <button 
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <h3>{experiences[activeTab].position} <span className="company-highlight">@ {experiences[activeTab].company}</span></h3>
          <p className="period">{experiences[activeTab].period}</p>
          <ul className="responsibilities">
            {experiences[activeTab].description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="technologies">
            {experiences[activeTab].technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;