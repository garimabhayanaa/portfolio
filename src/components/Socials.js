import React from 'react';
import "../stylesheets/Socials.css";
import LinkedInLogo from '../logos/LinkedIn.png';
import GithubLogo from '../logos/Github.png';
import MailLogo from '../logos/Mail.png';

const LetsConnect = () => {
  return (
    <section id="contact" className="connect-section">
      <div className="connect-container">
        <div className="connect-item">
          <a href="http://www.linkedin.com/in/garimabhayanaa" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInLogo} alt="LinkedIn" className="logos" />
          </a>
        </div>
        <div className="connect-item">
          <a href="https://github.com/garimabhayanaa" target="_blank" rel="noopener noreferrer">
          <img src={GithubLogo} alt="Github" className="logos" />
          </a>
        </div>
        <div className="connect-item">
          <a href="mailto:garimaabhayanaa@gmail.com">
          <img src={MailLogo} alt="E-mail" className="logos" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;
