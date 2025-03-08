import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< Updated upstream
import EcomRoutes from "./EcomStore/EcomRoutes"; // Correct path
import "./styles.css"; // Ensure styles.css exists in src/
=======
import DynamicRoutes from "./DynamicPages/DynamicRoutes";
import "./DynamicPages/DynamicStyles.css"; // Import global styles
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <EcomRoutes />
=======
    <DynamicRoutes />
>>>>>>> Stashed changes
  </React.StrictMode>
);
