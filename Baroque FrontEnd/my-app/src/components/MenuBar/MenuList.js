import { FiChevronRight } from "react-icons/fi";

const MenuList = ({ menuData, activeMenu, setActiveMenu }) => {
  return (
    <div className="h-full overflow-y-auto border-r">
      <div className="px-10 py-8">
        {menuData.map((item) => (
         <div
    key={item.title}
    onClick={() => setActiveMenu(item)}
            className={`flex items-center justify-between py-6 border-b cursor-pointer transition-all duration-200 ${
              activeMenu?.title === item.title
                ? "text-red-600"
                : "text-black hover:text-red-600"
            }`}
          >
            <span className="tracking-[3px] uppercase text-sm font-medium">
              {item.title}
            </span>

            {item.submenu?.length > 0 && <FiChevronRight size={18} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;