import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const ProductDetails = lazy(() => import('./components/ProductDetails/ProductDetails'));
const ProductList = lazy(() => import('./components/ProductList/Product'));

const App: React.FC = () => {
  return (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
      <Routes>
         {/* Route for the product list page */}
        <Route path="/" element={<ProductList />} />

         {/* Route for the product details page */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
