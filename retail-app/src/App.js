import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

const App = () => {
  const user = JSON.parse(localStorage.getItem("user")); // Check if user is logged in

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={user ? <HomePage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
