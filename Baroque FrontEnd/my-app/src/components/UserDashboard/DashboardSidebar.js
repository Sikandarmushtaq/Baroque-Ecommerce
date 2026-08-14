import React from "react";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <aside className="w-[170px] shrink-0">

      <nav className="flex flex-col gap-4">

      
       <Link to = "/orders"> <button
          className="
          text-left
          text-[17px]
          font-medium
          text-[#7b6856]
          hover:text-black
          transition"
        >
          Orders
        </button></Link>

    
        <button
          className="
          text-left
          text-[17px]
          font-medium
          text-black
          hover:text-[#7b6856]
          transition"
        >
          Profile
        </button>

      </nav>

    </aside>
  );
};

export default DashboardSidebar;