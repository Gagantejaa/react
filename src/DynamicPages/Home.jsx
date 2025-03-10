import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Handle search and redirect
  const handleSearch = () => {
    const searchTerm = search.toLowerCase();

    if (searchTerm === "home") {
      navigate("/");
    } else if (searchTerm === "about") {
      navigate("/about");
    } else if (searchTerm === "contact") {
      navigate("/contact");
    } else if (searchTerm.startsWith("post ")) {
      // Extract post ID from input like "post 1"
      const postId = searchTerm.split(" ")[1];
      if (!isNaN(postId) && postId >= 1 && postId <= 3) {
        navigate(`/post/${postId}`);
      } else {
        navigate("/404");
      }
    } else {
      navigate("/404");
    }
  };

  return (
    <div className="page">
      <h1>Welcome to Our Website</h1>
      <p>Search for a page (Home, About, Contact, or Post ID)</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Type page name or 'Post ID'..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <button onClick={handleSearch} className="search-button">
        🔍 Search
      </button>
    </div>
  );
};

export default Home;
