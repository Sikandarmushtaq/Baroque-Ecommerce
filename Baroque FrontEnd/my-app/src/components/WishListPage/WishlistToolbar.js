import React, { useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const WishlistToolbar = () => {
  const [active, setActive] = useState("grid");

  return (
    <div className="flex justify-center py-6 sm:py-12">
      <div className="flex gap-3 sm:gap-4">

        <button
          onClick={() => setActive("two")}
          className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl border flex items-center justify-center transition
          ${
            active === "two"
              ? "border-black border-2"
              : "border-gray-300"
          }`}
        >
          <HiOutlineViewGrid size={18} className="sm:hidden" />
          <HiOutlineViewGrid size={22} className="hidden sm:block" />
        </button>

        <button
          onClick={() => setActive("grid")}
          className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl border flex items-center justify-center transition
          ${
            active === "grid"
              ? "border-black border-2"
              : "border-gray-300"
          }`}
        >
          <BsGrid3X3GapFill size={16} className="sm:hidden" />
          <BsGrid3X3GapFill size={20} className="hidden sm:block" />
        </button>

        <button
          onClick={() => setActive("list")}
          className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl border flex items-center justify-center transition
          ${
            active === "list"
              ? "border-black border-2"
              : "border-gray-300"
          }`}
        >
          <RxHamburgerMenu size={18} className="sm:hidden" />
          <RxHamburgerMenu size={22} className="hidden sm:block" />
        </button>

      </div>
    </div>
  );
};

export default WishlistToolbar;