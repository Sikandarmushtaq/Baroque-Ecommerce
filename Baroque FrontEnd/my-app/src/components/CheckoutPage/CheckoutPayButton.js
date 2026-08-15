import axios from "axios";

const CheckoutPayButton = ({
  address,
  cartItems,
  totalPrice,
}) => {
  const handlePayNow = async () => {
    try {
    
      if (!cartItems || cartItems.length === 0) {
        alert("Your cart is empty");
        return;
      }

      if (!address.address || !address.city || !address.phone) {
        alert("Please complete your shipping address");
        return;
      }

    
      const token = localStorage.getItem("token");

    
      const response = await axios.post(
        "https://baroque-ecommerce.onrender.com/order/createorder",
        {
          products: cartItems,
          totalPrice: totalPrice,
          shippingAddress: address,
        },
        token
          ? {
              headers: {
                Authorization: token,
              },
            }
          : {}
      );

      console.log("CREATE ORDER RESPONSE:", response.data);

     
      if (response.data.status === "success") {
        window.location.href = response.data.checkoutURL;
      } else {
        alert(
          response.data.message ||
            "Payment start nahi ho saki"
        );
      }
    } catch (error) {
      console.log("FULL PAYMENT ERROR:", error);
      console.log("RESPONSE:", error.response?.data);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Payment start nahi ho saki"
      );
    }
  };

  return (
    <button
      onClick={handlePayNow}
      className="w-full py-3.5 sm:py-4 bg-black text-white text-xs sm:text-sm tracking-[1.5px] sm:tracking-[2px] hover:bg-gray-800 transition"
    >
      Pay Now
    </button>
  );
};

export default CheckoutPayButton;