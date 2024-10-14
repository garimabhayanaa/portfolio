import React, { useState } from 'react';
import "../stylesheets/Creations.css";
import webLogo from '../logos/website.png'

const projects = [
  {
    title: 'RoadMap Generator',
    brief: 'AI-integrated learning tool to carve personalised learning path for user.',
    header: 'React-based AI-powered tool that streamlines skill acquisition',
    description: 'Harnesses the capabilities of COHERE API to provide personalized learning paths. By inputting your desired skill and specific requirements, our AI meticulously constructs a tailored roadmap that guides you through your learning journey. Our tool empowers you to save your roadmap and accompanying notes as PDFs, ensuring easy access and future reference. With RoadMap Generator, you can streamline your learning process, stay organized, and efficiently achieve your skill acquisition goals.',
    link: 'https://roadmap-generator-two.vercel.app/',
  },{
    title: 'PeriodPal',
    brief: 'React-based application to calculate and track menstrual cycles.',
    header: 'User-friendly menstrual cycle tracking app',
    description: 'A comprehensive menstrual cycle tracking app designed to empower women with accurate and insightful information. By entering your last period date and average cycle length, our app provides precise calculations of your expected next period date and potential ovulation window. With PeriodPal, you can gain a deeper understanding of your menstrual cycle, anticipate changes, and make informed decisions about your health and well-being. It is easy to use and helps you track your cycle, monitor symptoms, and identify patterns.',
    link: 'https://garimabhayanaa.github.io/PeriodPal/',
  },
  {
    title: 'Tree Visualizer',
    brief: 'Tool for visualizing binary trees, binary search trees and heaps.',
    header: 'Interactive visualisation of tree data structures',
    description: 'An interactive application that allows you to explore and understand various tree data structures. By entering an array of numbers, you can instantly visualize the corresponding binary tree, binary search tree, min heap, or max heap. Our tool provides a clear and concise overview of each data structure, accompanied by a visual representation that highlights the relationships between nodes and their values. Additionally, Tree Visualizer displays the underlying array, enabling you to connect the abstract data structure to its concrete implementation.',
    link: 'https://garimabhayanaa.github.io/Tree-Visualizer/',
  },
  {
    title: 'Movie Manager',
    brief: 'A watchlist application built with EJS, JavaScript, Node.js, and Express.',
    header: 'Your personalized watchlist companion',
    description: 'A handy tool that helps you organize and keep track of your must-watch movies and TV shows. Utilizing a local database, Movie Manager allows you to effortlessly add, edit, and remove movies and series from your list. You can keep track of the films and shows you\'re eager to watch, ensuring you never miss out on your favorite entertainment. Streamline your watchlist management, stay on top of the latest releases, and never miss another must-watch with Movie Manager.',
    link : 'https://youtu.be/0qRJc8AoVTE',
  },
  {
    title: 'Budget Manager',
    brief: 'A Streamlit-based tool using machine learning for expense management.',
    header: 'Smart tool for optimizing your spending.',
    description: 'A collaborative project developed during an IBM summer training that leverages machine learning to help you make informed financial decisions. By analyzing your inputted expenses and comparing them to similar expenses within the same category, our tool provides valuable insights into average spending patterns and potential savings opportunities. Budget Manager empowers you to identify areas where you can optimize your spending, track your budget more effectively, and make more financially responsible choices.',
    link : 'https://youtu.be/Es0UIUB5b7E',
  },
  {
    title: 'Thrifteria',
    brief: 'A platform aimed at balancing fashion and sustainability.',
    header : 'Sustainable marketplace for secondhand fashion',
    description: 'An user-friendly online platform that promotes sustainable fashion and reduces waste. Built on WordPress, Thrifteria connects individuals looking to sell their gently used clothes and accessories with buyers seeking affordable and eco-conscious options. Our platform offers all the essential features of an e-commerce store, including easy browsing, convenient checkout, multiple payment options, and a personalized wishlist. Thrifteria provides a convenient and sustainable way to shop and sell secondhand fashion, empowering both sellers and buyers to make a positive impact on the environment.',
    link: 'https://youtu.be/rqE9GJe-CJo',
  },
];

const Creations = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [closing, setClosing] = useState(false); // Track closing state for pop-down animation

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setClosing(true); // Set closing state to true to trigger pop-down animation
    setTimeout(() => {
      setSelectedProject(null); // After animation finishes, remove modal
      setClosing(false); // Reset closing state
    }, 500); // Match the timeout to the animation duration
  };

  return (
    <section id="projects" className="creations-section">
      <h2 className="creation-header">Creations</h2>
      <div className="cards-container">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="card" 
            onClick={() => handleProjectClick(project)}
            onMouseEnter={() => setSelectedProject(null)} // Clears details on hover
          >
            <div className="card-title">{project.title}</div>
            <div className="card-brief">
              {project.brief}
              <br/>
              <br/>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="card-link"
              >
                <img src={webLogo} alt="webiste-link" className='web-logo'/>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal for Detailed Description */}
      {selectedProject && (
        <div className={`project-popup ${closing ? 'pop-down' : 'pop-up'}`}>
          <div className="project-popup-content">
            <h3>{selectedProject.title}</h3>
            <h4>{selectedProject.header}</h4>
            <br/>
            <p>{selectedProject.description}</p>
            <br/>
            <button className="close-button" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Creations;