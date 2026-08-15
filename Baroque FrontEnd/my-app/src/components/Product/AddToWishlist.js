import { FiHeart } from "react-icons/fi";

const AddToWishlist = ({ onAddToWishlist }) => {
  return (
    <button
      onClick={onAddToWishlist}
      className="w-full h-12 sm:h-[60px] mt-4 sm:mt-5 border border-black flex items-center justify-center gap-2 sm:gap-3 uppercase tracking-[2px] sm:tracking-[3px] text-sm sm:text-base hover:bg-black hover:text-white transition-all duration-300"
    >
      <FiHeart size={18} className="sm:hidden" />
      <FiHeart size={20} className="hidden sm:block" />
      Add To Wishlist
    </button>
  );
};

export default AddToWishlist;