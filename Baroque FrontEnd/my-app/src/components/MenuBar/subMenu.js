import { Link } from "react-router-dom";

const SubMenu = ({ activeMenu }) => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="px-10 py-8">
        <h2 className="text-xl font-semibold tracking-[2px] mb-8 uppercase">
          {activeMenu.title}
        </h2>

        <div className="space-y-6">
          {activeMenu.submenu?.length > 0 ? (
            activeMenu.submenu.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="block border-b pb-4 uppercase tracking-[2px] text-sm hover:text-red-600 transition-colors"
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
