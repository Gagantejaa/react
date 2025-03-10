import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$59.99",
    image: "https://via.placeholder.com/120?text=Headphones",
  },
  {
    id: 2,
    name: "Smartphone",
    price: "$799.99",
    image: "https://via.placeholder.com/120?text=Smartphone",
  },
  {
    id: 3,
    name: "Laptop",
    price: "$999.99",
    image: "https://via.placeholder.com/120?text=Laptop",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: "$199.99",
    image: "https://via.placeholder.com/120?text=Smartwatch",
  },
  {
    id: 5,
    name: "Gaming Console",
    price: "$499.99",
    image: "https://via.placeholder.com/120?text=Console",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove logged-in user
    navigate("/login", { replace: true }); // Redirect to login
  };

  return (
    <div className="home-container">
      <h1>Welcome to My Retail App Store!</h1>
      <p>Shop the best products at amazing prices.</p>

      {/* Product Grid */}
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default HomePage;
