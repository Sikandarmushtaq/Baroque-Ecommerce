import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
        "http://localhost:3000/admin/adminlogin",
        formData
      );

      if (response.data.status === "Found") {
        localStorage.setItem("adminToken", response.data.token);
        navigate("/admin/dashboard");
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      alert("Server Error");
    }
  };

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-md px-6 mx-auto">

        <h1 className="text-center text-4xl tracking-[8px] font-light mb-14">
          ADMIN LOGIN
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

        
          <div>
            <label className="ml-2 text-sm text-gray-500">
              E-mail
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 border border-gray-300 outline-none focus:border-black"
            />
          </div>

       

          <div>
            <label className="ml-2 text-sm text-gray-500">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-4 border border-gray-300 outline-none focus:border-black"
            />
          </div>

        

          <button
            type="submit"
            className="w-full bg-[#1f1f1f] text-white tracking-[4px] py-4 hover:bg-black transition duration-300"
          >
            LOGIN
          </button>

        </form>

      </div>
    </section>
  );
};

export default AdminLoginForm;