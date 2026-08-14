import React from "react";
import axios from "axios";
import WishlistCard from "./WishlistCard";

const WishlistGrid = ({ products, setProducts }) => {
  const handleRemove = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.delete(
        `https://baroque-ecommerce.onrender.com/wishlist/removewishlist/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.data.status === "success") {
        setProducts(products.filter((product) => product._id !== id));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product) => (
        <WishlistCard
          key={product._id}
          image={product.image}
          title={product.name}
          price={product.price}
          onRemove={() => handleRemove(product._id)}
        />
      ))}
    </div>
  );
};

export default WishlistGrid;