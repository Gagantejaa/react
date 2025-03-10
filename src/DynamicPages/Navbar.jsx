import React from "react";
import { Link } from "react-router-dom";
import { Home, Info, Mail, AlertTriangle, FileText } from "lucide-react"; // Import Post Icon

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link"><Home size={20} /> Home</Link>
      <Link to="/about" className="nav-link"><Info size={20} /> About</Link>
      <Link to="/contact" className="nav-link"><Mail size={20} /> Contact</Link>
      <Link to="/post/1" className="nav-link"><FileText size={20} /> Posts</Link>
      <Link to="/404" className="nav-link"><AlertTriangle size={20} /> 404</Link>
    </nav>
  );
};

export default Navbar;
