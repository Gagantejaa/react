import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment({ cart = [] }) {
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate total when cart changes
  useEffect(() => {
    if (cart.length > 0) {
      const amount = cart.reduce(
        (sum, item) => sum + parseFloat(item.price.replace(/[^\d.]/g, "")),
        0
      );
      setTotalAmount(amount);
    } else {
      setTotalAmount(0);
    }
  }, [cart]);

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <p>Enter payment details to complete your purchase.</p>

      <div className="payment-summary">
        <h3>Order Summary</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{parseFloat(item.price.replace(/[^\d.]/g, "")).toFixed(2)}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <h3 className="total-amount">Total Amount: ₹{totalAmount.toFixed(2)}</h3>
      </div>

      <div className="button-container">
        <button className="back-button" onClick={() => navigate("/cart")}>
          Back to Cart
        </button>

        <button className="confirm-payment" onClick={() => {
          alert("Payment Successful!");
          navigate("/");
        }}>
          Confirm Payment
        </button>
      </div>
    </div>
  );
}

export default Payment;