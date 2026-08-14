import AdminOrders from "./AdminOrders";
import AdminContactList from "./AdminContactList";

const AdminDashboardContent = ({ activeTab }) => {
  return (
    <div className="flex-1">

      {activeTab === "orders" && <AdminOrders />}

      {activeTab === "contacts" && <AdminContactList />}

    </div>
  );
};

export default AdminDashboardContent;