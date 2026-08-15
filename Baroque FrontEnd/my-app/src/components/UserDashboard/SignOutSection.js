import React from "react";
import { useNavigate } from "react-router-dom";

const SignOutSection = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <section className="mb-10 sm:mb-16">
      <h2 className="mb-4 text-base font-semibold sm:mb-0 sm:text-[18px]">Account</h2>

      <div className="p-5 mt-0 bg-white border sm:p-8 sm:mt-4 rounded-2xl">
        <button
          onClick={handleSignOut}
          className="w-full px-6 py-2.5 text-sm transition border rounded-full sm:w-auto sm:py-2 sm:text-base hover:bg-black hover:text-white"
        >
          Sign Out
        </button>
      </div>
    </section>
  );
};

export default SignOutSection;