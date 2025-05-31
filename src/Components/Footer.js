import React from "react";

export default function Footer() {
  return (
    <>
      <section className="contactme-section">
        <div className="contactme-bg-shapes">
          <span className="contactme-shape contactme-circle" />
          <span className="contactme-shape contactme-triangle" />
          <span className="contactme-shape contactme-dot" />
        </div>
        <div className="container contactme-content text-center">
          <h2 className="contactme-title">Let's Work Together</h2>
          <p className="contactme-subtitle">
            I'm available for freelance work. Have any projects in your mind?
            Just feel free to contact me.
          </p>
          <div className="contactme-socials d-flex justify-content-center align-items-center gap-4 flex-wrap mb-4">
            <a href="#" className="contactme-social" aria-label="Facebook">
              <i className="ri-facebook-fill" />
            </a>
            <a href="#" className="contactme-social" aria-label="Instagram">
              <i className="ri-instagram-line" />
            </a>
            <a href="#" className="contactme-social" aria-label="Twitter">
              <i className="ri-twitter-x-line" />
            </a>
            <a href="#" className="contactme-social" aria-label="Pinterest">
              <i className="ri-pinterest-line" />
            </a>
            <a href="#" className="contactme-social" aria-label="YouTube">
              <i className="ri-youtube-fill" />
            </a>
          </div>
          <button className="contactme-btn">Contact Me</button>
          <div className="footer-copyright mt-4 text-muted" style={{fontSize: '1rem'}}>
            &copy; {new Date().getFullYear()} Made by Rahul Sharma. All rights reserved.
          </div>
        </div>
      </section>
    </>
  );
}
