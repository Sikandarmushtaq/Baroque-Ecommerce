import React, { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";

const PremiumProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://baroque-ecommerce.onrender.com/product/getallproducts",
        );

        if (response.data.status === "success") {
          setProducts(response.data.products);
        }
      } catch (err) {
        console.log(err.message);
      }

      setLoading(false);
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <section className="flex-1 px-4 py-6 sm:px-10 sm:py-10">
        <p className="text-gray-500">Loading...</p>
      </section>
    );
  }

  return (
    <section className="flex-1 px-4 py-6 sm:px-10 sm:py-10">
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-10 sm:gap-y-20">
        {products.map((product) => (
          <div key={product._id} className="group max-w-[470px]">
            <div className="relative overflow-hidden">
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[260px] sm:h-[420px] md:h-[610px] object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>

              <button className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full top-2 left-2 sm:top-4 sm:left-4 sm:w-11 sm:h-11">
                <FiHeart size={14} className="sm:hidden" />
                <FiHeart size={20} className="hidden sm:block" />
              </button>
            </div>

            <div className="mt-3 sm:mt-6">
              <p className="text-[9px] sm:text-[11px] uppercase tracking-[2px] sm:tracking-[3px] text-gray-500">
                {product.category}
              </p>

              <h2 className="mt-1.5 sm:mt-3 text-sm sm:text-[19px] tracking-wide truncate">{product.name}</h2>

              <p className="mt-1.5 sm:mt-3 text-sm sm:text-[20px] font-medium">
                PKR {product.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PremiumProductGrid;