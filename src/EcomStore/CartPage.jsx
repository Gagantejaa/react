import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./EcomStyles.css";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <button className="logout-btn" onClick={() => navigate("/")}>Logout</button>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Go Shopping</Link></p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${getTotalPrice()}</p>
          <button onClick={() => navigate("/payment")}>Proceed to Payment</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
