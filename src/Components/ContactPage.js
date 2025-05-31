import React from 'react';
import './ContactPage.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContactPage() {
  return (
    <>
    <Navbar />
    <section className="contactpage-section">
      <div className="contactpage-container">
        <div className="contactpage-grid">
          {/* Left Column */}
          <div className="contactpage-info">
            <div className="contactpage-office">
              <h3 className="contactpage-office-title">Head Office</h3>
              <p className="contactpage-office-detail">123 Main Street, New Delhi, India</p>
              <p className="contactpage-office-detail">Phone: +91 98765 43210</p>
              <p className="contactpage-office-detail">Email: headoffice@email.com</p>
            </div>
            <div className="contactpage-office mt-4">
              <h3 className="contactpage-office-title">Branch Office</h3>
              <p className="contactpage-office-detail">456 Park Avenue, Mumbai, India</p>
              <p className="contactpage-office-detail">Phone: +91 91234 56789</p>
              <p className="contactpage-office-detail">Email: branchoffice@email.com</p>
            </div>
            <div className="contactpage-social mt-5">
              <h4 className="contactpage-social-title mb-3">Social Info</h4>
              <div className="contactpage-social-icons">
                <a href="#" className="contactpage-social-icon" aria-label="Facebook"><i className="ri-facebook-fill" /></a>
                <a href="#" className="contactpage-social-icon" aria-label="Instagram"><i className="ri-instagram-line" /></a>
                <a href="#" className="contactpage-social-icon" aria-label="Twitter"><i className="ri-twitter-x-line" /></a>
                <a href="#" className="contactpage-social-icon" aria-label="Pinterest"><i className="ri-pinterest-line" /></a>
                <a href="#" className="contactpage-social-icon" aria-label="YouTube"><i className="ri-youtube-fill" /></a>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="contactpage-form-wrapper">
            <form className="contactpage-form">
              <h2 className="contactpage-form-title mb-4">Contact Us</h2>
              <div className="contactpage-form-group">
                <input type="text" className="contactpage-input" placeholder="Your Name" required />
              </div>
              <div className="contactpage-form-group">
                <input type="email" className="contactpage-input" placeholder="Your E-mail" required />
              </div>
              <div className="contactpage-form-group">
                <input type="text" className="contactpage-input" placeholder="Phone Number" required />
              </div>
              <div className="contactpage-form-group">
                <input type="text" className="contactpage-input" placeholder="Subject" required />
              </div>
              <div className="contactpage-form-group">
                <textarea className="contactpage-input contactpage-textarea" placeholder="Your Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="contactpage-submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
