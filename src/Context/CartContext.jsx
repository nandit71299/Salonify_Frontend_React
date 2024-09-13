import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prev) => {
      return prev + 1;
    });
  };
  const removeFromCart = () => {
    setCartCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
