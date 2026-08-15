import React from "react";

const WishlistActions = ({
  onRemoveAll,
  onAddToCart,
}) => {
  return (
    <div className="flex flex-col justify-center gap-3 px-4 py-10 sm:flex-row sm:gap-6 sm:py-20">

      <button
        onClick={onRemoveAll}
        className="bg-[#1f1f1f] text-white
        uppercase tracking-[2px] sm:tracking-[3px]
        text-xs sm:text-[13px]
        px-6 sm:px-10 h-12 sm:h-14
        transition hover:bg-black"
      >
        Remove All
      </button>

      <button
        onClick={onAddToCart}
        className="bg-[#1f1f1f] text-white
        uppercase tracking-[2px] sm:tracking-[3px]
        text-xs sm:text-[13px]
        px-6 sm:px-10 h-12 sm:h-14
        transition hover:bg-black"
      >
        Add Wishlist Items To Cart
      </button>

    </div>
  );
};

export default WishlistActions;