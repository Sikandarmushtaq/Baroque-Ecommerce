import React from "react";
import Navbar from "../Navbar";
import PageFirst from "./PagesFirstLayout";
import Sidebar from "./SideBar";
import PremiumProductGrid from "./PremiumProductGrid";
import Footer from "../ContactFooter/Footer";

const PremiumProductsPage = () => {
  return (
    <>
      <Navbar blackIcons={true} />

      <div className="pt-[60px]">
        <PageFirst />

        <div className="flex flex-col lg:flex-row">
          <Sidebar />
          <PremiumProductGrid />
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default PremiumProductsPage;