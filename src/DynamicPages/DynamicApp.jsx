import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./DynamicStyles.css"; // Separate CSS for Dynamic Pages

// Lazy Loading Components
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Post = lazy(() => import("./Post"));
const NotFound = lazy(() => import("./NotFound"));

const DynamicApp = () => {
  return (
    <Router>
      <div className="navbar">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/nonexistent-page">Go to 404 Page</Link></li> {/* Test 404 */}
          </ul>
        </nav>
      </div>

      {/* Lazy Loading Components */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:id" element={<Post />} /> {/* Dynamic Page */}
          <Route path="*" element={<NotFound />} /> {/* Catch-All Route for 404 */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default DynamicApp;
