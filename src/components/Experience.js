import React, { useState } from 'react';
import '../stylesheets/Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "DIRO",
      position: "Artificial Intelligence Intern",
      period: "October 2025 – Present",
      description: [
        "Worked closely with engineering and product teams to design and implement AI-assisted automation modules, improving internal workflow efficiency by ~30%.",
        "Built a chatbot-driven requirement-extraction system that automated documentation workflows, reducing manual preparation time by 40%.",
        "Planned and optimized automated testing and reliability pipelines, resulting in more consistent deployments and ~25% faster error resolution.",
        "Developed analytics dashboards for session monitoring and browser-level insights, enabling early anomaly detection and improving system visibility by 35%.",
        "Contributed to AI-driven observability initiatives by integrating predictive insights into engineering processes, enhancing traceability and development velocity."
      ],
      technologies: ["Python", "JavaScript","TypeScript","Node.js","Automation Pipelines","AI Observability","Langfuse","Analytics Dashboards","CI/CD","Git"]
    },

    {
    company: "JMedia Corporation (Remote – US-based)",
    position: "Artificial Intelligence Intern",
    period: "May - August 2025",
    description: [
      "Developed and deployed production-ready ML models using scikit-learn, TensorFlow, and PyTorch, enabling intelligent automation across internal tools.",
      "Designed secure, reproducible pipelines for preprocessing, training, validation, and deployment, reducing iteration time by 40%.",
      "Collaborated with a distributed AI team across time zones to align deliverables with business objectives and technical benchmarks.",
      "Implemented version-controlled model lifecycles with integrated logging and performance tracking, improving reproducibility and debugging.",
      "Maintained compliance while working with proprietary datasets, ensuring data security and adherence to organizational policies."
    ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "ML Pipelines", "Version Control", "Git", "Flask"]
    },
    {
      company: "AICTE (in collaboration with EY GDS)",
      position: "Software Development Intern",
      period: "March - April 2025",
      description: [
        "Engineered CoCreate, a real-time collaborative document editor powered by MERN stack with Socket.IO-driven live editing and role-based access control, reducing manual coordination efforts by 40%.",
        "Implemented WebSockets for real-time updates, reducing latency by 50% and improving synchronization efficiency.",
        "Optimized database queries and caching strategies, enhancing query response time by 30%.",
        "Integrated authentication and access control, preventing unauthorized access and enhancing security.",
        "Deployed frontend on Netlify and backend on Render, ensuring 99.9% uptime and improved scalability."
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "Socket.IO", "Netlify", "Render", "Git", "CI/CD"]
    },
    {
      company: "AICTE TechSaksham (Microsoft & SAP CSR Initiative)",
      position: "AI Intern",
      period: "January - February 2025",
      description: [
        "Developed an AI-powered medical assistant capable of answering health-related queries using Retrieval-Augmented Generation (RAG), reducing manual research time for users.",
        "Implemented a document retrieval system with FAISS, improving response accuracy by 35% through efficient indexing and search optimization.",
        "Integrated a multimodal LLM (Llama-3.2-90b-vision-preview) with Groq API, enabling both text-based and image-based medical inquiries, expanding chatbot capabilities by 50%.",
        "Designed and optimized an embedding pipeline to process and store medical documents, reducing data retrieval time by 40%.",
        "Built a user-friendly interface with Streamlit, increasing accessibility and usability for non-technical users.",
        "Fine-tuned NLP models for medical context understanding, achieving a 25% improvement in response accuracy."
      ],
      technologies: ["Python", "Hugging Face Transformers", "FAISS", "Mistral LLM", "Groq Multimodal API", "Streamlit", "NLP", "Vector Embeddings"]    
    }, 
    {
      company: "GirlScript Summer of Code",
      position: "Contributor",
      period: "October - November 2024",
      description: [
        "Integrated AI-driven features into applications, increasing user engagement by 30% and improving workflow efficiency.",
        "Contributed to multiple projects by implementing AI solutions, leading to a 40% reduction in manual effort for end users.",
        "Designed logos and branding for projects, increasing visibility across GitHub and community forums by 35%.",
        "Strengthened UI/UX consistency, leading to a 25% increase in user retention and overall application usability."
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
