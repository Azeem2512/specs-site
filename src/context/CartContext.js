// src/context/CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ── add item ───────────────────────────────
  const addToCart = (product) => {
    // ensure the first image is stored so Cart page can show it
    setCart([...cart, { ...product, image: product.images[0] }]);
  };

  // ── remove item ────────────────────────────
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // ── NEW: derived values ─────────────────────
  const totalPrice = cart.reduce((sum, p) => sum + p.price, 0); // subtotal
  const itemCount  = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalPrice,   // ← expose these
        itemCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
