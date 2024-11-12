import React, { useRef, useEffect, useState } from 'react';
import '../stylesheets/ToolBox.css'; 

const Toolbox = () => {
  const toolboxRef = useRef(null); 
  const [inView, setInView] = useState(false); 
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInView(true); 
        } else {
          setInView(false); 
        }
      });
    }, { threshold: 0.4 }); 
    if (toolboxRef.current) {
      observer.observe(toolboxRef.current);
    }
    return () => {
      if (toolboxRef.current) {
        observer.unobserve(toolboxRef.current); 
      }
    };
  }, []);

  return (
    <section id="skills" className="toolbox-section">
      <div 
        ref={toolboxRef} 
        className={`toolbox-container ${inView ? 'slide-up' : 'slide-down'}`} 
      >
        <div className="skills-category">
          <h2 className="header">Technical Skills</h2>
          <ul>
            <li><div className="heading">Programming Languages :</div><div className="tool">Python, Java</div></li>
            <li><div className="heading">Frameworks & Libraries :</div><div className="tool">React.js, Next.js, Three.js, Flask, Node.js, Express, EJS, Bootstrap, jQuery</div></li>
            <li><div className="heading">Database Management :</div><div className="tool">SQL, PostgreSQL, MongoDB</div></li>
            <li><div className="heading">Cloud Computing :</div><div className="tool">AWS</div></li>
            <li><div className="heading">Machine Learning & AI :</div><div className="tool">Scikit-learn, TensorFlow, Keras</div></li>
            <li><div className="heading">Web Technologies :</div><div className="tool">HTML, CSS, JavaScript, WordPress</div></li>
            <li><div className="heading">Version Control :</div><div className="tool">Git</div></li>
            <li><div className="heading">Data Structures and Algorithms (DSA) :</div><div className="tool">Java</div></li>
          </ul>
        </div>

        <div className="skills-category">
          <h2 className="header">Soft Skills</h2>
          <ul>
            <li className="tool">Creative Problem-Solving</li><br/>
            <li className="tool">Strong Communication</li><br/>
            <li className="tool">Effective Time Management</li><br/>
            <li className="tool">Leadership and Team Collaboration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
