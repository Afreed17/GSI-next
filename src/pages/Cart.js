import React, { useContext, useState } from "react";
import "./Cart.css";
import Mastercard from "../images/cart/MasterCard.png";
import Rupay from "../images/cart/Rupay.png";
import Visa from "../images/cart/Visa.png";
import { ManageCartContext } from "../Manage/ManageCart";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(ManageCartContext);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const subtotal = Object.values(cartItems).reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  const shipping = 4;
  const total = subtotal + shipping;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    alert("Product Buyed successfully");
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your cart</h1>
      <div className="cart-content">
        <div className="cart-items">
          {Object.values(cartItems).map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.src} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <div className="item-quantity">
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              </div>
              <button className="item-remove" onClick={() => removeFromCart(item.id)}>🗑️</button>
            </div>
          ))}
        </div>
        <div className="cart-details">
          <h2>Card Details</h2>
          <form className="card-form">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              required
            />
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              required
            />
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              required
            />
            <div className="card-types">
              <img src={Mastercard} alt="MasterCard" />
              <img src={Rupay} alt="Visa" />
              <img src={Visa} alt="RuPay" />
            </div>
          </form>
          <div className="cart-summary">
            <div>
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div>
              <span>Shipping:</span>
              <span>${shipping}</span>
            </div>
            <div>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;