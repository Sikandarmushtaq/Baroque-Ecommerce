import React from "react";

import DashboardSidebar from "./DashboardSidebar";
import DashboardContent from "./DashboardContent";



const UserDashboard = () => {
  return (
    <>
    
     
    <main className="max-w-[1120px] mx-auto px-8 pt-24 pb-16">

        <div className="flex gap-16">

          <DashboardSidebar />

          <DashboardContent />

        </div>

      </main>

    
    </>
  );
};

export default UserDashboard;