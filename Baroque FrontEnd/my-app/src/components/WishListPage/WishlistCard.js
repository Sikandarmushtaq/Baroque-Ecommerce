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
          className="absolute flex items-center justify-center transition bg-white rounded-full shadow-md top-3 left-3 w-11 h-11 hover:scale-110"
        >
          <IoClose size={24} />
        </button>
      </div>

     
      <div className="mt-6 text-center">
        <h2 className="text-[15px] font-semibold uppercase tracking-wide">
          {title}
        </h2>

        <p className="mt-3 text-[20px]">
          PKR {price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default WishlistCard;