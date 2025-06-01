import React from "react";
import "./ProjectsSection.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const devProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    desc: "A scalable online store with payment integration and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "images/ecomdev.jpg",
  },
  {
    id: 2,
    title: "Portfolio Website",
    desc: "A modern, animated portfolio SPA for developers and designers.",
    tech: ["React", "Framer Motion", "Bootstrap"],
    img: "images/portfolio.jpg",
  },
  {
    id: 3,
    title: "Task Manager App",
    desc: "A productivity app with real-time sync and notifications.",
    tech: ["React", "Redux", "Firebase"],
    img: "images/taskmanager.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <>
    <Navbar />
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-underline" />
        <p className="projects-subtitle">
          A selection of my recent work in development.
        </p>
      </div>
      <div className="projects-cards">
        {devProjects.map((proj) => (
          <div className="project-card" key={proj.id}>
            <div className="project-img-placeholder">
              {proj.img && <img src={proj.img} alt={proj.title} className="project-img" />}
            </div>
            <div className="project-card-body">
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-badges">
                {proj.tech.map((t) => (
                  <span className="project-badge" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="projects-bottom-btn-wrap">
        <button className="projects-bottom-btn">
          View All Development Projects
        </button>
      </div>
    </section>
    <Footer />
    </>
  );
}
