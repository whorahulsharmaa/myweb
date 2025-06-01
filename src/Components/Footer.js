import React from "react";
import './Footer.css';

export default function Footer() {
  return (
    <>
      <section className="contactme-section footer-fadein">
        <div className="contactme-bg-shapes">
          <span className="contactme-shape contactme-circle" />
          <span className="contactme-shape contactme-triangle" />
          <span className="contactme-shape contactme-dot" />
          {/* Animated gradient overlay */}
          <span className="footer-animated-gradient" />
        </div>
        <div className="container contactme-content text-center">
          <h2 className="contactme-title">Let's Work Together</h2>
          <p className="contactme-subtitle">
            I'm available for freelance work. Have any projects in your mind?
            Just feel free to contact me.
          </p>
          <div className="contactme-socials d-flex justify-content-center align-items-center gap-4 flex-wrap mb-4">
            <a href="https://facebook.com/" className="contactme-social footer-social-anim" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-fill" />
            </a>
            <a href="https://instagram.com/" className="contactme-social footer-social-anim" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-line" />
            </a>
            <a href="https://twitter.com/" className="contactme-social footer-social-anim" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-x-line" />
            </a>
            <a href="https://pinterest.com/" className="contactme-social footer-social-anim" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
              <i className="ri-pinterest-line" />
            </a>
            <a href="https://youtube.com/" className="contactme-social footer-social-anim" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <i className="ri-youtube-fill" />
            </a>
          </div>
          <button className="contactme-btn footer-btn-anim">Contact Me</button>
          <hr className="footer-divider my-4" />
          <div className="footer-copyright mt-2 text-muted" style={{fontSize: '1rem'}}>
            &copy; {new Date().getFullYear()} Made by Rahul Sharma. All rights reserved.
          </div>
        </div>
      </section>
    </>
  );
}
// Add to your CSS (ContactMe.css or Footer.css):
/*
.footer-fadein {
  animation: footerFadeIn 1.2s cubic-bezier(0.4,0,0.2,1);
}
@keyframes footerFadeIn {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
.footer-divider {
  border: none;
  height: 2px;
  background: linear-gradient(90deg, #ff3b3b 0%, #ffb347 100%);
  opacity: 0.5;
  width: 60%;
  margin: 0 auto;
  border-radius: 1px;
}
.footer-social-anim {
  transition: transform 0.2s, box-shadow 0.2s;
}
.footer-social-anim:hover {
  transform: scale(1.18) rotate(-6deg);
  box-shadow: 0 4px 24px 0 rgba(255,59,59,0.18);
  color: #ff3b3b !important;
}
.footer-btn-anim {
  background: linear-gradient(90deg, #ff3b3b 0%, #ffb347 100%);
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 2rem;
  padding: 0.75rem 2.5rem;
  font-size: 1.2rem;
  box-shadow: 0 2px 24px 0 rgba(255,59,59,0.12);
  transition: transform 0.18s, box-shadow 0.18s, background 0.3s;
  position: relative;
  overflow: hidden;
}
.footer-btn-anim:hover {
  transform: scale(1.06) translateY(-2px);
  box-shadow: 0 6px 32px 0 rgba(255,59,59,0.22);
  background: linear-gradient(90deg, #ffb347 0%, #ff3b3b 100%);
}
.footer-animated-gradient {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(120deg, rgba(255,59,59,0.08) 0%, rgba(255,179,71,0.08) 100%);
  animation: footerGradientMove 8s linear infinite alternate;
  border-radius: 2rem;
}
@keyframes footerGradientMove {
  0% { filter: blur(0px); opacity: 0.7; }
  100% { filter: blur(8px); opacity: 1; }
}
*/
