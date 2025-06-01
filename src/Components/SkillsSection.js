import React, { useState, useEffect } from "react";
import "./SkillsSection.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const devSkills = [
  { name: "Frontend Development", percent: 90 },
  { name: "Backend Development", percent: 85 },
  { name: "Database", percent: 80 },
  { name: "DevOps", percent: 70 },
  { name: "UI/UX", percent: 88 },
  { name: "Mobile Development", percent: 65 },
];

const techStack = [
  "React", "Next.js", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker", "GraphQL", "Redux", "Express", "Tailwind CSS"
];

export default function SkillsSection() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(false);
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Navbar />
    <section className="skills-section">
      <div className="skills-header">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-underline" />
        <p className="skills-subtitle">
          I specialize in both development and video editing, delivering high-quality solutions for web, mobile, and creative projects.
        </p>
      </div>
      <div className="skills-dev-section">
        <div className="skills-expertise-card">
          <div className="skills-expertise-title-wrap">
            <span className="skills-expertise-icon">
              {'</>'}
            </span>
            <span className="skills-expertise-title">Development Expertise</span>
          </div>
          <div className="skills-grid">
            <div className="skills-col">
              {devSkills.slice(0, 3).map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-label-row">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className={`skill-bar-fill${animated ? " animated" : ""}`}
                      style={{ width: animated ? `${skill.percent}%` : 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="skills-col">
              {devSkills.slice(3).map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-label-row">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className={`skill-bar-fill${animated ? " animated" : ""}`}
                      style={{ width: animated ? `${skill.percent}%` : 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="skills-techstack-wrap">
          <h4 className="skills-techstack-title">Technologies I Work With</h4>
          <div className="skills-techstack-badges">
            {techStack.map((tech) => (
              <span className="skills-tech-badge" key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
