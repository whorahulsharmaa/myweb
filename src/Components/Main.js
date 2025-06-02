import React, { useEffect } from 'react';
import './MainHero.css';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatIOffer from './WhatIOffer';
import Portfolio from './Portfolio';
import { Link } from 'react-router-dom';


export default function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar />
    <section className="main-hero-section d-flex align-items-center justify-content-center min-vh-100 bg-white position-relative overflow-hidden">
      <div className="container-fluid px-4 px-md-5">
        <div className="row align-items-center justify-content-center flex-column-reverse flex-md-row">
          {/* Left Side */}
          <div className="col-md-6 text-center text-md-start mb-5 mb-md-0 animate__animated animate__fadeInLeft animate__delay-1s">
            <div className="main-hero-subheading mb-2">MERN Stack Developer</div>
            <h1 className="main-hero-heading mb-2">
              Hello, I'm <br /> 
              <span className="main-hero-name">Rahul Sharma</span>
            </h1>
            <p className="main-hero-desc mb-4">
              I design and build modern, high-performance web applications with a passion for clean code, creative UI, and seamless user experiences. Let's collaborate to bring your ideas to life!
            </p>
            <a href="#contact" className="main-hero-btn">GET IN TOUCH</a>
            {/* Why Hire Me Section */}
          </div>
          {/* Right Side */}
          <div className="col-md-6 d-flex justify-content-center align-items-center position-relative animate__animated animate__fadeInRight animate__delay-2s">
            <div className="main-hero-img-bg position-absolute top-50 start-50 translate-middle">
              {/* Animated SVG Dashed Curves */}
              <svg className="main-hero-dashed-svg" width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="130" cy="130" r="120" stroke="#ff3b3b" strokeWidth="3" strokeDasharray="12 12" fill="none">
                  <animateTransform attributeName="transform" type="rotate" from="0 130 130" to="360 130 130" dur="12s" repeatCount="indefinite" />
                </circle>
              </svg>
              {/* Floating Accent Elements */}
              <span className="main-hero-float main-hero-dot" />
              <span className="main-hero-float main-hero-triangle" />
              <span className="main-hero-float main-hero-circle" />
              <span className="main-hero-float main-hero-icon">
                <i className="ri-code-s-slash-line" />
              </span>
            </div>
            <div className="main-hero-img-wrapper position-relative" style={{ width: '400px', height: '400px' }}>
              <img src="images/dp7.jpg" alt="Rahul Sharma" className="main-hero-img" />
            </div>
          </div>
        </div>
        {/* New Section: Why Hire Me & What Can I Offer */}
        <div className="row align-items-stretch justify-content-center flex-column flex-md-row g-4 mt-4">
          {/* Left Side: Why Hire Me Box */}
          <div className="col-md-6 d-flex flex-column justify-content-center animate__animated animate__fadeInLeft animate__delay-1s">
            <div className="main-hero-box why-hire-me-section glass-effect p-4 p-md-5 rounded-4 h-100 d-flex flex-column justify-content-between align-items-start">
              <h2 className="why-hire-me-title mb-3">Why Hire Me?</h2>
              <p className="why-hire-me-desc mb-4">
                With a proven track record of delivering robust, scalable, and visually stunning web applications, I bring a blend of technical expertise, creative problem-solving, and a passion for user-centric design. I am committed to exceeding expectations and driving results for your business.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="/images/RESUME_RAHUL.pdf" download className="btn btn-primary why-hire-btn">Download My CV</a>
                <Link to="/contactpage" className="btn btn-outline-primary why-hire-btn">Hire Me</Link>
              </div>
            </div>
          </div>
          {/* Right Side: What Can I Offer Box */}
          <div className="col-md-6 d-flex flex-column justify-content-center animate__animated animate__fadeInRight animate__delay-2s">
            <div className="main-hero-box what-i-offer-section glass-effect p-4 p-md-5 rounded-4 h-100 d-flex flex-column justify-content-between align-items-start">
              <h2 className="what-i-offer-title mb-3">What Can I Offer?</h2>
              <ul className="what-i-offer-list mb-0 ps-3">
                <li>Custom, responsive web applications</li>
                <li>Modern UI/UX with smooth animations</li>
                <li>API integration & backend development</li>
                <li>Performance optimization & SEO</li>
                <li>Clean, maintainable code</li>
                <li>Ongoing support & collaboration</li>
              </ul>
            </div>
          </div>
        </div>
        {/* New Clean What I Offer Section (Carousel) */}
        <WhatIOffer />
        {/* Portfolio Section */}
        <Portfolio />
      </div>
    </section>
    <Footer />
    </>
  );
}
