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

    const refs = timelineRefs.current;

    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
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
        "Discovered programming in school through Python. Small scripts, simple logic — sparked a deeper interest in problem-solving through code.",
    },
    {
      year: "2022",
      title: "Started UG",
      description:
        "Started B.Tech in Information Technology at Guru Gobind Singh Indraprastha University, building foundations across core computing and artificial intelligence.",
    },
    {
      year: "2023",
      title: "Built Strong DSA Foundations",
      description:
        "Strengthened DSA fundamentals through structured coursework and consistent practice, solving 600+ LeetCode problems and developing a disciplined approach to breaking down complex problems.",
    },
    {
      year: "2024",
      title: "Open Source Contributions",
      description:
        "Explored applied development through projects and open-source contributions. Participated in GirlScript Summer of Code, contributing to feature improvements, AI integrations, and collaborative codebases.",
    },
    {
      year: "2025",
      title: "Internships",
      description:
        "Completed multiple internships building AI-driven products and internal platforms. Worked on a multimodal RAG-based medical assistant, a real-time collaborative editor, ML pipelines and generative AI systems, and AI-powered automation and analytics tools used in operational settings.",
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
            I build AI-driven products end to end, with a strong focus on usability, reliability, and real-world constraints.
            </p>
            <p>
            My work sits at the intersection of AI engineering and product execution. Across internships and projects, I’ve worked 
            on internal tools, AI assistants, and collaborative platforms, often owning features from problem framing and system design 
            to implementation and iteration based on feedback. I enjoy operating in ambiguous environments, clarifying requirements, and 
            making tradeoffs that balance technical feasibility with user and business needs.
            </p>
            <p>
            Technically, I work with AI/ML systems, LLM-based architectures, and modern web technologies. Practically, I care about why 
            something is being built, how users interact with it, and what decisions make a system useful beyond a demo.
            </p>
            <p>
              Outside of work, I’m a cinephile who loves films that challenge perspective and storytelling and I’ll never say no to 
              spending time with dogs. Both, in their own way, influence how I think about empathy, design, and human behavior.
            </p>
            <p>
              I’m interested in building thoughtful AI-powered products and platforms that solve real problems—not just technically, but 
              meaningfully.
            </p>
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
