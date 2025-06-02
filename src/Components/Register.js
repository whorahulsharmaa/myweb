import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebaseConfig";
import "./Login.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration Successful");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-space-bg">
        <span className="login-star login-star1" />
        <span className="login-star login-star2" />
        <span className="login-star login-star3" />
        <span className="login-planet" />
      </div>
      <div className="login-center-wrap">
        <div className="login-card glass-card">
          <h2 className="login-title">Create Your Account</h2>
          <form className="login-form" onSubmit={handleRegister}>
            <div className="login-input-wrap">
              <span className="login-input-icon">
                <i className="ri-mail-line" />
              </span>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
                required
              />
            </div>
            <div className="login-input-wrap">
              <span className="login-input-icon">
                <i className="ri-lock-2-line" />
              </span>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                required
              />
            </div>
            {error && <div className="login-error">{error}</div>}
            <button type="submit" className="login-btn-gradient login-btn-main">
              Register
            </button>
          </form>
          <div className="login-signup-link">
            Already have an account? <a href="/login">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
