import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactModel from "./ContactModel";
import { useNavigate } from "react-router-dom";
const ContactSection = () => {
  const [showModal, setShowModal] = useState(false);
  const email = localStorage.getItem("email");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate()

  const token = localStorage.getItem("token");
 const headers = {
  Authorization: token
};

const fetchProfile = async () => {
  try {
    const response = await axios.get(
      "https://baroque-ecommerce.onrender.com/users/profile",
      { headers }
    );

    if (response.data.status === "success") {
      setFirstName(response.data.user.firstName || "");
      setLastName(response.data.user.lastName || "");
    }
  } catch (err) {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      navigate("/");
    }
  }
};

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSave = async (data) => {
    try {
      await axios.put(
        "https://baroque-ecommerce.onrender.com/users/updateprofile",
        {
          firstName: data.firstName,
          lastName: data.lastName,
           email: data.email, 
        },
        { headers }
      );
      setFirstName(data.firstName);
      setLastName(data.lastName);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className="mb-10 sm:mb-14">

      <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
        <h2 className="text-base font-semibold truncate sm:text-[18px]">
          {firstName || lastName ? `${firstName} ${lastName}` : "Your Name"}
        </h2>

        <button
          onClick={() => setShowModal(true)}
          className="flex-shrink-0 px-4 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm transition border rounded-full hover:bg-black hover:text-white"
        >
          Edit
        </button>
      </div>

      <div className="bg-white border shadow-sm rounded-2xl">

        <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-5 sm:py-5">
          <span className="text-sm text-gray-500 sm:text-base">Email</span>
          <span className="text-sm font-medium truncate sm:text-base">{email}</span>
        </div>

      </div>

      {showModal && (
        <ContactModel
          email={email}
          firstName={firstName}
          lastName={lastName}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}

    </section>
  );
};

export default ContactSection;