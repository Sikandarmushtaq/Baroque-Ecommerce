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
        "https://baroque-ecommerce.onrender.com/contact/createcontact",
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

  

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        <div>
          <label className="ml-3 text-sm text-gray-500">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-4 border border-gray-300 outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="ml-3 text-sm text-gray-500">
            E-mail
          </label>

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-4 border border-gray-300 outline-none focus:border-black"
          />
        </div>

      </div>

   

      <div>

        <label className="ml-3 text-sm text-gray-500">
          Message
        </label>

        <textarea
          rows="7"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-4 border border-gray-300 outline-none resize-none focus:border-black"
        />

      </div>

  

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