import React from 'react';
import Bar from './Bar';
import Home from './Home'
import Journey from './Journey';
import Toolbox from './ToolBox';
import Creations from './Creations';
import Climb from './Climb';
import DownloadResume from './DownloadResume';
import LetsConnect from './Socials';

function App = () => {
  return (
    <div>
      <Bar />
      <Home />
      <Journey />
      <Toolbox />
      <Creations />
      <Climb />
      <DownloadResume />
      <LetsConnect />
    </div>
  );
};

export default App;
