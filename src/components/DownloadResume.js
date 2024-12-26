import React from 'react';
import '../stylesheets/DownloadResume.css'; 

const DownloadResume = () => {
  return (
    <div id="resume" className="download-resume-bar">
      <a href='/GarimaBhayana.pdf' download="GarimaBhayana.pdf" className="resume-bar-text">
        Download Resume  &#x2193;
      </a>
    </div>
  );
};

export default DownloadResume;
