import { useState } from "react";
import axios from "axios";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/contact/createcontact",
        formData
      );

      if (response.data.status === "sucess") {
        alert("Message send ho gaya");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Message send nahi hua");
      }
    } catch (err) {
      alert("Server Error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Name & Email */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="text-sm text-gray-500 ml-3">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-4 outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500 ml-3">
            E-mail
          </label>

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-4 outline-none focus:border-black"
          />
        </div>

      </div>

      {/* Message */}

      <div>

        <label className="text-sm text-gray-500 ml-3">
          Message
        </label>

        <textarea
          rows="7"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-4 outline-none resize-none focus:border-black"
        />

      </div>

      {/* Button */}

      <button
        type="submit"
        className="w-full bg-[#1f1f1f] text-white tracking-[5px] py-5 hover:bg-black transition"
      >
        SEND MESSAGE
      </button>

    </form>
  );
};

export default ContactForm;