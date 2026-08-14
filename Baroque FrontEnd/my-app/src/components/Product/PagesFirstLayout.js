import { HiOutlineViewGrid } from "react-icons/hi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDownOutline } from "react-icons/io5";

const CollectionHeader = () => {
  return (
    <div className="w-full bg-white">
      <div className="py-20 text-center border-b">
        <h1 className="text-[62px] font-light tracking-[12px] uppercase">
          STITCHED
        </h1>

        <div className="flex justify-center gap-14 mt-14">
          <button className="tracking-wider text-gray-500 uppercase transition hover:text-black">
            Formal
          </button>

          <button className="tracking-wider text-gray-500 uppercase transition hover:text-black">
            Summer
          </button>

          <button className="tracking-wider text-gray-500 uppercase transition hover:text-black">
            Velvet
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 border-b">
        <div className="flex items-center gap-5 px-6 py-5 border-r">
          <HiOutlineViewGrid
            size={22}
            className="text-gray-500 cursor-pointer hover:text-black"
          />

          <BsGrid3X3GapFill size={18} className="cursor-pointer" />

          <RxHamburgerMenu
            size={22}
            className="text-gray-500 cursor-pointer hover:text-black"
          />
        </div>

        <div className="flex items-center justify-center font-semibold tracking-[4px] uppercase">
          250 Products
        </div>

        <div className="flex items-center justify-end gap-2 px-8 border-l cursor-pointer">
          <span className="text-sm tracking-[3px] uppercase text-gray-500">
            Sort By
          </span>

          <IoChevronDownOutline />
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;
