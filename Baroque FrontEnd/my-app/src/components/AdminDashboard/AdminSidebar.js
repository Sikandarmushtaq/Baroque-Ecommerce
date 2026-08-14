import { useNavigate } from "react-router-dom";

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="w-64">

      <button
        onClick={() => setActiveTab("orders")}
        className={`block mb-8 text-lg transition ${
          activeTab === "orders"
            ? "font-semibold text-black"
            : "text-gray-500"
        }`}
      >
        Total Orders
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`block mb-8 text-lg transition ${
          activeTab === "contacts"
            ? "font-semibold text-black"
            : "text-gray-500"
        }`}
      >
        Contact List
      </button>

      <button
        onClick={() => navigate("/admin/addproduct")}
        className="block mb-8 text-lg text-gray-500 hover:text-black transition"
      >
        Add New Product
      </button>

      <button
        onClick={handleSignOut}
        className="px-7 py-3 border rounded-full hover:bg-black hover:text-white transition"
      >
        Sign Out
      </button>

    </div>
  );
};

export default AdminSidebar;