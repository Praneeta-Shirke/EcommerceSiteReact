import React from "react";
import { Link } from "react-router-dom";
import "../Authentication/auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Login</h2>
        <form>
          <input type="email" placeholder="Email" className="auth-input" required />
          <input type="password" placeholder="Password" className="auth-input" required />
          <button className="auth-button" type="submit">Login</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;