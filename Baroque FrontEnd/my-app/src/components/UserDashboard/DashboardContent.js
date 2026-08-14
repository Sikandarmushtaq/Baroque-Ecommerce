import React from "react";
import ContactSection from "./ContactSection";
import AddressSection from "./AddressSection";
import SignOutSection from "./SignOutSection";

const DashboardContent = () => {
  return (
    <section className="flex-1 max-w-[640px]">
      <ContactSection />
      <AddressSection />
      <SignOutSection />
    </section>
  );
};

export default DashboardContent;