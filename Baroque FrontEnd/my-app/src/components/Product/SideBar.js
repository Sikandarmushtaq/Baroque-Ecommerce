import React from "react";

const filters = [
  "Availability",
  "Price",
  "Product Type",
  "Fabric",
  "Color",
  "Size",
  "Pieces",
];

const CollectionSidebar = () => {
  return (
    <aside className="w-full border-b bg-white lg:sticky lg:top-[128px] lg:h-[calc(100vh-128px)] lg:w-[280px] lg:shrink-0 lg:border-r lg:border-b-0">

      <div className="px-4 pt-3 sm:px-8 sm:pt-5">

        {filters.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between py-4 border-b cursor-pointer sm:py-8"
          >
            <h2 className="text-xs sm:text-[13px] tracking-[2px] sm:tracking-[4px] uppercase">
              {item}
            </h2>

            <span className="text-sm">^</span>

          </div>
        ))}

      </div>

    </aside>
  );
};

export default CollectionSidebar;