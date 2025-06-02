import React, { useState } from "react";
import { auth, googleProvider, githubProvider, signInWithPopup, signInWithEmailAndPassword } from "../firebaseConfig";
import "./Login.css";

function Login() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-space-bg">
        {/* Space background shapes */}
        <span className="login-star login-star1" />
        <span className="login-star login-star2" />
        <span className="login-star login-star3" />
        <span className="login-planet" />
        {/* Extra animated shapes for success */}
        {user && (
          <>
            <span className="login-anim-shape login-anim-shape1" />
            <span className="login-anim-shape login-anim-shape2" />
            <span className="login-anim-shape login-anim-shape3" />
            <span className="login-anim-shape login-anim-shape4" />
          </>
        )}
      </div>
      <div className="login-center-wrap">
        <div className="login-card glass-card">
          <h2 className="login-title">Sign in to Your Account</h2>
          {user ? (
            <div className="login-success-anim">
              <div className="login-success-bg-anim" />
              <img src="/images/logingif.gif" alt="Success" className="login-success-gif" />
              <h3 className="login-success-title">Welcome, you are in! 🚀</h3>
              <p className="login-success-desc">Login successful. Enjoy exploring the portfolio!</p>
              <button className="login-btn-gradient login-success-btn" onClick={() => (window.location.href = "/")}>Go to Home Page</button>
            </div>
          ) : (
            <>
              <form className="login-form" onSubmit={handleEmailLogin}>
                <div className="login-input-wrap">
                  <span className="login-input-icon">
                    <i className="ri-mail-line" />
                  </span>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="login-input"
                    required
                  />
                </div>
                {error && <div className="login-error">{error}</div>}
                <button type="submit" className="login-btn-gradient login-btn-main">Sign In</button>
              </form>
              <div className="login-divider">or</div>
              <div className="login-social-btns">
                <button className="login-btn-social login-btn-google" onClick={() => handleLogin(googleProvider)}>
                  <i className="ri-google-fill" /> Sign in with Google
                </button>
                <button className="login-btn-social login-btn-github" onClick={() => handleLogin(githubProvider)}>
                  <i className="ri-github-fill" /> Sign in with GitHub
                </button>
              </div>
              <div className="login-signup-link">
                Don't have an account? <a href="/register">Sign up</a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;