import React from "react";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { products } from "./ProductData";


const ProductGrid = () => {
  return (
    <section className="flex-1 px-10 py-10">
      <div className="grid grid-cols-2 gap-x-10 gap-y-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="group max-w-[470px]"
          >
           

            <div className="relative overflow-hidden">

              <Link to={`/product/${product.id}`}>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[610px] object-cover transition duration-500 group-hover:scale-105"
                />

              </Link>

            

              <button
                className="absolute flex items-center justify-center bg-white rounded-full top-4 left-4 w-11 h-11"
              >
                <FiHeart size={20} />
              </button>

            </div>

         

            <div className="mt-6">

              <p className="text-[11px] uppercase tracking-[3px] text-gray-500">
                {product.category}
              </p>

              <h2 className="mt-3 text-[19px] tracking-wide">
                {product.name}
              </h2>

              <p className="mt-3 text-[20px] font-medium">
                PKR {product.price.toLocaleString()}
              </p>

            </div>

          </div>
        ))}
      </div>
      
    </section>
  );
};

export default ProductGrid;