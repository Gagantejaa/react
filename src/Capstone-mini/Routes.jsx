import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShowHideText from "./ShowHideText";
import FetchAPIData from "./FetchAPIData";
import "./Routes.css";


const AppRoutes = () => {
  return (
    <Router>
      <div className="navbar">
        <Link to="/show-hide">Show/Hide Text</Link>
        <Link to="/fetch-api">Fetch API Data</Link>
      </div>

      <Routes>
        <Route path="/show-hide" element={<ShowHideText />} />
        <Route path="/fetch-api" element={<FetchAPIData />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
