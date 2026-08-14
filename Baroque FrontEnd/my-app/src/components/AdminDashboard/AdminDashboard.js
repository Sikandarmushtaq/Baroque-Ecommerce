import { useState } from "react";

import AdminSidebar from "./AdminSidebar";
import AdminDashboardContent from "./AdminDashboardContent";

import logo from "../../images/homelogo/LOGO.avif";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <>
      <section className="pt-5 pb-24">
        <img src={logo} alt="logo" className="w-40 mx-auto mb-16" />

        <div className="flex gap-20 px-10 mx-auto max-w-7xl">
          <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          <AdminDashboardContent activeTab={activeTab} />
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
