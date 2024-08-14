import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import "../src/App.css";
import { CartProvider } from "./Manage/ManageCart";
import Product from "./pages/Product";
import PrivacyPolicy from  "./components/PrivacyPolicy";
import RefundCancellation from "./components/Refund-Cancellation";
import TermsConditions from "./components/Terms-Conditions";
import WarrantyReturn from "./components/Warranty-Return";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/Refund-Cancellation" element={<RefundCancellation />} />
          <Route path="/Terms&Conditions" element={<TermsConditions />} />
          <Route path="/Warranty&Return" element={<WarrantyReturn />} />



        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;