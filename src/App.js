import './App.css';
import Aboutme from './Components/Aboutme';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        {/* Add more routes for Skills, Projects, Contact as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
