import React from "react";
import ContactSection from "./ContactSection";
import AddressSection from "./AddressSection";
import SignOutSection from "./SignOutSection";

const DashboardContent = () => {
  return (
    <section className="flex-1 w-full max-w-[640px] px-4 sm:px-0">
      <ContactSection />
      <AddressSection />
      <SignOutSection />
    </section>
  );
};

export default DashboardContent;