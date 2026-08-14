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
    <section className="mb-14">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[18px] font-semibold">
          {firstName || lastName ? `${firstName} ${lastName}` : "Your Name"}
        </h2>

        <button
          onClick={() => setShowModal(true)}
          className="px-5 py-2 text-sm transition border rounded-full hover:bg-black hover:text-white"
        >
          Edit
        </button>
      </div>

      <div className="bg-white border shadow-sm rounded-2xl">

        <div className="flex items-center justify-between px-5 py-5">
          <span className="text-gray-500">Email</span>
          <span className="font-medium">{email}</span>
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