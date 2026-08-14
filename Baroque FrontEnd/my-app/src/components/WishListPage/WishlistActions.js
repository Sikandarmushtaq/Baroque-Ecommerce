import React from "react";

const WishlistActions = ({
  onRemoveAll,
  onAddToCart,
}) => {
  return (
    <div className="flex justify-center gap-6 py-20">

      <button
        onClick={onRemoveAll}
        className="bg-[#1f1f1f] text-white
        uppercase tracking-[3px]
        text-[13px]
        px-10 h-14
        transition hover:bg-black"
      >
        Remove All
      </button>

      <button
        onClick={onAddToCart}
        className="bg-[#1f1f1f] text-white
        uppercase tracking-[3px]
        text-[13px]
        px-10 h-14
        transition hover:bg-black"
      >
        Add Wishlist Items To Cart
      </button>

    </div>
  );
};

export default WishlistActions;