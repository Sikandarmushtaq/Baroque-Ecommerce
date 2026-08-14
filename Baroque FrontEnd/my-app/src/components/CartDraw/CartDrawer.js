import React, { useEffect, useState } from "react";
import axios from "axios";

import CartHeader from "./CartHeader";
import ShippingBanner from "../CheckoutPage/ShippingBanner";
import CartList from "./CartList";
import CartFooter from "./CartFooter";

const CartDrawer = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  const token = localStorage.getItem("token");

  const fetchCart = async () => {
    if (token) {
      try {
        const response = await axios.get(
          "https://baroque-ecommerce.onrender.com/cart/getcart",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (response.data.status === "success") {
          setCartItems(response.data.cart.products);
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(cart);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchCart();
    }
  }, [isOpen]);

  const handleIncrease = async (id, quantity) => {
    if (token) {
      try {
        await axios.put(
          `https://baroque-ecommerce.onrender.com/cart/updatecart/${id}`,
          {
            quantity: quantity + 1,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );

        fetchCart();
      } catch (error) {
        console.log(error.message);
      }
    } else {
      const updatedCart = cartItems.map((item) => {
        if (item.productId === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }
  };

  const handleDecrease = async (id, quantity) => {
    if (quantity <= 1) {
      return;
    }

    if (token) {
      try {
        await axios.put(
          `https://baroque-ecommerce.onrender.com/cart/updatecart/${id}`,
          {
            quantity: quantity - 1,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );

        fetchCart();
      } catch (error) {
        console.log(error.message);
      }
    } else {
      const updatedCart = cartItems.map((item) => {
        if (item.productId === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      });

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }
  };

  const handleRemove = async (id) => {
    if (token) {
      try {
        await axios.delete(
          `https://baroque-ecommerce.onrender.com/cart/removecart/${id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        fetchCart();
      } catch (error) {
        console.log(error.message);
      }
    } else {
      const updatedCart = cartItems.filter(
        (item) => item.productId !== id
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 z-[10001] flex h-screen w-[430px] flex-col bg-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <CartHeader onClose={onClose} />

      <ShippingBanner />

      <CartList
        cartItems={cartItems}
        onRemove={handleRemove}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />

      <CartFooter cartItems={cartItems} />
    </div>
  );
};

export default CartDrawer;