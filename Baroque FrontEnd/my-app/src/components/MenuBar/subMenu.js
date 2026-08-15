import { Link } from "react-router-dom";

const SubMenu = ({ activeMenu }) => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="px-5 py-6 sm:px-10 sm:py-8">
        <h2 className="mb-6 text-lg font-semibold tracking-[1.5px] uppercase sm:mb-8 sm:text-xl sm:tracking-[2px]">
          {activeMenu.title}
        </h2>

        <div className="space-y-5 sm:space-y-6">
          {activeMenu.submenu?.length > 0 ? (
            activeMenu.submenu.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="block pb-3 sm:pb-4 border-b uppercase tracking-[1.5px] sm:tracking-[2px] text-xs sm:text-sm hover:text-red-600 transition-colors"
              >
                {item.title}
              </Link>
            ))
          ) : (
            <p className="text-gray-400">No Categories</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubMenu;