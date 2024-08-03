import React, { createContext, useState } from 'react';


export const ManageCartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});


  const addToCart = (item) => {
    setCartItems(prevItems => {
        const updatedItems = { ...prevItems };
      if (updatedItems[item.id]) {
        updatedItems[item.id].quantity += 1;
      } else {
        updatedItems[item.id] = { ...item, quantity: 1 };
      }
      return updatedItems;
    });
  };


  const removeFromCart = (id) => {
    setCartItems(prevItems => {
      const { [id]: _, ...rest } = prevItems;
      return rest;
    });
  };




  const updateQuantity = (id, quantity) => {
    setCartItems(prevItems => {
      const updatedItems = { ...prevItems };
      if (updatedItems[id]) {
        updatedItems[id].quantity = quantity;
        if (updatedItems[id].quantity <= 0) {
          delete updatedItems[id];
        }
      }
      return updatedItems;
    });
  };



  return (
    <ManageCartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </ManageCartContext.Provider>
  );
};