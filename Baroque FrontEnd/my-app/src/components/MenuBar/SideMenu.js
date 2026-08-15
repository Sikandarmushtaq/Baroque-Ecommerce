import { useState } from "react";
import { FiX } from "react-icons/fi";

import MenuList from "./MenuList";
import SubMenu from "./subMenu";
import { menuData } from "./MenuData";

const SideMenu = ({ isOpen, onClose }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible z-50" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-xl transition-all duration-500 w-full sm:w-auto ${
          isOpen ? "translate-x-0 z-[60]" : "-translate-x-full"
        }`}
        style={{
          width:
            window.innerWidth < 640
              ? "100%"
              : activeMenu
              ? "850px"
              : "400px",
        }}
      >
        <div className="relative h-16 border-b sm:h-20">
          <button
            onClick={() => {
              setActiveMenu(null);
              onClose();
            }}
            className="absolute transition cursor-pointer top-6 right-5 sm:top-9 sm:right-8 hover:text-red-600"
          >
            <FiX size={24} className="sm:hidden" />
            <FiX size={30} className="hidden sm:block" />
          </button>
        </div>

        <div className="flex h-[calc(100vh-64px)] sm:h-[calc(100vh-88px)]">
          {!activeMenu && (
            <div className="w-full sm:w-[400px] border-r">
              <MenuList
                menuData={menuData}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
            </div>
          )}

          {activeMenu && (
            <>
              <div className="hidden sm:block sm:w-[400px] border-r">
                <MenuList
                  menuData={menuData}
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                />
              </div>

              <div className="w-full sm:w-[450px] bg-white border-l animate-fade">
                <SubMenu activeMenu={activeMenu} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SideMenu;