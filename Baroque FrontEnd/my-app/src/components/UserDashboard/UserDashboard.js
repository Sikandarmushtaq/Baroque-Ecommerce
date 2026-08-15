import React from "react";

import DashboardSidebar from "./DashboardSidebar";
import DashboardContent from "./DashboardContent";



const UserDashboard = () => {
  return (
    <>
    
     
    <main className="max-w-[1120px] mx-auto px-4 sm:px-8 pt-16 sm:pt-24 pb-16">

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">

          <DashboardSidebar />

          <DashboardContent />

        </div>

      </main>

    
    </>
  );
};

export default UserDashboard;