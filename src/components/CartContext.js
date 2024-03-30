"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
  getTotalPrice: () => {},
  clearCart: () => {},
  getCartCount: () => {},
  getQuantity: () => {},
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item._id === product._id
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, increment the quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart([...updatedCart]);
    } else {
      // If the product is not in the cart, add it to the cart
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart([...updatedCart]);
    }

    console.log("Cart state after adding product:", cart);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item._id !== productId));
  };

  const incrementQuantity = (productId) => {
    console.log("Increment Quantity button clicked for product:", productId);

    const updatedCart = cart.map((item) => {
      if (item._id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart([...updatedCart]);
  };

  const decrementQuantity = (productId) => {
    console.log("Decrement Quantity button clicked for product:", productId);

    const updatedCart = cart.map((item) => {
      if (item._id === productId) {
        return { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 };
      }
      return item;
    });

    const filteredCart = updatedCart.filter((item) => item.quantity > 0);

    setCart([...filteredCart]);
  };

  const getTotalPrice = () => {
    console.log("Cart state for total price:", cart);

    return cart.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };
  const getQuantity = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item._id === product._id
    );

    if (existingProductIndex != -1) {
      return cart[existingProductIndex].quantity;
    }

    return null;
  };

  const clearCart = () => {
    console.log("Clear Cart button clicked");
    setCart([]);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => {
      return count + item?.quantity;
    }, 0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    getTotalPrice,
    clearCart,
    getCartCount,
    getQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { useCart, CartProvider };
