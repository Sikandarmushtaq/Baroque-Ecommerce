import React, { useRef, useState } from "react";
import logo from "../../images/homelogo/LOGO.avif";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [password, setPassword] = useState("");
  const inputRefs = useRef([]);

  const email = localStorage.getItem("email");

  const mergeGuestCart = async (token) => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (localCart.length > 0) {
      try {
        await axios.post(
          "https://baroque-ecommerce.onrender.com/cart/mergecart",
          {
            localCart: localCart,
          },
          {
            headers: {
              Authorization: token,
            },
          },
        );

        localStorage.removeItem("cart");
      } catch (error) {
        console.log("Cart merge nahi hua:", error.message);
      }
    }
  };

  const handleLogin = async () => {
    const enteredOtp = otp.join("");

    if (!enteredOtp && !password) {
      alert("OTP ya Password mein se koi ek bharein");
      return;
    }

    try {
      let response;

      if (enteredOtp) {
        response = await axios.post(
          "https://baroque-ecommerce.onrender.com/users/verifyotp",
          {
            email: email,
            otp: enteredOtp,
          },
        );
      } else {
        response = await axios.post(
          "https://baroque-ecommerce.onrender.com/users/loginwithpassword",
          {
            email: email,
            password: password,
          },
        );
      }

      if (response.data.status === "success") {
        const token = response.data.token;

        localStorage.setItem("token", token);

        await mergeGuestCart(token);

        alert("Login successful");
        navigate("/userDashboard");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("Server Error");
       setPassword("");
    }
  };

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];

    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="flex flex-col min-h-screen px-4">
      <div className="flex justify-center mt-6 sm:mt-8">
        <img src={logo} alt="Logo" className="w-28 sm:w-32" />
      </div>

      <div className="w-full max-w-md mx-auto mt-14 sm:mt-24">
        <h1 className="text-3xl font-semibold text-black sm:text-[44px]">Enter code</h1>

        <p className="mt-3 text-sm text-gray-600 sm:text-[17px]">Sent to {email}</p>

        <p className="mt-1 text-xs tracking-[1.5px] sm:tracking-[2px] uppercase text-gray-400">
          Use OTP or Password
        </p>

        <div className="flex justify-between mt-8 gap-1.5 sm:gap-0">
          <input
            ref={(input) => (inputRefs.current[0] = input)}
            type="text"
            maxLength={1}
            value={otp[0]}
            onChange={(e) => handleOtpChange(e.target.value, 0)}
            className="w-10 h-12 text-xl font-semibold text-center border border-gray-300 rounded-lg sm:w-12 sm:text-2xl sm:h-14 focus:outline-none focus:border-black"
          />

          <input
            ref={(input) => (inputRefs.current[1] = input)}
            type="text"
            maxLength={1}
            value={otp[1]}
            onChange={(e) => handleOtpChange(e.target.value, 1)}
            className="w-10 h-12 text-xl font-semibold text-center border border-gray-300 rounded-lg sm:w-12 sm:text-2xl sm:h-14 focus:outline-none focus:border-black"
          />

          <input
            ref={(input) => (inputRefs.current[2] = input)}
            type="text"
            maxLength={1}
            value={otp[2]}
            onChange={(e) => handleOtpChange(e.target.value, 2)}
            className="w-10 h-12 text-xl font-semibold text-center border border-gray-300 rounded-lg sm:w-12 sm:text-2xl sm:h-14 focus:outline-none focus:border-black"
          />

          <input
            ref={(input) => (inputRefs.current[3] = input)}
            type="text"
            maxLength={1}
            value={otp[3]}
            onChange={(e) => handleOtpChange(e.target.value, 3)}
            className="w-10 h-12 text-xl font-semibold text-center border border-gray-300 rounded-lg sm:w-12 sm:text-2xl sm:h-14 focus:outline-none focus:border-black"
          />

          <input
            ref={(input) => (inputRefs.current[4] = input)}
            type="text"
            maxLength={1}
            value={otp[4]}
            onChange={(e) => handleOtpChange(e.target.value, 4)}
            className="w-10 h-12 text-xl font-semibold text-center border border-gray-300 rounded-lg sm:w-12 sm:text-2xl sm:h-14 focus:outline-none focus:border-black"
          />

          <input
            ref={(input) => (inputRefs.current[5] = input)}
            type="text"
            maxLength={1}
            value={otp[5]}
            onChange={(e) => handleOtpChange(e.target.value, 5)}
            className="w-10 h-12 text-xl font-semibold text-center border border-gray-300 rounded-lg sm:w-12 sm:text-2xl sm:h-14 focus:outline-none focus:border-black"
          />
        </div>

        <div className="flex items-center gap-4 my-6 sm:my-7">
          <div className="h-[1px] flex-1 bg-gray-200"></div>
          <span className="text-xs sm:text-[13px] tracking-[1.5px] sm:tracking-[2px] uppercase text-gray-400">
            Or
          </span>
          <div className="h-[1px] flex-1 bg-gray-200"></div>
        </div>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg outline-none sm:text-lg sm:h-14 focus:border-black"
        />

        <button
          onClick={handleLogin}
          className="w-full h-12 mt-8 text-base text-white transition bg-black rounded-lg sm:text-lg sm:h-14 hover:bg-gray-800"
        >
          Login
        </button>
      </div>

      <div className="mt-auto mb-6 text-center">
        <button className="text-sm sm:text-[15px] underline hover:text-gray-600">
          Privacy policy
        </button>
      </div>
    </div>
  );
};

export default Verification;