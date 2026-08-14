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
        className={`fixed top-0 left-0 h-screen bg-white shadow-xl transition-all duration-500 ${
          isOpen ? "translate-x-0 z-[60]" : "-translate-x-full"
        }`}
        style={{
          width: activeMenu ? "850px" : "400px",
        }}
      >
        <div className="relative h-20 border-b">
          <button
            onClick={() => {
              setActiveMenu(null);
              onClose();
            }}
            className="absolute transition cursor-pointer top-9 right-8 hover:text-red-600"
          >
            <FiX size={30} />
          </button>
        </div>

        <div className="flex h-[calc(100vh-88px)]">
          <div className="w-[400px] border-r">
            <MenuList
              menuData={menuData}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          </div>

          {activeMenu && (
            <div className="w-[450px] bg-white border-l animate-fade">
              <SubMenu activeMenu={activeMenu} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideMenu;
