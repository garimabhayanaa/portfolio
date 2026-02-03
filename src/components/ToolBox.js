import React, { useEffect, useState } from "react";
import "../stylesheets/ToolBox.css";
import {
  FaPython,
  FaGlobe,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaGitAlt,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaClock,
  FaUsersCog,
  FaTools,
  FaAws,
  FaProjectDiagram
} from "react-icons/fa";
import {
  SiTensorflow,
  SiTailwindcss,
  SiFlask,
  SiOpencv,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiPostgresql,
  SiOpenai,
  SiScikitlearn,
  SiJira,
  SiConfluence
} from "react-icons/si";

const ToolBox = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    // -----------------------------------------------------
    // PRODUCT & SYSTEMS
    // -----------------------------------------------------
    {
      name: "Product & Systems",
      icon: <FaProjectDiagram />,
      skills: [
        { name: "Product-Oriented Execution", icon: <FaTools /> },
        { name: "Product Ownership", icon: <FaUsersCog /> },
        { name: "Feature Scoping", icon: <FaTools /> },
        { name: "Requirements Clarification", icon: <FaComments /> },
        { name: "User-Centered Design", icon: <FaUsers /> },
        { name: "Systems Design", icon: <FaProjectDiagram /> },
        { name: "Analytics & Observability", icon: <FaTools /> },
        { name: "Internal Tools", icon: <FaTools /> },
        { name: "Stakeholder Collaboration", icon: <FaUsersCog /> },
        { name: "Jira", icon: <SiJira /> },
        { name: "Confluence", icon: <SiConfluence /> },
      ],
    },

    // -----------------------------------------------------
    // AI & LLM SYSTEMS
    // -----------------------------------------------------
    {
      name: "AI & LLM Systems",
      icon: <SiTensorflow />,
      skills: [
        { name: "Artificial Intelligence (AI)", icon: <SiTensorflow /> },
        { name: "Machine Learning", icon: <SiScikitlearn /> },
        { name: "Generative AI", icon: <SiOpenai /> },
        { name: "Large Language Models (LLMs)", icon: <SiOpenai /> },
        { name: "Retrieval-Augmented Generation (RAG)", icon: <SiOpenai /> },
        { name: "Model Evaluation", icon: <FaTools /> },
        { name: "Natural Language Processing (NLP)", icon: <SiOpenai /> },
        { name: "Computer Vision", icon: <SiOpencv /> },
        { name: "Data Analysis", icon: <FaDatabase /> },
      ],
    },

    // -----------------------------------------------------
    // ENGINEERING & PLATFORMS
    // -----------------------------------------------------
    {
      name: "Engineering & Platforms",
      icon: <FaCode />,
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "REST APIs", icon: <FaCode /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Amazon Web Services (AWS)", icon: <FaAws /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "Real-Time Systems", icon: <FaTools /> },
      ],
    },

    // -----------------------------------------------------
    // WEB & APPLICATION DEVELOPMENT
    // -----------------------------------------------------
    {
      name: "Web & Application Development",
      icon: <FaGlobe />,
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <FaCode /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Socket.IO", icon: <FaCode /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },

    // -----------------------------------------------------
    // CORE PROFESSIONAL SKILLS
    // -----------------------------------------------------
    {
      name: "Core Professional Skills",
      icon: <FaUsers />,
      skills: [
        { name: "Problem Solving", icon: <FaLightbulb /> },
        { name: "Problem Analysis", icon: <FaLightbulb /> },
        { name: "Communication", icon: <FaComments /> },
        { name: "Time Management", icon: <FaClock /> },
        { name: "Leadership & Teamwork", icon: <FaUsersCog /> },
      ],
    },
  ];

  return (
    <section className="toolbox-section">
      <div
        className={`section-content toolbox-content ${
          isVisible ? "visible" : ""
        }`}
      >
        <h2 className="section-title">My Toolbox</h2>
        <p className="section-subtitle">
          Skills and technologies I use to build scalable, user-focused AI systems
        </p>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div
              className="skill-category"
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div className="skill-item minimal" key={idx}>
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolBox;

