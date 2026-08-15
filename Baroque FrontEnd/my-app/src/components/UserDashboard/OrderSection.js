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
          "https://baroque-ecommerce.onrender.com/order/getorders",
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
    <section className="px-4 sm:px-0">
      <h2 className="mb-4 text-lg font-semibold sm:text-xl sm:mb-6">Orders</h2>

      {loading ? (
        <p className="text-gray-500">Loading orders...</p>
      ) : orders.length === 0 ? (
        <div className="p-5 bg-white border sm:p-8 rounded-2xl">
          <p className="text-sm text-gray-500 sm:text-base">
            You haven't placed any orders yet.
          </p>

          <Link
            to="/"
            className="inline-block mt-4 text-sm font-medium underline sm:mt-5 sm:text-base hover:text-gray-600"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-5 sm:space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="overflow-hidden bg-white border rounded-2xl"
            >
          

              <div className="flex flex-col gap-3 px-4 py-4 border-b sm:flex-row sm:items-center sm:justify-between sm:px-6 bg-gray-50">
                <div>
                  <p className="text-sm font-medium sm:text-base">
                    Order #{order._id.slice(-6)}
                  </p>

                  <p className="text-xs text-gray-500 sm:text-sm">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="mb-1 text-sm font-medium sm:text-base">
                    Rs. {order.totalPrice}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    <span className="px-2 py-1 text-xs text-blue-700 bg-blue-100 rounded-full whitespace-nowrap">
                      Order: {order.status}
                    </span>

                    <span className="px-2 py-1 text-xs text-green-700 bg-green-100 rounded-full whitespace-nowrap">
                      Payment: {order.paymentStatus}
                    </span>
                  </div>
                </div>
              </div>

            
              <div className="px-4 py-4 space-y-4 sm:px-6">
                {order.products.map((item, index) => {
                  const product = products.find(
                    (p) => String(p.id) === String(item.productId)
                  );

                  const image = item.image || product?.image;

                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center min-w-0 gap-3 sm:gap-4"> 
                        <img
                          src={image}
                          alt={item.name}
                          className="flex-shrink-0 object-cover border rounded-lg w-14 h-18 sm:w-16 sm:h-20"
                        />

                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">
                            {item.name}
                          </p>

                          <p className="text-xs text-gray-500">
                            {item.type}
                          </p>
                        </div>
                      </div>

                      <p className="flex-shrink-0 text-sm text-gray-600">
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