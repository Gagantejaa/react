import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    if (users.some((user) => user.email === formData.email)) {
      alert("User already exists! Please login.");
      navigate("/login");
      return;
    }

    // Add new user to localStorage
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign-up successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <marquee className="scroll-message">Welcome to My Retail Store!</marquee>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <button className="link-btn" onClick={() => navigate("/login")}>Login</button></p>
    </div>
  );
};

export default SignUpForm;
