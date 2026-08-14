import React, { useEffect, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AddressModal from "./AddressModel";

const AddressSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: token,
  };

  const fetchAddresses = async () => {
    try {
      const response = await axios.get(
        "https://baroque-ecommerce.onrender.com/users/getaddresses",
        { headers }
      );

      if (response.data.status === "success") {
        setAddresses(response.data.addresses);
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
    fetchAddresses();
  }, []);

  const handleAdd = () => {
    setSelectedAddress(null);
    setShowModal(true);
  };

  const handleEdit = (address) => {
    setSelectedAddress(address);
    setShowModal(true);
  };

const handleSave = async (data) => {
  try {
    if (selectedAddress) {
     
      const response = await axios.put(
        `https://baroque-ecommerce.onrender.com/users/updateaddress/${selectedAddress._id}`,
        data,
        { headers }
      );

      if (response.data.status === "success") {
        setShowModal(false);
        setSelectedAddress(null);
        fetchAddresses();
      } else {
        alert(response.data.message);
      }
    } else {
   
      const response = await axios.post(
        "https://baroque-ecommerce.onrender.com/users/addaddress",
        data,
        { headers }
      );

      if (response.data.status === "success") {
        setShowModal(false);
        fetchAddresses();
      } else {
        alert(response.data.message);
      }
    }
  } catch (err) {
    alert("Address save nahi ho saka");
  }
};

const handleDelete = async () => {
  try {
    const response = await axios.delete(
      `https://baroque-ecommerce.onrender.com/users/deleteaddress/${selectedAddress._id}`,
      { headers }
    );

    if (response.data.status === "success") {
      setShowModal(false);
      setSelectedAddress(null);
      fetchAddresses();
    } else {
      alert(response.data.message);
    }
  } catch (err) {
    alert("Address delete nahi ho saka");
  }
};

  return (
    <section className="mb-12">

   
      <div className="flex items-center justify-between mb-5">

        <h2 className="text-[18px] font-semibold">
          Addresses
        </h2>

        <button
          onClick={handleAdd}
          className="px-5 py-2 text-sm transition border rounded-full hover:bg-black hover:text-white"
        >
          Add
        </button>

      </div>

  
      <div className="overflow-hidden bg-white border shadow-sm rounded-2xl">

        {addresses.length > 0 ? (

          addresses.map((address, index) => (

            <div
              key={address._id}
              onClick={() => handleEdit(address)}
              className={`flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-gray-50 ${
                index !== addresses.length - 1 ? "border-b" : ""
              }`}
            >

            
              <div className="flex items-center gap-4">

             
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl">
                  <FiMapPin size={20} />
                </div>

                <div>

                  <div className="flex items-center gap-2">

                    <h3 className="text-[15px] font-semibold">
                      {address.firstName} {address.lastName}
                    </h3>

                    {address.isDefault && (
                      <span className="text-[12px] font-medium">
                        Default
                      </span>
                    )}

                  </div>

                  <p className="text-[14px] text-gray-700">
                    {address.address}, {address.city} {address.postalCode},{" "}
                    {address.country}
                  </p>

                </div>

              </div>

          
              <IoChevronForward
                size={20}
                className="text-gray-500"
              />

            </div>

          ))

        ) : (

          <div className="px-8 py-8 text-sm text-gray-500">
            No addresses added.
          </div>

        )}

      </div>


      {showModal && (
        <AddressModal
          initialData={selectedAddress}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      )}

    </section>
  );
};

export default AddressSection;