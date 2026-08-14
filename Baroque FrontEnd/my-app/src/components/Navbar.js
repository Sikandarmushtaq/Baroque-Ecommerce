import { useEffect, useState } from "react";
import { FiSearch, FiUser, FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMenuOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import LoginPopup from "./WishListPage/LoginPopup";
import TopBar from "./TopBar";

import logo from "../images/homelogo/LOGO.avif";
import CartDrawer from "./CartDraw/CartDrawer";
import SideMenu from "./MenuBar/SideMenu";

const Navbar = ({ blackIcons = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOpenCart = () => {
      setIsCartOpen(true);
    };

    window.addEventListener("openCart", handleOpenCart);

    return () => {
      window.removeEventListener("openCart", handleOpenCart);
    };
  }, []);
  useEffect(() => {
    const handleOpenLoginPopup = () => {
      setIsLoginPopupOpen(true);
    };

    window.addEventListener("openLoginPopup", handleOpenLoginPopup);

    return () => {
      window.removeEventListener("openLoginPopup", handleOpenLoginPopup);
    };
  }, []);
  const handleUserIconClick = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/userDashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
     {!scrolled && <TopBar />}
      <nav
        className={`fixed left-0 w-full z-40 flex items-center justify-between px-8 py-5 transition-all duration-300
    ${!isCartOpen && !isMenuOpen ? "hover:bg-white hover:text-black" : ""}
    ${
      scrolled
        ? "top-0 bg-white shadow-md text-black"
        : `top-8 bg-transparent ${blackIcons ? "text-black" : "text-white"}`
    }
  `}
      >
        <IoMenuOutline
          className="text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        />

        <img
          src={logo}
          alt="Logo"
          className="absolute w-32 -translate-x-1/2 left-1/2"
        />

        <div className="flex items-center gap-5 ml-auto">
          <select className="text-sm uppercase bg-transparent outline-none cursor-pointer">
            <option className="text-black">Pakistan</option>
          </select>

          <button onClick={handleUserIconClick}>
            <FiUser className="text-xl cursor-pointer" />
          </button>
          <FiSearch className="text-xl cursor-pointer" />

          <HiOutlineShoppingBag
            className="text-xl cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          />

          <FiHeart
            className="text-xl cursor-pointer"
            onClick={() => {
              const token = localStorage.getItem("token");

              if (!token) {
                window.dispatchEvent(new Event("openLoginPopup"));
                return;
              }

              navigate("/wishlist");
            }}
          />
        </div>
      </nav>

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={() => setIsLoginPopupOpen(false)}
      />
    </>
  );
};

export default Navbar;
