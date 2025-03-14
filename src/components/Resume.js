import React from "react";
import "../stylesheets/Resume.css";

const Resume = () => {
  return (
    <div className="resume-section">
      <h2 className="section-title">Resume</h2>

      <div className="resume-content">
        <div className="resume-summary">
          <h3>Professional Summary</h3>
          <p>
          AI/ML Engineer and Full Stack Developer passionate about building intelligent and user-friendly applications. 
          Skilled in natural language processing, AI-powered automation, and web development, with experience integrating 
          cutting-edge AI models into real-world solutions. Experienced in developing interactive and scalable applications 
          using modern web technologies, ensuring seamless performance and intuitive user experiences. Committed to leveraging 
          AI and technology to enhance user experiences and drive meaningful innovation.
          </p>
        </div>

        <div className="resume-preview">
          <div className="document-preview">
            <div className="document-header">
              <h3>Garima Bhayana</h3>
              <p>AI/ML Engineer & Full Stack Developer</p>
              <div className="contact-info">
                <p>garimaabhayanaa@gmail.com</p>
                <p>+91 8287240001</p>
                <p>Delhi, India</p>
              </div>
            </div>

            <div className="document-section">
              <h4>Skills Overview</h4>
              <div className="skill-columns">
                <ul>
                  <li>Artificial Inteligence and Machine Learning</li>
                  <li>Deep Learning</li>
                  <li>Computer Vision</li>
                  <li>Natural Language Processing</li>
                </ul>
                <ul>
                <li>Full Stack Development</li>
                <li>Frontend Development (React, Tailwind CSS)</li>
                <li>Backend Development (Node.js, Express)</li>
                <li>Database Management (MongoDB, SQL, PostgreSQL)</li>
                </ul>
              </div>
            </div>

            <div className="document-section">
              <h4>Education</h4>
              <div className="education-item">
                <p className="institution">Dr. Akhilesh Das Gupta Institute of Professional Studies <br></br>( Affiliated to Guru Gobind Singh Indraprastha University) </p>
                <p className="degree">
                  Bachelor of Technology in Information Technology
                </p>
                <p className="year">2022 - 2026</p>
              </div>
              <div className="education-item">
                <p className="institution">
                  Salwan Public School
                </p>
                <p className="degree">
                Higher Secondary Education (Science)
                </p>
                <p className="year">2015 - 2022</p>
              </div>
            </div>
          </div>
        </div>

        <div className="download-section">
          <p>View complete resume or download a copy:</p>
          <div className="download-buttons">
            <a
              href="./GarimaBhayana.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              <span className="download-icon"></span> View Full Resume
            </a>
            <a href="./GarimaBhayana.pdf" download className="download-btn">
              <span className="download-icon">⬇</span> Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
