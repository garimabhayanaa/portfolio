import React, { useEffect, useRef } from "react";
import "../stylesheets/About.css";

const ProfileImage= "./images/Garima Bhayana.jpeg" ;

const About = () => {
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !timelineRefs.current.includes(el)) {
      timelineRefs.current.push(el);
    }
  };

  const timelineEvents = [
    {
      year: "2020",
      title: "Hello World",
      description:
        "Discovered the world of programming as a Computer Science student in school, starting with basic Python. Found joy in the smallest victories—whether it was printing a simple pattern or getting a few lines of code to run successfully, sparking a deep curiosity for problem-solving through code.",
    },
    {
      year: "2022",
      title: "Started UG",
      description:
        "Began BTech in Information Technology at Guru Gobind Singh Indraprastha University, exploring core computing techniques and Artificial Intelligence.",
    },
    {
      year: "2023",
      title: "Built Strong DSA Foundations",
      description:
        "Developed a strong grasp of DSA by completing a GeeksforGeeks course and tackling countless LeetCode problems. Sharpened problem-solving skills through practice questions and competitive coding contests.",
    },
    {
      year: "2024",
      title: "Open Source Contributions",
      description:
        "Explored open-source development by actively contributing to various projects. Completed a range of projects while honing skills in AI/ML and web development. Participated in GirlScript Summer of Code 2024 Extended, working on AI integration and logo design for multiple projects.",
    },
    {
      year: "2025",
      title: "Internships",
      description:
        "Gained hands-on experience through two internships— developed an AI-powered health assistant using RAG and multimodal AI in the AICTE x TechSaksham program, and built a Real-time collaboration tool with the MERN stack in the EY GDS x AICTE internship.",
    }
  ];

  return (
    <div className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <div className="personal-info">
          <div className="profile-image">
            <img src={ProfileImage} alt="Profile" />
          </div>
          <div className="bio">
            <p>
            Hello! I'm Garima Bhayana, an AI-ML Engineer and Full Stack Developer who thrives on solving 
            problems with technology. My fascination with AI didn’t start in a classroom but with the countless 
            mind-blowing movies that showcased its limitless potential. The idea of intelligent systems evolving, 
            learning, and reshaping the world captivated me—and soon, curiosity turned into action.
            </p>
            <p>
            What began as a love for futuristic storytelling quickly transformed into hands-on exploration. From 
            tinkering with AI models to integrating intelligent automation into real-world applications, I found 
            myself drawn deeper into the field. Open-source contributions, API integrations, and working 
            with cutting-edge AI frameworks fueled my passion even further, turning what once seemed like sci-fi into reality.
            </p>
            <p>
            Outside of tech, I’m a true cinephile—always on the lookout for films that challenge perspectives and push 
            creative boundaries. Whether it’s a thought-provoking thriller or a visually stunning masterpiece, cinema 
            inspires the way I think and build. And when I’m not diving into movies or AI, you’ll find me spending time 
            with dogs, because let’s be real—life is better with them around.
            </p>
            <h3>
              If it can be automated, I’ll find a way. If there’s a story to be told, I’ll be watching. And if there’s 
              a challenge in AI, I’m all in.
            </h3>
          </div>
        </div>

        <div className="journey">
          <h3>My Journey</h3>
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                ref={addToRefs}
                className={`timeline-item fade-in ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div className="timeline-content">
                  <div className="year">{event.year}</div>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
