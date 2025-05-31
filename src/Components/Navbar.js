import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background:
          "linear-gradient(90deg,rgba(255, 0, 0, 0.67), #d55959 100%)",
        boxShadow: "0 2px 12px rgba(44,83,100,0.15)",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src="/images/dp7.jpg"
            alt="logo"
            width="44"
            height="44"
            style={{
              border: "2px solid black",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            className="d-inline-block"
          />
          <h2
            style={{
              margin: 0,
              fontSize: "1.7rem",
              fontWeight: 700,
              color: "#232526",
            }}
          >
            Rahul Sharma
          </h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex justify-content-center align-items-center" style={{ margin: 0, gap: '2.5rem' }}>
            <li className="nav-item">
              <Link className="nav-link active" style={{ color: "#232526" }} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#232526" }} to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#232526" }} to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#232526" }} to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#232526" }} to="/contactpage">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
