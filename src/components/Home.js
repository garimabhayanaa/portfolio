import "../stylesheets/Home.css";
import { useEffect, useState } from "react";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    
    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Add resize listener
    
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return (
    <div className="home-content">
      <h1 id="name">
        <span className="first-name">&lt; Garima</span>
        {isMobile ? <br /> : " "}
        <span className="last-name">Bhayana /&gt;</span>
      </h1>
      <h2 id="profession">AI/ML Engineer | Full Stack Developer</h2>
    </div>
  );
}

export default Home;
