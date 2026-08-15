import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const LoginPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/50 z-[9998]" />

      <div className="fixed left-1/2 top-1/2 z-[9999] w-[90%] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded bg-white p-6 sm:p-10 shadow-2xl">
        <button onClick={onClose} className="absolute right-4 top-4 sm:right-5 sm:top-5">
          <IoClose size={22} className="sm:hidden" />
          <IoClose size={28} className="hidden sm:block" />
        </button>

        <h2 className="text-center text-xl sm:text-3xl font-light tracking-[2px] sm:tracking-[4px] uppercase">
          Login Required
        </h2>

        <p className="mt-4 text-sm text-center text-gray-500 sm:mt-6 sm:text-base">
          Please login or create an account to add products to your wishlist.
        </p>

        <div className="mt-8 space-y-4 sm:mt-12">
          <Link to="/login">
            <button
              onClick={onClose}
              className="w-full bg-black py-3 sm:py-4 text-sm sm:text-base text-white uppercase tracking-[2px] sm:tracking-[3px]"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;