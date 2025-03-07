import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import ProductCatalogue from "./ProductCatalogue";
import CartPage from "./CartPage";
import PaymentPage from "./PaymentPage";
import { CartProvider } from "./CartContext";

const EcomRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/products" element={isAuthenticated ? <ProductCatalogue /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default EcomRoutes;
