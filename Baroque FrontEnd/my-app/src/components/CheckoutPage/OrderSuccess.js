import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
       
        const params = new URLSearchParams(
          window.location.search
        );

        const tracker = params.get("tracker");

        if (!tracker) {
          setMessage("Payment tracker nahi mila.");
          setLoading(false);
          return;
        }

       
        const response = await axios.post(
          "https://baroque-ecommerce.onrender.com/order/verifypayment",
          {
            tracker: tracker,
          }
        );

        if (response.data.status === "success") {
         
          localStorage.removeItem("cart");

          setMessage(
            "Payment successful. Your order has been placed."
          );
        } else {
          setMessage(response.data.message);
        }
      } catch (error) {
        console.log(
          "Payment verification error:",
          error
        );

        setMessage(
          error.response?.data?.message ||
            "Payment verify nahi ho saki."
        );
      }

      setLoading(false);
    };

    verifyPayment();
  }, []);


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-500">
          Verifying payment...
        </p>
      </div>
    );
  }

  const success =
    message.includes("successful");

  return (
    <div className="flex items-center justify-center min-h-screen px-5">

      <div className="text-center">

        <h1 className="mb-4 text-4xl font-light">
          {success
            ? "Order Confirmed"
            : "Payment Status"}
        </h1>

        <p className="mb-8 text-gray-500">
          {message}
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-4 text-white bg-black hover:bg-gray-800"
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
};

export default OrderSuccess;