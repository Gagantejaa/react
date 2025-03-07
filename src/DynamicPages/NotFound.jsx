import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <button onClick={() => navigate("/")} className="action-button">
        🏠 Go Home
      </button>
    </div>
  );
};

export default NotFound;
