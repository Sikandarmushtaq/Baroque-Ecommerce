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
    <aside className="sticky top-[128px] h-[calc(100vh-128px)] w-[280px] shrink-0 border-r bg-white">

      <div className="px-8 pt-5">

        {filters.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between py-8 border-b cursor-pointer"
          >
            <h2 className="text-[13px] tracking-[4px] uppercase">
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