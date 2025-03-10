import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import About from "./About";
import Contact from "./Contact";
import Post from "./Post";
import NotFound from "./NotFound";
import Navbar from "./Navbar";

const DynamicRoutes = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar included here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default DynamicRoutes;
