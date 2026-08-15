import logo from "../../images/homelogo/LOGO.avif";
import { IoArrowForward } from "react-icons/io5";
import axios from "axios";

import { useState } from "react";
import { useNavigate,} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
const navigate = useNavigate();
const handleLogin = async () => {
  try {
    const response = await axios.post(
      "https://baroque-ecommerce.onrender.com/users/login",
      {
        email: email,
      }
    );

    if (response.data.status === "success") {
        localStorage.setItem("email", email);
           navigate("/verification", {
        state: { email: email },  
      }); 
  
    } else {
      alert(response.data.message);
    }
  } catch (err) {
    alert("Server Error");
  }
};

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f7f7f7] px-4">

    
      <div className="mt-8 sm:mt-12">
        <img
          src={logo}
          alt="Baroque"
          className="object-contain w-32 sm:w-44"
        />
      </div>

   
      <div className="mt-14 sm:mt-24 w-full max-w-[380px]">

        <h1 className="text-3xl font-semibold sm:text-5xl">Sign in</h1>

        <p className="mt-3 text-sm text-gray-600 sm:text-[17px]">
          Sign in or create an account
        </p>

     

        <div className="flex items-center my-6 sm:my-8">
          <div className="h-[1px] flex-1 bg-gray-300"></div>

          <span className="mx-4 text-sm text-gray-500 sm:mx-5 sm:text-base">or</span>

          <div className="h-[1px] flex-1 bg-gray-300"></div>
        </div>


        <div className="relative">
<input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full h-12 px-4 text-base bg-transparent border-2 border-black rounded-md outline-none sm:h-14 sm:text-lg pr-14"
/>
<button
  onClick={handleLogin}
  className="absolute -translate-y-1/2 right-5 top-1/2"
>
  <IoArrowForward className="text-xl sm:text-2xl" />
  
</button>
        </div>

    

        <div className="flex items-center gap-3 mt-6">

          <input
            type="checkbox"
            defaultChecked
            className="w-5 h-5 accent-black"
          />

          <p className="text-sm sm:text-[17px]">
            Email me with news and offers
          </p>

        </div>

     

        <p className="mt-8 text-sm text-center text-gray-500 sm:mt-10">
          By continuing, you agree to our{" "}
          <span className="underline cursor-pointer">
            Terms of service
          </span>
        </p>

      </div>

   

      <div className="py-6 mt-auto sm:py-8">
        <p className="cursor-pointer text-sm sm:text-[15px] underline">
          Privacy policy
        </p>
      </div>

    </div>
  );
};

export default Login;