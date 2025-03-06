import React from "react";
import { useParams, Link } from "react-router-dom";
import laptopImg from "../assets/laptop.jpg";
import phoneImg from "../assets/phone.jpg";
import headphonesImg from "../assets/headphones.jpg";
import smartwatchImg from "../assets/watch.jpg";
import "./EcomStyles.css";

const productData = {
  1: { name: "Laptop", price: 999, img: laptopImg, desc: "High-performance laptop for all your needs." },
  2: { name: "Phone", price: 699, img: phoneImg, desc: "Latest smartphone with cutting-edge features." },
  3: { name: "Headphones", price: 199, img: headphonesImg, desc: "Noise-canceling headphones for immersive sound." },
  4: { name: "Smartwatch", price: 299, img: smartwatchImg, desc: "Stay connected with this stylish smartwatch." },
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData[id];

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.img} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.desc}</p>
      <p className="product-price">${product.price}</p>
      <Link to="/products" className="back-link">🔙 Back to Products</Link>
    </div>
  );
};

export default ProductDetails;
