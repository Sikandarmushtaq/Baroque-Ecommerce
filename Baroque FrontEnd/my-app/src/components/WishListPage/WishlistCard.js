import React from "react";
import { IoClose } from "react-icons/io5";

const WishlistCard = ({ image, title, price, onRemove }) => {
  // console.log("image:", image);

  return (
    <div>
    
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-auto"
        />

       
        <button
          onClick={onRemove}
          className="absolute flex items-center justify-center w-8 h-8 transition bg-white rounded-full shadow-md top-2 left-2 sm:top-3 sm:left-3 sm:w-11 sm:h-11 hover:scale-110"
        >
          <IoClose size={16} className="sm:hidden" />
          <IoClose size={24} className="hidden sm:block" />
        </button>
      </div>

     
      <div className="mt-3 text-center sm:mt-6">
        <h2 className="text-xs sm:text-[15px] font-semibold uppercase tracking-wide truncate">
          {title}
        </h2>

        <p className="mt-1.5 sm:mt-3 text-sm sm:text-[20px]">
          PKR {price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default WishlistCard;