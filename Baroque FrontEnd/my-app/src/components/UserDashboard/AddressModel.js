import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const AddAddressModal = ({
  onClose,
  onSave,
  initialData = null,
  onDelete,
}) => {
  const [formData, setFormData] = useState(
    initialData || {
      country: "Pakistan",
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      city: "",
      postalCode: "",
      phone: "",
      isDefault: true,
    }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-5">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white p-8">

    
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-semibold">
            {initialData ? "Edit Address" : "Add Address"}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-3xl text-gray-500 hover:text-black"
          >
            <IoClose />
          </button>
        </div>

        <form onSubmit={handleSubmit}>

       
          <div className="mb-5">
            <label className="block mb-2 text-sm text-gray-500">
              Country / Region
            </label>

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-4 border outline-none rounded-xl focus:border-black"
            >
              <option>Pakistan</option>
            </select>
          </div>

         
          <div className="grid grid-cols-2 gap-4 mb-5">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="p-4 border outline-none rounded-xl focus:border-black"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="p-4 border outline-none rounded-xl focus:border-black"
            />
          </div>

         
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-4 mb-5 border outline-none rounded-xl focus:border-black"
          />

       
          <input
            type="text"
            name="apartment"
            placeholder="Apartment, suite, etc. (optional)"
            value={formData.apartment}
            onChange={handleChange}
            className="w-full p-4 mb-5 border outline-none rounded-xl focus:border-black"
          />

        
          <div className="grid grid-cols-2 gap-4 mb-5">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="p-4 border outline-none rounded-xl focus:border-black"
            />

            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              className="p-4 border outline-none rounded-xl focus:border-black"
            />
          </div>

        
          <input
            type="text"
            name="phone"
            placeholder="+92"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 mb-6 border outline-none rounded-xl focus:border-black"
          />

        
          <label className="flex items-center gap-3 mb-8 cursor-pointer">
            <input
              type="checkbox"
              name="isDefault"
              checked={formData.isDefault}
              onChange={handleChange}
            />

            <span>This is my default address</span>
          </label>

       
          <div className="flex items-center justify-between">

            <div>
              {initialData && (
                <button
                  type="button"
                  onClick={onDelete}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              )}
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border rounded-full hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-8 py-3 text-white bg-black rounded-full hover:bg-gray-800"
              >
                Save
              </button>
            </div>

          </div>

        </form>
      </div>
    </div>
  );
};

export default AddAddressModal;