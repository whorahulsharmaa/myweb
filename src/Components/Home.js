import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="container text-center my-5">
      {/* Animated Coding Background */}
      <div className="coding-bg-animated" aria-hidden="true" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <span className="code-float code1">&lt;div&gt;</span>
        <span className="code-float code2">{'{}'}</span>
        <span className="code-float code3">&lt;/&gt;</span>
        <span className="code-float code4">&lt;React /&gt;</span>
        <span className="code-float code5">console.log('Hello!')</span>
        <span className="code-float code6">&lt;h1&gt;Hello&lt;/h1&gt;</span>
        <span className="code-float code7">function App() {'{'}</span>
        <span className="code-float code8">return &lt;Main /&gt;;</span>
      </div>
      <img
        src="images/dp7.jpg"
        alt="Profile"
        className="rounded-circle mb-4"
        style={{
          width: "150px",
          height: "150px",
          border: "4px solid #222",
          objectFit: "cover",
        }}
      />
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm Rahul Sharma — a passionate Full-Stack Developer dedicated to building dynamic, user-friendly, and high-performance web applications. I bring ideas to life through clean code, creative design, and seamless functionality. Explore my work, and let’s collaborate to create something truly amazing!
      </p>
      <div className="row align-items-center justify-content-center my-5 gx-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div
            id="carouselExampleCaptions"
            className="carousel slide shadow-lg rounded-4 overflow-hidden"
            data-bs-ride="carousel"
            style={{
              maxWidth: "700px",
              border: "2px solid #222",
              background: "#f8f9fa",
              margin: 0
            }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="images/ecom.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{
                    height: "350px",
                    objectFit: "cover",
                    filter: "brightness(0.85)",
                  }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3">
                  <h5 className="fw-bold text-warning">New Arrivals – Just Dropped!</h5>
                  <p className="mb-0 text-light">
                    Discover the latest trends and must-have styles fresh from the fashion runway.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="images/ecom2.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{
                    height: "350px",
                    objectFit: "cover",
                    filter: "brightness(0.85)",
                  }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3">
                  <h5 className="fw-bold text-warning">Mega Summer Sale – Up to 50% Off</h5>
                  <p className="mb-0 text-light">
                    Grab your favorites at unbeatable prices. Limited-time deals you don’t want to miss!
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="images/ecom3.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{
                    height: "350px",
                    objectFit: "cover",
                    filter: "brightness(0.85)",
                  }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3">
                  <h5 className="fw-bold text-warning">Shop Smart, Shop Fast</h5>
                  <p className="mb-0 text-light">
                    Easy returns, fast delivery, and top-rated products—your perfect shopping experience starts here.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <section className="py-5 px-3 rounded-4 shadow-lg animate__animated animate__fadeInUp" style={{ background: 'linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%)', maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="fw-bold mb-3 text-primary">What I Do</h2>
            <div className="row g-4 justify-content-center">
              <div className="col-md-4 animate__animated animate__zoomIn animate__delay-1s">
                <div className="card border-0 shadow h-100">
                  <div className="card-body">
                    <i className="ri-code-s-slash-line display-4 text-info mb-3"></i>
                    <h5 className="card-title fw-bold">Full-Stack Development</h5>
                    <p className="card-text">Building robust, scalable, and modern web applications using the latest technologies and frameworks.</p>
                  </div>
                </div>
              </div>
                <div className="col-md-4 animate__animated animate__zoomIn animate__delay-2s">
                <div className="card border-0 shadow h-100">
                    <div className="card-body">
                    <i className="ri-palette-line display-4 text-success mb-3"></i>
                    <h5 className="card-title fw-bold">UI/UX Design</h5>
                    <p className="card-text">Creating intuitive and engaging user interfaces that enhance user experience and drive engagement.</p>
                    </div>
                </div>
                </div>
              <div className="col-md-4 animate__animated animate__zoomIn animate__delay-3s">
                <div className="card border-0 shadow h-100">
                  <div className="card-body">
                    <i className="ri-lightbulb-flash-line display-4 text-warning mb-3"></i>
                    <h5 className="card-title fw-bold">Creative Solutions</h5>
                    <p className="card-text">Delivering innovative solutions that blend design, technology, and strategy for maximum impact.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Glassmorphism Skill Section */}
      <section className="my-5 py-5 px-3 skill-glass-section position-relative d-flex justify-content-center align-items-center">
        {/* Animated Glassmorphism Circles */}
        <div className="glass-circles-bg position-absolute w-100 h-100 top-0 start-0" aria-hidden="true">
          <span className="glass-circle glass-c1"></span>
          <span className="glass-circle glass-c2"></span>
          <span className="glass-circle glass-c3"></span>
          <span className="glass-circle glass-c4"></span>
          <span className="glass-circle glass-c5"></span>
        </div>
        <div className="glass-container mx-auto p-4 p-md-5 rounded-4 shadow-lg position-relative" style={{ maxWidth: '900px', width: '100%', zIndex: 1 }}>
          <h2 className="fw-bold mb-4 text-dark" style={{ letterSpacing: '1px' }}>Skills</h2>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 justify-content-center">
            <div className="col d-flex flex-column align-items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-logo mb-2" />
              <span className="fw-semibold">React</span>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="skill-logo mb-2" />
              <span className="fw-semibold">Node.js</span>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="skill-logo mb-2" />
              <span className="fw-semibold">MongoDB</span>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="skill-logo mb-2" />
              <span className="fw-semibold">HTML5</span>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="skill-logo mb-2" />
              <span className="fw-semibold">CSS3</span>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-logo mb-2" />
              <span className="fw-semibold">JavaScript</span>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="skill-logo mb-2 bg-white p-1 rounded-2" />
              <span className="fw-semibold">Express</span>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="skill-logo mb-2" />
              <span className="fw-semibold">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5 py-5 px-3 rounded-4 shadow-lg animate__animated animate__fadeInUp animate__delay-3s" style={{ background: 'linear-gradient(90deg, #f7971e 0%, #ffd200 100%)', maxWidth: '900px', margin: '0 auto' }}>
        <h2 className="fw-bold mb-3 text-dark">Let's Connect</h2>
        <p className="lead">Interested in working together or have a project in mind? Reach out and let's make it happen!</p>
        <a href="#contact" className="btn btn-lg btn-primary animate__animated animate__heartBeat animate__infinite">Contact Me</a>
      </section>
    </div>
    <Footer />
    </>
  );
}
