import React, { useEffect, useState } from "react";
import axios from "axios";
import { products } from "../Product/ProductData";

const CheckoutRight = () => {
  const [cartItems, setCartItems] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const loadCart = async () => {
      try {
      
        if (token) {
          const response = await axios.get(
            "https://baroque-ecommerce.onrender.com/cart/getcart",
            {
              headers: {
                Authorization: token,
              },
            }
          );

          if (response.data.status === "success") {
            setCartItems(response.data.cart.products || []);
          }

          return;
        }

    
        const localCart =
          JSON.parse(localStorage.getItem("cart")) || [];

        setCartItems(localCart);
      } catch (error) {
        console.log("Checkout cart error:", error);
      }
    };

    loadCart();
  }, [token]);

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * Number(item.quantity),
    0
  );

  return (
    <div>
   

      {cartItems.map((item) => {
        const product = products.find(
          (p) => String(p.id) === String(item.productId)
        );

        return (
          <div
            key={item._id || item.productId}
            className="flex gap-3 mb-6 sm:gap-4 sm:mb-8"
          >
          
            <div className="relative flex-shrink-0">
              <img
                src={product?.image || item.image}
                alt={item.name}
                className="object-cover w-16 h-20 border rounded-lg sm:w-20 sm:h-24"
              />

              {item.quantity}
            </div>

         
            <div className="flex-1 min-w-0">
              <h3 className="text-sm uppercase truncate">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500">
                {item.type}
              </p>
            </div>

         
            <p className="flex-shrink-0 text-sm">
              Rs {Number(item.price).toLocaleString()}
            </p>
          </div>
        );
      })}

   

      <div className="flex flex-col gap-3 my-6 sm:flex-row sm:my-8">
        <input
          type="text"
          placeholder="Discount code or gift card"
          className="flex-1 px-4 py-3 text-sm border outline-none sm:py-4 sm:text-base rounded-xl"
        />

        <button className="py-3 border sm:py-0 px-7 rounded-xl">
          Apply
        </button>
      </div>

   

      <div className="space-y-4 sm:space-y-5">
        <div className="flex justify-between text-sm sm:text-base">
          <span>Subtotal</span>

          <span>
            Rs {subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between text-sm sm:text-base">
          <span>Shipping</span>
          <span>FREE</span>
        </div>

        <div className="flex justify-between pt-5 text-xl font-semibold border-t sm:text-2xl">
          <span>Total</span>

          <span>
            Rs {subtotal.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutRight;