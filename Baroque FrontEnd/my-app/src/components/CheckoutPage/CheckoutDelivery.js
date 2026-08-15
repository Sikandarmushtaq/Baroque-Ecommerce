import React, { useEffect, useState } from "react";
import axios from "axios";
import AddressModel from "../UserDashboard/AddressModel";

const CheckoutDelivery = ({ address, setAddress }) => {
  const [addresses, setAddresses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const token = localStorage.getItem("token");

  const isLoggedIn = !!token;

  
  const getAddresses = async () => {
    try {
      const response = await axios.get(
        "https://baroque-ecommerce.onrender.com/users/getaddresses",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.data.status === "success") {
        setAddresses(response.data.addresses);

       
        const defaultAddress = response.data.addresses.find(
          (item) => item.isDefault === true
        );

        if (defaultAddress) {
          setAddress(defaultAddress);
        }
      }
    } catch (error) {
      console.log("Addresses nahi mil sakti:", error.message);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      getAddresses();
    }
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress({
      ...address,
      [name]: value,
    });
  };


  const handleSelectAddress = (selectedAddress) => {
    setAddress(selectedAddress);
  };

 
  const handleSaveAddress = async (data) => {
    try {
      const response = await axios.post(
        "https://baroque-ecommerce.onrender.com/users/addaddress",
        data,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.data.status === "success") {
        setShowModal(false);

      
        getAddresses();

       
        if (response.data.address) {
          setAddress(response.data.address);
        }

        alert("Address save ho gaya");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Address save nahi ho saka");
    }
  };

  return (
    <div className="w-full p-4 sm:p-8">

      <h2 className="mb-6 text-2xl font-light tracking-[2px] sm:mb-8 sm:text-3xl sm:tracking-[3px]">
        Delivery
      </h2>

 

      {isLoggedIn ? (
        <>

          <h3 className="mb-4 text-base font-medium sm:text-lg">
            Shipping Address
          </h3>

          {addresses.map((item) => (
            <div
              key={item._id}
              onClick={() => handleSelectAddress(item)}
              className="flex items-start gap-3 p-4 mb-3 border rounded-lg cursor-pointer sm:gap-4 sm:p-5 hover:border-black"
            >

              <input
                type="radio"
                name="shippingAddress"
                checked={address?._id === item._id}
                onChange={() => handleSelectAddress(item)}
                className="mt-1"
              />

              <div className="min-w-0">

                <p className="font-semibold break-words">
                  {item.firstName} {item.lastName}
                </p>

                <p className="text-sm text-gray-600 break-words">
                  {item.address}
                </p>

                <p className="text-sm text-gray-600 break-words">
                  {item.city} {item.postalCode},{" "}
                  {item.country}
                </p>

                <p className="text-sm text-gray-600">
                  {item.phone}
                </p>

                {item.isDefault && (
                  <p className="mt-2 text-xs font-medium">
                    Default
                  </p>
                )}

              </div>

            </div>
          ))}

        

          <button
            onClick={() => setShowModal(true)}
            className="mt-4 text-sm font-medium hover:underline"
          >
            + Use a different address
          </button>

      

          {showModal && (
            <AddressModel
              onClose={() => setShowModal(false)}
              onSave={handleSaveAddress}
            />
          )}

        </>
      ) : (


        <>

        

          <div className="mb-5">

            <label className="block mb-2 text-sm text-gray-500">
              Country / Region
            </label>

            <select
              name="country"
              value={address.country}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm border rounded-lg outline-none sm:px-5 sm:py-4 sm:text-base"
            >
              <option value="Pakistan">
                Pakistan
              </option>
            </select>

          </div>

      

          <div className="grid grid-cols-1 gap-4 mb-5 sm:grid-cols-2">

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={address.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm border rounded-lg outline-none sm:px-5 sm:py-4 sm:text-base"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={address.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm border rounded-lg outline-none sm:px-5 sm:py-4 sm:text-base"
            />

          </div>

    

          <div className="mb-5">

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={address.address}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm border rounded-lg outline-none sm:px-5 sm:py-4 sm:text-base"
            />

          </div>

        

          <div className="mb-5">

            <input
              type="text"
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
              value={address.apartment}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm border rounded-lg outline-none sm:px-5 sm:py-4 sm:text-base"
            />

          </div>

       

          <div className="mb-5">

            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm border rounded-lg outline-none sm:px-5 sm:py-4 sm:text-base"
            />

          </div>

         

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={address.postalCode}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm border rounded-lg outline-none sm:px-5 sm:py-4 sm:text-base"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={address.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm border rounded-lg outline-none sm:px-5 sm:py-4 sm:text-base"
            />

          </div>

        </>
      )}

    </div>
  );
};

export default CheckoutDelivery;