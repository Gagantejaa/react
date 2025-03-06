import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import laptopImg from "../assets/laptop.jpg";
import phoneImg from "../assets/phone.jpg";
import headphonesImg from "../assets/headphones.jpg";
import tvImg from "../assets/tv.jpg";
import watchImg from "../assets/watch.jpg";
import "./EcomStyles.css";

const products = [
  { id: 1, name: "Laptop", price: 999, img: laptopImg },
  { id: 2, name: "Phone", price: 699, img: phoneImg },
  { id: 3, name: "Headphones", price: 199, img: headphonesImg },
  { id: 4, name: "Smart TV", price: 1200, img: tvImg },
  { id: 5, name: "Smart Watch", price: 299, img: watchImg }
];

const ProductCatalogue = () => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-container">
      <h2>Product Catalogue</h2>
      <Link to="/cart" className="cart-btn">🛒 View Cart ({cart.length})</Link>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
            <p className="product-price">${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalogue;
