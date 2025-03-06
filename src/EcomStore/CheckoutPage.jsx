import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EcomStyles.css";

const CheckoutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <p>Review your order before proceeding.</p>
      <button className="checkout-btn" onClick={() => navigate("/payment")}>Proceed to Payment</button>
      <Link to="/cart" className="shop-link">Back to Cart</Link>
    </div>
  );
};

export default CheckoutPage;
