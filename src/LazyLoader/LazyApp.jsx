import React, { Suspense, useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import "./LazyStyles.css";
import { FaSun, FaMoon } from "react-icons/fa";

// Lazy load components
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

const LazyApp = () => {
  const { theme, toggleTheme } = useTheme();
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [loadAbout, setLoadAbout] = useState(false);
  const [loadContact, setLoadContact] = useState(false);

  // Delay loading for About section
  useEffect(() => {
    if (showAbout) {
      setLoadAbout(false);
      setTimeout(() => setLoadAbout(true), 1500); // 1.5s delay
    }
  }, [showAbout]);

  // Delay loading for Contact section
  useEffect(() => {
    if (showContact) {
      setLoadContact(false);
      setTimeout(() => setLoadContact(true), 1000); // 2s delay
    }
  }, [showContact]);

  return (
    <div className={theme}>
      <div className="container">
        <h1>Welcome to the {theme} theme!</h1>

        {/* Theme Toggle Button */}
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />} Toggle Theme
        </button>

        {/* Lazy Load Buttons */}
        <div className="button-group">
          <button className="load-btn" onClick={() => setShowAbout(!showAbout)}>
            {showAbout ? "Hide About" : "Load About"}
          </button>
          <button className="load-btn" onClick={() => setShowContact(!showContact)}>
            {showContact ? "Hide Contact" : "Load Contact"}
          </button>
        </div>

        {/* Lazy Loaded Components with Delayed Display */}
        <div className="content">
          <Suspense fallback={<div>Loading About...</div>}>
            {showAbout && loadAbout && <About />}
          </Suspense>

          <Suspense fallback={<div>Loading Contact...</div>}>
            {showContact && loadContact && <Contact />}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default LazyApp;
