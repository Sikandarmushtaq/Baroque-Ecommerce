import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { products } from "../Product/ProductData";

const OrdersSection = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:3000/order/getorders",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (response.data.status === "success") {
          setOrders(response.data.orders);
        }
      } catch (err) {
        console.log(err.message);
      }

      setLoading(false);
    };

    getOrders();
  }, []);

  return (
    <section>
      <h2>Orders</h2>

      {loading ? (
        <p className="text-gray-500">Loading orders...</p>
      ) : orders.length === 0 ? (
        <div className="p-8 bg-white border rounded-2xl">
          <p className="text-gray-500">
            You haven't placed any orders yet.
          </p>

          <Link
            to="/"
            className="inline-block mt-5 font-medium underline hover:text-gray-600"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="overflow-hidden bg-white border rounded-2xl"
            >
          

              <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
                <div>
                  <p className="font-medium">
                    Order #{order._id.slice(-6)}
                  </p>

                  <p className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="mb-1 font-medium">
                    Rs. {order.totalPrice}
                  </p>

                  <div className="flex items-center justify-end gap-2">
                    <span className="px-2 py-1 text-xs text-blue-700 bg-blue-100 rounded-full">
                      Order: {order.status}
                    </span>

                    <span className="px-2 py-1 text-xs text-green-700 bg-green-100 rounded-full">
                      Payment: {order.paymentStatus}
                    </span>
                  </div>
                </div>
              </div>

            
              <div className="px-6 py-4 space-y-4">
                {order.products.map((item, index) => {
                  const product = products.find(
                    (p) => String(p.id) === String(item.productId)
                  );

                  const image = item.image || product?.image;

                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4"> 
                        <img
                          src={image}
                          alt={item.name}
                          className="object-cover w-16 h-20 border rounded-lg"
                        />

                        <div>
                          <p className="text-sm font-medium">
                            {item.name}
                          </p>

                          <p className="text-xs text-gray-500">
                            {item.type}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default OrdersSection;