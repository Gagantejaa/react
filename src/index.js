import React from "react";
import ReactDOM from "react-dom/client";
import DynamicRoutes from "./DynamicPages/DynamicRoutes"; // Ensure this path is correct
import "./DynamicPages/DynamicStyles.css"; // Import styles globally

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DynamicRoutes />
  </React.StrictMode>
);
