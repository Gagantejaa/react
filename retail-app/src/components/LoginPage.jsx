import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user exists
    const user = users.find((user) => user.email === formData.email && user.password === formData.password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store logged-in user
      navigate("/home"); // Redirect to homepage
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="auth-container">
      <marquee className="scroll-message">Welcome to My Retail Store!</marquee>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <button className="link-btn" onClick={() => navigate("/signup")}>Sign Up</button></p>
    </div>
  );
};

export default LoginPage;
