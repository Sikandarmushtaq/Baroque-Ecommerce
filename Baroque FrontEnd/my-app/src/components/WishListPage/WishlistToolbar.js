import React, { useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const WishlistToolbar = () => {
  const [active, setActive] = useState("grid");

  return (
    <div className="flex justify-center py-12">
      <div className="flex gap-4">

        <button
          onClick={() => setActive("two")}
          className={`w-14 h-14 rounded-xl border flex items-center justify-center transition
          ${
            active === "two"
              ? "border-black border-2"
              : "border-gray-300"
          }`}
        >
          <HiOutlineViewGrid size={22} />
        </button>

        <button
          onClick={() => setActive("grid")}
          className={`w-14 h-14 rounded-xl border flex items-center justify-center transition
          ${
            active === "grid"
              ? "border-black border-2"
              : "border-gray-300"
          }`}
        >
          <BsGrid3X3GapFill size={20} />
        </button>

        <button
          onClick={() => setActive("list")}
          className={`w-14 h-14 rounded-xl border flex items-center justify-center transition
          ${
            active === "list"
              ? "border-black border-2"
              : "border-gray-300"
          }`}
        >
          <RxHamburgerMenu size={22} />
        </button>

      </div>
    </div>
  );
};

export default WishlistToolbar;