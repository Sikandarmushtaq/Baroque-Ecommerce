import { FiChevronRight } from "react-icons/fi";

const MenuList = ({ menuData, activeMenu, setActiveMenu }) => {
  return (
    <div className="h-full overflow-y-auto border-r">
      <div className="px-4 py-5 sm:px-10 sm:py-8">
        {menuData.map((item) => (
         <div
    key={item.title}
    onClick={() => setActiveMenu(item)}
            className={`flex items-center justify-between py-4 sm:py-6 border-b cursor-pointer transition-all duration-200 ${
              activeMenu?.title === item.title
                ? "text-red-600"
                : "text-black hover:text-red-600"
            }`}
          >
            <span className="tracking-[2px] sm:tracking-[3px] uppercase text-xs sm:text-sm font-medium">
              {item.title}
            </span>

            {item.submenu?.length > 0 && <FiChevronRight size={16} className="sm:hidden" />}
            {item.submenu?.length > 0 && <FiChevronRight size={18} className="hidden sm:block" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;