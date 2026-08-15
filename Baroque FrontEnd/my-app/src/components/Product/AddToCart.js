const AddToCart = ({ onAddToCart }) => {
  return (
    <button
      onClick={onAddToCart}
      className="w-full h-12 sm:h-[60px] mt-6 sm:mt-10 bg-black text-white uppercase tracking-[2px] sm:tracking-[3px] text-sm sm:text-base hover:bg-gray-900 transition-all duration-300"
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;