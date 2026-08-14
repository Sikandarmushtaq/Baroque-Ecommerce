import { useState, useEffect,  } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const getOrders = async () => {
    try {
      const adminToken = localStorage.getItem("adminToken");

      const response = await axios.get(
        "http://localhost:3000/admin/getadminorders",
        {
          headers: {
            Authorization: adminToken,
          },
        }
      );

      if (response.data.status === "found") {
        setOrders(response.data.orders);
      }
    } catch (err) {
      console.log(err.message);
        if (err.response?.status === 401) {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  }
    }

    setLoading(false);
  };

  useEffect(() => {
    getOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const adminToken = localStorage.getItem("adminToken");

      await axios.put(
        `http://localhost:3000/admin/updateorderstatus/${orderId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: adminToken,
          },
        }
      );

    
      getOrders();
    } catch (err) {
      console.log(err.message);
        if (err.response?.status === 401) {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  }
    }
  };

  if (loading) {
    return (
      <div className="p-8 border rounded-xl">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-8 border rounded-xl">

      <h2 className="text-3xl tracking-[5px] mb-8">
        TOTAL ORDERS
      </h2>

      {orders.length === 0 ? (

        <div className="flex items-center justify-center h-64">
          <p className="text-lg text-gray-500">
            No Orders Yet.
          </p>
        </div>

      ) : (

        <div>
          {orders.map((order) => (
            <div
              key={order._id}
              className="p-5 mb-4 border rounded-lg"
            >
              <p className="font-semibold">
                Order ID: {order._id}
              </p>

              <p className="text-gray-600">
                Total: PKR {order.totalPrice}
              </p>

              <p className="text-gray-600">
                Payment Status: {order.paymentStatus}
              </p>

              <p className="text-gray-600">
                Name: {order.shippingAddress?.firstName} {order.shippingAddress?.lastName}
              </p>

              <p className="text-gray-600">
                Phone: {order.shippingAddress?.phone}
              </p>

              <p className="text-gray-600">
                Address: {order.shippingAddress?.address}, {order.shippingAddress?.city}
              </p>

              <div className="mt-3">
                <label className="mr-2 text-gray-600">
                  Order Status:
                </label>

                <select
                  value={order.status}
                  onChange={(e) =>
                    handleStatusChange(order._id, e.target.value)
                  }
                  className="px-3 py-2 border rounded"
                >
                  <option value="pending">Pending</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          ))}
        </div>

      )}

    </div>
  );
};

export default AdminOrders;