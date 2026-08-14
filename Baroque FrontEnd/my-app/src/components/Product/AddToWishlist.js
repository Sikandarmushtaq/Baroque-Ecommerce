import { FiHeart } from "react-icons/fi";

const AddToWishlist = ({ onAddToWishlist }) => {
  return (
    <button
      onClick={onAddToWishlist}
      className="w-full h-[60px] mt-5 border border-black flex items-center justify-center gap-3 uppercase tracking-[3px] hover:bg-black hover:text-white transition-all duration-300"
    >
      <FiHeart size={20} />
      Add To Wishlist
    </button>
  );
};

export default AddToWishlist;