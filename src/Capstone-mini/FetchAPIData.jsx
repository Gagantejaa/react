import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FetchAPIStyles.css"; // External CSS for styling

const FetchAPIData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch data from Fake Store API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load data!");
        setLoading(false);
      });
  }, []);

  return (
    <div className="product-container">
      <h2>Fetched API Data - Product List</h2>

      {loading && <p>Loading products...</p>}
      {error && <p className="error">{error}</p>}

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description.substring(0, 80)}...</p>
            <p className="price">💰 ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchAPIData;
