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
    <div className="w-full p-8">

      <h2 className="text-3xl font-light tracking-[3px] mb-8">
        Delivery
      </h2>

 

      {isLoggedIn ? (
        <>

          <h3 className="mb-4 text-lg font-medium">
            Shipping Address
          </h3>

          {addresses.map((item) => (
            <div
              key={item._id}
              onClick={() => handleSelectAddress(item)}
              className="flex items-start gap-4 p-5 mb-3 border rounded-lg cursor-pointer hover:border-black"
            >

              <input
                type="radio"
                name="shippingAddress"
                checked={address?._id === item._id}
                onChange={() => handleSelectAddress(item)}
              />

              <div>

                <p className="font-semibold">
                  {item.firstName} {item.lastName}
                </p>

                <p className="text-sm text-gray-600">
                  {item.address}
                </p>

                <p className="text-sm text-gray-600">
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
              className="w-full px-5 py-4 border rounded-lg outline-none"
            >
              <option value="Pakistan">
                Pakistan
              </option>
            </select>

          </div>

      

          <div className="grid grid-cols-2 gap-4 mb-5">

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={address.firstName}
              onChange={handleChange}
              className="w-full px-5 py-4 border rounded-lg outline-none"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={address.lastName}
              onChange={handleChange}
              className="w-full px-5 py-4 border rounded-lg outline-none"
            />

          </div>

    

          <div className="mb-5">

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={address.address}
              onChange={handleChange}
              className="w-full px-5 py-4 border rounded-lg outline-none"
            />

          </div>

        

          <div className="mb-5">

            <input
              type="text"
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
              value={address.apartment}
              onChange={handleChange}
              className="w-full px-5 py-4 border rounded-lg outline-none"
            />

          </div>

       

          <div className="mb-5">

            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleChange}
              className="w-full px-5 py-4 border rounded-lg outline-none"
            />

          </div>

         

          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={address.postalCode}
              onChange={handleChange}
              className="w-full px-5 py-4 border rounded-lg outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={address.phone}
              onChange={handleChange}
              className="w-full px-5 py-4 border rounded-lg outline-none"
            />

          </div>

        </>
      )}

    </div>
  );
};

export default CheckoutDelivery;