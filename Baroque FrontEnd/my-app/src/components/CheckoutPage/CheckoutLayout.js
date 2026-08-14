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

  <div className="py-6 border-b">
    <img
      src={logo}
      alt="logo"
      className="w-40 mx-auto"
    />
  </div>


  <div className="max-w-[1500px] mx-auto grid grid-cols-12 items-start">


    <div className="col-span-7 px-10 py-10">
      <CheckoutLeft
        address={address}
        setAddress={setAddress}
        cartItems={cartItems}
        totalPrice={totalPrice}
      />
    </div>


    <div className="col-span-5 border-l bg-[#fafafa] sticky top-0 self-start h-screen overflow-hidden p-10">
      <CheckoutRight />
    </div>

  </div>
</div>
  );
};

export default CheckoutLayout;