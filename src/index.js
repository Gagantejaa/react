import React from "react";
import ReactDOM from "react-dom/client";
import EcomRoutes from "./EcomStore/EcomRoutes"; // Correct path
import "./styles.css"; // Ensure styles.css exists in src/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EcomRoutes />
  </React.StrictMode>
);
