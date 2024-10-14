import React, { useState } from 'react';
import '../stylesheets/Bar.css'; 

const Bar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleNavbar = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`navbar-list ${isOpen ? 'active' : ''}`}>
        <li><a href="#about">Journey</a></li>
        <li><a href="#skills">My Toolbox</a></li>
        <li><a href="#projects">Creations</a></li>
        <li><a href="#experience">The Climb</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Let's Connect</a></li>
      </ul>
    </nav>
  );
};

export default Bar;
