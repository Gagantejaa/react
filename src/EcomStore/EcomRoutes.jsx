import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import ProductCatalogue from './ProductCatalogue';

const EcomRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/products" element={isAuthenticated ? <ProductCatalogue /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default EcomRoutes;
