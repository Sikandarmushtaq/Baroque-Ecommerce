import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const ContactModel = ({ onClose, onSave, email, firstName, lastName }) => {
  const [userEmail, setUserEmail] = useState(email);
  const [userFirstName, setUserFirstName] = useState(firstName || "");
  const [userLastName, setUserLastName] = useState(lastName || "");

  useEffect(() => {
    setUserEmail(email);
    setUserFirstName(firstName || "");
    setUserLastName(lastName || "");
  }, [email, firstName, lastName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      email: userEmail,
      firstName: userFirstName,
      lastName: userLastName,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-5">

      <div className="w-full max-w-xl p-8 bg-white rounded-2xl">

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold">Edit Contact</h2>

          <button onClick={onClose} className="text-3xl">
            <IoClose />
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          {/* First Name */}
          <label className="block mb-2 text-sm text-gray-500">
            First Name
          </label>
          <input
            type="text"
            value={userFirstName}
            onChange={(e) => setUserFirstName(e.target.value)}
            className="w-full p-4 mb-5 border outline-none rounded-xl focus:border-black"
          />

        
          <label className="block mb-2 text-sm text-gray-500">
            Last Name
          </label>
          <input
            type="text"
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value)}
            className="w-full p-4 mb-5 border outline-none rounded-xl focus:border-black"
          />

        
          <label className="block mb-2 text-sm text-gray-500">
            Email
          </label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full p-4 mb-8 border outline-none rounded-xl focus:border-black"
          />

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border rounded-full"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-8 py-3 text-white bg-black rounded-full"
            >
              Save
            </button>
          </div>

        </form>

      </div>

    </div>
  );
};

export default ContactModel;