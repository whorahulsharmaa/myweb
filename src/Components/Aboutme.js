import React from 'react';
import './MainHero.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Aboutme() {
  return (
    <>
      <Navbar />
      <section className="main-hero-section d-flex align-items-center justify-content-center min-vh-100 position-relative overflow-hidden" style={{ background: 'linear-gradient(120deg, #fff 0%, #ffeaea 100%)' }}>
        <div className="container-fluid px-4 px-md-5">
          <div className="row align-items-center justify-content-center flex-column flex-md-row">
            <div className="col-md-8 mx-auto">
              <div className="main-hero-box glass-effect p-4 p-md-5 rounded-4 d-flex flex-column align-items-center text-center" style={{ maxWidth: 600, margin: '0 auto' }}>
                <h1 className="main-hero-heading mb-2" style={{ fontSize: '2.5rem' }}>Let's Work Together</h1>
                <p className="main-hero-desc mb-4" style={{ color: '#888', fontSize: '1.18rem', fontWeight: 500 }}>
                  I'm available for freelance work. Have any projects in your mind? Just feel free to contact me.
                </p>
                <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap mb-4">
                  <a href="#" className="footer-social" aria-label="Facebook"><i className="ri-facebook-fill" /></a>
                  <a href="#" className="footer-social" aria-label="Instagram"><i className="ri-instagram-line" /></a>
                  <a href="#" className="footer-social" aria-label="Twitter"><i className="ri-twitter-x-line" /></a>
                  <a href="#" className="footer-social" aria-label="Pinterest"><i className="ri-pinterest-line" /></a>
                  <a href="#" className="footer-social" aria-label="YouTube"><i className="ri-youtube-fill" /></a>
                </div>
                <a href="#contact" className="main-hero-btn">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
