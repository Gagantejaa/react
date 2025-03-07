import React from "react";
import ReactDOM from "react-dom/client";
import EcomRoutes from "./EcomStore/EcomRoutes";
import "./styles.css";
import FetchAPIData from "./Capstone-mini/FetchAPIData";
import ShowHideText from "./Capstone-mini/ShowHideText";
import AppRoutes from "./Capstone-mini/Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
       <AppRoutes/>
  </React.StrictMode>
);
