import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EcomStyles.css";

const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/products");
    } else {
      alert("Invalid credentials! Use 'admin' as username and 'password' as password.");
    }
  };

  return (
    <div style={{ height: "100vh" }}>
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
);

};

export default LoginPage;
