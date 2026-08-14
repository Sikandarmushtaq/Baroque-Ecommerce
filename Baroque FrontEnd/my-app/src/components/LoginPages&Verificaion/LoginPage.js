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
    <div className="flex min-h-screen flex-col items-center bg-[#f7f7f7]">

    
      <div className="mt-12">
        <img
          src={logo}
          alt="Baroque"
          className="object-contain w-44"
        />
      </div>

   
      <div className="mt-24 w-full max-w-[380px]">

        <h1 className="text-5xl font-semibold">Sign in</h1>

        <p className="mt-3 text-[17px] text-gray-600">
          Sign in or create an account
        </p>

     

        <div className="flex items-center my-8">
          <div className="h-[1px] flex-1 bg-gray-300"></div>

          <span className="mx-5 text-gray-500">or</span>

          <div className="h-[1px] flex-1 bg-gray-300"></div>
        </div>


        <div className="relative">
<input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full px-4 text-lg bg-transparent border-2 border-black rounded-md outline-none h-14 pr-14"
/>
<button
  onClick={handleLogin}
  className="absolute -translate-y-1/2 right-5 top-1/2"
>
  <IoArrowForward className="text-2xl" />
  
</button>
        </div>

    

        <div className="flex items-center gap-3 mt-6">

          <input
            type="checkbox"
            defaultChecked
            className="w-5 h-5 accent-black"
          />

          <p className="text-[17px]">
            Email me with news and offers
          </p>

        </div>

     

        <p className="mt-10 text-sm text-center text-gray-500">
          By continuing, you agree to our{" "}
          <span className="underline cursor-pointer">
            Terms of service
          </span>
        </p>

      </div>

   

      <div className="py-8 mt-auto">
        <p className="cursor-pointer text-[15px] underline">
          Privacy policy
        </p>
      </div>

    </div>
  );
};

export default Login; 