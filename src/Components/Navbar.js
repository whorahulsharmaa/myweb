import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import "./Navbar.css";

function ResumePopup({ show, onClose, title, desc, gif }) {
  if (!show) return null;
  return (
    <div className="resume-popup-overlay">
      <div className="resume-popup-content animate-popup">
        <button className="resume-popup-close" onClick={onClose}>
          &times;
        </button>
        <img
          src={gif || "/images/download-anim.gif"}
          alt={title || "Download Complete"}
          className="resume-popup-gif"
        />
        <h4 className="resume-popup-title">{title || "Download Complete!"}</h4>
        <p className="resume-popup-desc">
          {desc || (
            <>
              Check your Downloads folder for Resume.<br />Thank you for your interest!
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!currentUser) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowLogoutPopup(true);
      setTimeout(() => setShowLogoutPopup(false), 4000);
      navigate("/");
    } catch (error) {
      // Optionally show error
    }
  };

  const handleResumeClick = (e) => {
    // Start download
    const link = document.createElement("a");
    link.href = "/images/RESUME_RAHUL.pdf";
    link.download = "RESUME_RAHUL.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Show popup
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 6000);
    e.preventDefault();
  };

  return (
    <>
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
                color: "#FFFAFA",
                // color: "#232526",
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav d-flex justify-content-center align-items-center"
              style={{ margin: 0, gap: "2.5rem" }}
            >
              {currentUser ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      style={{ color: "#232526" }}
                      aria-current="page"
                      to="/"
                    >
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
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      style={{ color: "#232526" }}
                      href="/images/RESUME_RAHUL.pdf"
                      onClick={handleResumeClick}
                    >
                      Resume
                    </a>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={handleLogout}
                      className="nav-link navbar-logout-btn"
                      style={{
                        color: "#FFFAFA",
                        fontWeight: 400,
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" style={{ color: "#FFFAFA" }} to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" style={{ color: "#FFFAFA" }} to="/register">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <ResumePopup show={showPopup} onClose={() => setShowPopup(false)} />
      <ResumePopup
        show={showLogoutPopup}
        onClose={() => setShowLogoutPopup(false)}
        title="Logged Out!"
        desc="You have been logged out successfully. See you soon!"
        gif="/images/logout.gif"
      />
    </>
  );
}