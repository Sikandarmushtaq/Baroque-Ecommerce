import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const LoginPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/50 z-[9998]" />

      <div className="fixed left-1/2 top-1/2 z-[9999] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded bg-white p-10 shadow-2xl">
        <button onClick={onClose} className="absolute right-5 top-5">
          <IoClose size={28} />
        </button>

        <h2 className="text-center text-3xl font-light tracking-[4px] uppercase">
          Login Required
        </h2>

        <p className="mt-6 text-center text-gray-500">
          Please login or create an account to add products to your wishlist.
        </p>

        <div className="mt-12 space-y-4">
          <Link to="/login">
            <button
              onClick={onClose}
              className="w-full bg-black py-4 text-white uppercase tracking-[3px]"
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
