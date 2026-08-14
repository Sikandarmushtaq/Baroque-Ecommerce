import React, { useEffect, useState } from "react";
import axios from "axios";

import WishlistToolbar from "./WishlistToolbar";
import WishlistGrid from "./WishlistGrid";
import WishlistActions from "./WishlistActions";

const WishlistPage = () => {
  const [products, setProducts] = useState([]);

  const fetchWishlist = async () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const response = await axios.get(
        "http://localhost:3000/wishlist/getwishlist",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.data.status === "success") {
        // console.log("wishlist product :", response.data.wish.products);
       
        setProducts(response.data.wish.products || []);
      }
    } catch (error) {
      console.log(error.message);

      
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
      }
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleRemoveAll = async () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const response = await axios.delete(
        "http://localhost:3000/wishlist/removeallwishlist",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.data.status === "success") {
        setProducts([]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const response = await axios.post(
        "http://localhost:3000/wishlist/addwishlisttocart",
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.data.status === "success") {
        alert("Wishlist products cart mein add ho gaye.");
        setProducts([]);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <WishlistToolbar />

      <WishlistGrid
        products={products}
        setProducts={setProducts}
      />

      <WishlistActions
        onRemoveAll={handleRemoveAll}
        onAddToCart={handleAddToCart}
      />
    </>
  );
};

export default WishlistPage;