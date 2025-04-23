import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Authentication/auth.css";

const Signup = () => {
  const [ userData, setUserData] = useState({name: "", password:"", email:""});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); 
  };
  const onChangeData = (v) => {
    setUserData((res) => ({...res, [v.target.name]: v.target.value}))
  }
  const onAdd = () => {
    // document.cookie = `name=${userData?.name}; email=${userData?.email};`
    if(userData?.email) {
      sessionStorage.setItem("name", userData?.name);
      sessionStorage.setItem("email", userData?.email);
      navigate("/")

    }
  }
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Sign Up</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input type="text" placeholder="Name" className="auth-input" required name="name" value={userData?.name} onChange={onChangeData} autoComplete="off"/>
          <input type="email" placeholder="Email" className="auth-input" required name="email" value={userData?.email} onChange={onChangeData} autoComplete="off"/>
          <input type="password" placeholder="Password" className="auth-input" required name="password" value={userData?.password} onChange={onChangeData} autoComplete="off"/>
          <button className="auth-button" type="submit" onClick={onAdd}>Sign Up</button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
