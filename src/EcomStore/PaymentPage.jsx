import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./EcomStyles.css";

const PaymentPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");

  if (!cart || cart.length === 0) {
    return (
      <div className="payment-container">
        <h2>No Items in Cart</h2>
        <button onClick={() => navigate("/products")}>Go to Products</button>
      </div>
    );
  }

  const handlePayment = () => {
    alert("Payment successful! Thank you for your order.");
    setCart([]); // Clear the cart after payment
    navigate("/products"); // Redirect to products page
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <p>Total Amount: ${cart.reduce((total, item) => total + item.price, 0)}</p>
      
      <input
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <input
        type="password"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />
      
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
