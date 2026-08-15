import { HiOutlineViewGrid } from "react-icons/hi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDownOutline } from "react-icons/io5";

const CollectionHeader = () => {
  return (
    <div className="w-full bg-white">
      <div className="px-4 py-10 text-center border-b sm:py-20">
        <h1 className="text-3xl sm:text-5xl md:text-[62px] font-light tracking-[3px] sm:tracking-[8px] md:tracking-[12px] uppercase">
          STITCHED
        </h1>

        <div className="flex justify-center gap-6 mt-8 sm:gap-14 sm:mt-14">
          <button className="text-xs tracking-wider text-gray-500 uppercase transition sm:text-base hover:text-black">
            Formal
          </button>

          <button className="text-xs tracking-wider text-gray-500 uppercase transition sm:text-base hover:text-black">
            Summer
          </button>

          <button className="text-xs tracking-wider text-gray-500 uppercase transition sm:text-base hover:text-black">
            Velvet
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 border-b sm:grid-cols-3">
        <div className="flex items-center gap-3 px-4 py-4 border-r sm:gap-5 sm:px-6 sm:py-5">
          <HiOutlineViewGrid
            size={18}
            className="text-gray-500 cursor-pointer sm:hidden hover:text-black"
          />
          <HiOutlineViewGrid
            size={22}
            className="hidden text-gray-500 cursor-pointer sm:block hover:text-black"
          />

          <BsGrid3X3GapFill size={16} className="cursor-pointer sm:hidden" />
          <BsGrid3X3GapFill size={18} className="hidden cursor-pointer sm:block" />

          <RxHamburgerMenu
            size={18}
            className="text-gray-500 cursor-pointer sm:hidden hover:text-black"
          />
          <RxHamburgerMenu
            size={22}
            className="hidden text-gray-500 cursor-pointer sm:block hover:text-black"
          />
        </div>

        <div className="hidden sm:flex items-center justify-center font-semibold tracking-[4px] uppercase text-sm">
          250 Products
        </div>

        <div className="flex items-center justify-end col-span-1 gap-2 px-4 border-l cursor-pointer sm:px-8">
          <span className="text-xs tracking-[2px] sm:text-sm sm:tracking-[3px] uppercase text-gray-500 whitespace-nowrap">
            Sort By
          </span>

          <IoChevronDownOutline />
        </div>
      </div>

      <div className="flex items-center justify-center py-3 text-xs font-semibold tracking-[3px] uppercase border-b sm:hidden">
        250 Products
      </div>
    </div>
  );
};

export default CollectionHeader;