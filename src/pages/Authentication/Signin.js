import React from "react";
import { Link } from "react-router-dom";
import "../Authentication/auth.css";

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Sign Up</h2>
        <form>
          <input type="text" placeholder="Name" className="auth-input" required />
          <input type="email" placeholder="Email" className="auth-input" required />
          <input type="password" placeholder="Password" className="auth-input" required />
          <button className="auth-button" type="submit">Sign Up</button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
