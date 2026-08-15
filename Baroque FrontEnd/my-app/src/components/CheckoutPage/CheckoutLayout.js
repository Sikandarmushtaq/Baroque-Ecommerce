import React, { useEffect, useState } from "react";
import CheckoutLeft from "./CheckoutLeft";
import CheckoutRight from "./CheckoutRight";
import logo from "../../images/homelogo/LOGO.avif";


const CheckoutLayout = () => {
  const [address, setAddress] = useState({
    country: "Pakistan",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const [cartItems, setCartItems] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const loadCart = async () => {
      try {
      
        if (token) {
          const response = await fetch(
            "https://baroque-ecommerce.onrender.com/cart/getcart",
            {
              headers: {
                Authorization: token,
              },
            }
          );

          const data = await response.json();

          if (data.status === "success") {
            setCartItems(data.cart.products || []);
          }

          return;
        }

     
        const localCart =
          JSON.parse(localStorage.getItem("cart")) || [];

        setCartItems(localCart);
      } catch (error) {
        console.log("Cart load error:", error);
      }
    };

    loadCart();
  }, [token]);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      Number(item.price) * Number(item.quantity),
    0
  );

  return (
  <div>

  <div className="py-4 border-b sm:py-6">
    <img
      src={logo}
      alt="logo"
      className="w-32 mx-auto sm:w-40"
    />
  </div>


  <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-start">


    <div className="px-4 py-6 sm:px-10 sm:py-10 lg:col-span-7">
      <CheckoutLeft
        address={address}
        setAddress={setAddress}
        cartItems={cartItems}
        totalPrice={totalPrice}
      />
    </div>


    <div className="p-4 border-t sm:p-10 lg:border-t-0 lg:border-l bg-[#fafafa] lg:sticky lg:top-0 lg:self-start lg:h-screen overflow-hidden lg:col-span-5">
      <CheckoutRight />
    </div>

  </div>
</div>
  );
};

export default CheckoutLayout;