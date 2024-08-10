import React, { createContext, useState } from 'react';

export const ManageCartContext = createContext();

export const CartProvider = ({ children }) => {
  // Cart items stored in an object with product IDs as keys
  const [cartItems, setCartItems] = useState({});

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems(prevItems => {
      const updatedItems = { ...prevItems };
      if (updatedItems[item.id]) {
        // Increase quantity if item already in cart
        updatedItems[item.id].quantity += 1;
      } else {
        // Add new item to cart with quantity 1
        updatedItems[item.id] = { ...item, quantity: 1 };
      }
      return updatedItems;
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems(prevItems => {
      const { [id]: _, ...rest } = prevItems;
      return rest;
    });
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (id, quantity) => {
    setCartItems(prevItems => {
      const updatedItems = { ...prevItems };
      if (updatedItems[id]) {
        updatedItems[id].quantity = quantity;
        if (updatedItems[id].quantity <= 0) {
          // Remove item if quantity is 0 or less
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