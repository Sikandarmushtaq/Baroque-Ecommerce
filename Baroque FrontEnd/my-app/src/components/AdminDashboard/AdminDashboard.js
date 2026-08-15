import { useState } from "react";

import AdminSidebar from "./AdminSidebar";
import AdminDashboardContent from "./AdminDashboardContent";

import logo from "../../images/homelogo/LOGO.avif";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <>
      <section className="pt-5 pb-24">
        <img src={logo} alt="logo" className="w-32 mx-auto mb-10 sm:w-40 sm:mb-16" />

        <div className="flex flex-col gap-8 px-4 mx-auto sm:flex-row sm:gap-20 sm:px-10 max-w-7xl">
          <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          <AdminDashboardContent activeTab={activeTab} />
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;