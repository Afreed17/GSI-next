import React, { useState, useEffect } from "react";
import "./Cart.css";
import Image from '../images/cart/AirJordan.jpg';
import Image2 from '../images/cart/LakersJersey.jpg';
import Image3 from '../images/cart/NikeJoggers.jpg';

const Cart = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Air Jordan", description: "Nike's Jordan Shoes", price: 681, quantity: 1, image: Image },
    { id: 2, name: "Lakers Jersey", description: "Lakers 21 No. Jersey", price: 681, quantity: 1, image: Image2 },
    { id: 3, name: "Joggers", description: "Nike grey Jogger Pant", price: 681, quantity: 1, image: Image3 },
  ]);

  const [cardDetails, setCardDetails] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleQuantityChange = (id, delta) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCardInputChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 4;
  const total = subtotal + shipping;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.cart-modal')) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div>
      cart
    </div>
    // <div className="cart-modal">
    //   <div className="cart-content">
    //     <div className="cart-header">
    //       <h2>Shopping Cart</h2>
    //       <button className="close-btn" onClick={onClose}>
    //         &times;
    //       </button>
    //     </div>
    //     <p>You have {cartItems.length} item{cartItems.length > 1 ? "s" : ""} in your cart</p>
    //     <div className="cart-items">
    //       {cartItems.map(item => (
    //         <div key={item.id} className="cart-item">
    //           <img src={item.image} alt={item.name} />
    //           <div className="item-details">
    //             <h3>{item.name}</h3>
    //             <p>{item.description}</p>
    //           </div>
    //           <div className="item-quantity">
    //             <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>-</button>
    //             <span>{item.quantity}</span>
    //             <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
    //           </div>
    //           <div className="item-price">${item.price * item.quantity}</div>
    //           <button className="item-remove" onClick={() => handleRemoveItem(item.id)}>🗑️</button>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="cart-details">
    //       <h2>Card Details</h2>
    //       <div className="card-types">
    //         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt="MasterCard" />
    //         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" />
    //         <img src="https://www.rupay.co.in/images/rupay-logo.png" alt="RuPay" />
    //         <button className="see-all">See all</button>
    //       </div>
    //       <input 
    //         type="text" 
    //         placeholder="Name on card" 
    //         name="cardName" 
    //         value={cardDetails.cardName} 
    //         onChange={handleCardInputChange} 
    //       />
    //       <input 
    //         type="text" 
    //         placeholder="Card Number" 
    //         name="cardNumber" 
    //         value={cardDetails.cardNumber} 
    //         onChange={handleCardInputChange} 
    //       />
    //       <div className="card-exp-cvv">
    //         <input 
    //           type="text" 
    //           placeholder="mm/yy" 
    //           name="expiryDate" 
    //           value={cardDetails.expiryDate} 
    //           onChange={handleCardInputChange} 
    //         />
    //         <input 
    //           type="text" 
    //           placeholder="CVV" 
    //           name="cvv" 
    //           value={cardDetails.cvv} 
    //           onChange={handleCardInputChange} 
    //         />
    //       </div>
    //     </div>
    //     <div className="cart-footer">
    //       <div className="cart-summary">
    //         <div>
    //           <span>Subtotal:</span>
    //           <span>${subtotal}</span>
    //         </div>
    //         <div>
    //           <span>Shipping:</span>
    //           <span>${shipping}</span>
    //         </div>
    //         <div>
    //           <span>Total:</span>
    //           <span>${total}</span>
    //         </div>
    //       </div>
    //       <button className="checkout-btn">Proceed to Checkout</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Cart;