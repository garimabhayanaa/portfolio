import React, { useState } from "react";
import "../stylesheets/Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
     {
      "id": 1,
      "title": "Ayush Aarogya",
      "description":
        "An AI-powered medicinal plant platform integrating 3D plant models, deep-learning based plant image classification, and a RAG-enhanced query system. Provides scientific plant details, multilingual support, personalized remedy recommendations, comparison tools, and interactive exploration to promote awareness of AYUSH medicinal flora.",
      "image": "./images/AyushAarogya.png",
      "category": "ai",
        "technologies": [
        "React.js",
        "Flask",
        "Firebase",
        "Deep Learning",
        "RAG",
        "3D Models",
        "Vercel",
        "Render"
      ],
      "github": "https://github.com/garimabhayanaa/Ayush-Aarogya",
      "demo": "https://ayush-aarogya.vercel.app/"
    },
    {
      "id": 2,
      "title": "TraceLens",
      "description": "A digital footprint analysis tool designed to raise privacy awareness by demonstrating how AI can infer sensitive personal information from publicly available data. Features include secure authentication, AI-driven inference engine, privacy risk assessment, and educational resources.",
      "image": "./images/TraceLens.png",
      "category": "ai",
      "technologies": ["Next.js", "React", "Tailwind CSS", "Flask", "FireBase", "Vercel", "CI/CD"],
      "github": "https://github.com/garimabhayanaa/TraceLens",
      "demo": "https://trace-lens.vercel.app/"
    },
    { 
      id: 3,
      title: "AI-Powered Health Assistant",
      description:
        "AI-driven healthcare assistant using Retrieval-Augmented Generation (RAG) and multimodal LLMs for accurate medical insights.",
      image: "./images/HealthAssistant.jpeg",
      category: "ai",
      technologies: ["Python", "FAISS", "Groq API", "Hugging Face Transformers", "Streamlit"],
      github: "https://github.com/garimabhayanaa/Health-Assistant",
      demo: "https://ai-health-assistant.streamlit.app",
    },
    {
      "id": 4,
      "title": "CoCreate",
      "description": "A real-time collaborative document editor with role-based access control, AI-powered assistance, and seamless multi-user editing.",
      "image": "./images/CoCreate.png",
      "category": "web-dev",
      "technologies": ["React", "Node.js", "Express", "MongoDB", "WebSockets", "Socket.IO", "Netlify", "Render", "Git"],
      "github": "https://github.com/garimabhayanaa/CoCreate-frontend",
      "demo": "https://cocreatecolab.netlify.app"
    }, 
    {
      id: 5,
      title: "WanderAI",
      description:
        "An AI-powered travel planner that generates personalized itineraries using Gemini AI. Features include real-time city search, interactive OpenStreetMaps, PDF itinerary downloads, and a user-friendly interface built with Streamlit and Flask.",
      image: "/images/WanderAI.jpeg",
      category: "ai",
      technologies: ["Python", "Flask", "Streamlit", "Google Gemini API", "OpenStreetMap", "Render"],
      github: "https://github.com/garimabhayanaa/WanderAI",
      demo: "https://wanderai.streamlit.app/",
    },
    {
      id: 6,
      title: "IntelliAssist",
      description:
        "An AI-powered virtual assistant with voice and text interaction, automation capabilities, and real-time information retrieval.",
      image: "./images/IntelliAssist.png",
      category: "ai",
      technologies: ["Python", "PyQt5", "Cohere API", "Groq API", "Hugging Face API", "Selenium"],
      github: "https://github.com/garimabhayanaa/IntelliAssist",
      demo: "https://youtu.be/45pJzgAXK9M",
    },
    {
      id: 7,
      title: "RoadMap Generator",
      description:
        "AI-integrated tool that generates personalized learning roadmaps based on user input using COHERE API.",
      image: "/images/RoadmapGenerator.jpeg",
      category: "ai",
      technologies: ["React", "Cohere API", "Node.js", "Express"],
      github: "https://github.com/garimabhayanaa/roadmap-generator",
      demo: "https://roadmap-generator-two.vercel.app/",
    },
    {
      id: 8,
      title: "PeriodPal",
      description:
        "React-based menstrual cycle tracker that predicts upcoming periods and ovulation windows based on user inputs.",
      image: "/images/PeriodPal.jpeg",
      category: "web-dev",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/garimabhayanaa/PeriodPal",
      demo: "https://garimabhayanaa.github.io/PeriodPal/",
    },
    {
      id: 9,
      title: "SynthText",
      description: 
        "AI-powered tool that performs tone-aware summarization and paraphrasing of long texts using Facebook’s BART Large CNN model, helping users extract concise, meaningful insights while preserving intent and context.",
      image: "/images/SynthText.png",
      category: "ai",
      technologies: ["JavaScript", "Hugging Face API", "BART Model"],
      github: "https://github.com/garimabhayanaa/SynthText",
      demo: "https://synthtext-garima-bhayanas-projects.vercel.app/",
    },
    {
      id: 10,
      title: "Tree Visualizer",
      description:
        "Interactive visualization tool for Binary Trees, BSTs, and Heaps, helping users understand tree structures intuitively.",
      image: "/images/TreeVisualizer.jpeg",
      category: "web-dev",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/garimabhayanaa/Tree-Visualizer",
      demo: "https://garimabhayanaa.github.io/Tree-Visualizer/",
    },
    {
      id: 11,
      title: "Movie Manager",
      description:
        "A personalized watchlist application built using EJS, JavaScript, Node.js, and Express for organizing movies and TV shows.",
      image: "/images/MovieManager.jpeg",
      category: "web-dev",
      technologies: ["EJS", "Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/garimabhayanaa/movie-manager",
      demo: "https://youtu.be/0qRJc8AoVTE",
    },
    {
      id: 12,
      title: "Budget Manager",
      description:
        "Machine learning-powered expense management tool built with Streamlit to provide insights into spending patterns.",
      image: "/images/BudgetManager.jpeg",
      category: "ai",
      technologies: ["Python", "Machine Learning", "Streamlit", "Pandas"],
      github: "https://github.com/garimabhayanaa/budget-manager",
      demo: "https://youtu.be/Es0UIUB5b7E",
    },
    {
      id: 13,
      title: "Thrifteria",
      description:
        "A WordPress-based sustainable fashion marketplace, allowing users to buy and sell secondhand clothing.",
      image: "/images/Thrifteria.jpeg",
      category: "web-dev",
      technologies: ["WordPress", "WooCommerce"],
      github: "https://youtu.be/rqE9GJe-CJo",
      demo: "https://youtu.be/rqE9GJe-CJo",
    },
  ];  

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "ai", name: "AI/ML" },
    { id: "web-dev", name: "Web Development" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="projects-section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="project-filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${
              activeFilter === filter.id ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Demo
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
