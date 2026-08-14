const AddToCart = ({ onAddToCart }) => {
  return (
    <button
      onClick={onAddToCart}
      className="w-full h-[60px] mt-10 bg-black text-white uppercase tracking-[3px] hover:bg-gray-900 transition-all duration-300"
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;