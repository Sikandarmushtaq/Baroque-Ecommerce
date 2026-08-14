import React from "react";
import Navbar from "../Navbar";
import PageFirst from "./PagesFirstLayout";
import Sidebar from "./SideBar";
import ProductGrid from "./ProductGrid";
import Footer from "../ContactFooter/Footer";

const CollectionPage = () => {
  return (
    <>
      <Navbar blackIcons={true} />

      <div className="pt-[60px]">
        <PageFirst />

        <div className="flex">
          <Sidebar />
          <ProductGrid />
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default CollectionPage;