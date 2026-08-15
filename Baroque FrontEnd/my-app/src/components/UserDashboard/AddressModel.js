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
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-3 sm:p-5">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white p-5 sm:p-8">

    
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            {initialData ? "Edit Address" : "Add Address"}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-gray-500 sm:text-3xl hover:text-black"
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
              className="w-full p-3 text-sm border outline-none sm:p-4 sm:text-base rounded-xl focus:border-black"
            >
              <option>Pakistan</option>
            </select>
          </div>

         
          <div className="grid grid-cols-1 gap-4 mb-5 sm:grid-cols-2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 text-sm border outline-none sm:p-4 sm:text-base rounded-xl focus:border-black"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 text-sm border outline-none sm:p-4 sm:text-base rounded-xl focus:border-black"
            />
          </div>

         
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 mb-5 text-sm border outline-none sm:p-4 sm:text-base rounded-xl focus:border-black"
          />

       
          <input
            type="text"
            name="apartment"
            placeholder="Apartment, suite, etc. (optional)"
            value={formData.apartment}
            onChange={handleChange}
            className="w-full p-3 mb-5 text-sm border outline-none sm:p-4 sm:text-base rounded-xl focus:border-black"
          />

        
          <div className="grid grid-cols-1 gap-4 mb-5 sm:grid-cols-2">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="p-3 text-sm border outline-none sm:p-4 sm:text-base rounded-xl focus:border-black"
            />

            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              className="p-3 text-sm border outline-none sm:p-4 sm:text-base rounded-xl focus:border-black"
            />
          </div>

        
          <input
            type="text"
            name="phone"
            placeholder="+92"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 mb-6 text-sm border outline-none sm:p-4 sm:text-base rounded-xl focus:border-black"
          />

        
          <label className="flex items-center gap-3 mb-8 cursor-pointer">
            <input
              type="checkbox"
              name="isDefault"
              checked={formData.isDefault}
              onChange={handleChange}
            />

            <span className="text-sm sm:text-base">This is my default address</span>
          </label>

       
          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              {initialData && (
                <button
                  type="button"
                  onClick={onDelete}
                  className="text-sm text-red-600 sm:text-base hover:underline"
                >
                  Delete
                </button>
              )}
            </div>

            <div className="flex gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-2.5 sm:flex-none sm:py-3 text-sm sm:text-base border rounded-full hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex-1 px-8 py-2.5 sm:flex-none sm:py-3 text-sm sm:text-base text-white bg-black rounded-full hover:bg-gray-800"
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