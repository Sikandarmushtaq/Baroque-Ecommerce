import React from "react";
import { useNavigate } from "react-router-dom";

const SignOutSection = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <section className="mb-16">
      <h2 className="text-[18px] font-semibold">Account</h2>

      <div className="p-8 bg-white border rounded-2xl">
        <button
          onClick={handleSignOut}
          className="px-6 py-2 transition border rounded-full hover:bg-black hover:text-white"
        >
          Sign Out
        </button>
      </div>
    </section>
  );
};

export default SignOutSection;
