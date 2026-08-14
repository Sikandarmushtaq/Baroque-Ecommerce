import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { products } from "./ProductData";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import Navbar from "../Navbar";

import Footer from "../ContactFooter/Footer";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findProduct = async () => {

      
      const staticProduct = products.find(
        (item) => item.id === Number(id)
      );

      if (staticProduct) {
        setProduct(staticProduct);
        setLoading(false);
        return;
      }

      
      try {
        const response = await axios.get(
          `https://baroque-ecommerce.onrender.com/product/getsingleproduct/${id}`
        );

        if (response.data.status === "success") {
          setProduct(response.data.product);
        }
      } catch (err) {
        console.log(err.message);
      }

      setLoading(false);
    };

    findProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-3xl">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-3xl">
        Product Not Found
      </div>
    );
  }

  return (
    <>
    
      <Navbar blackIcons={true} />

      <section className="max-w-[1600px] mx-auto px-10 pt-40 pb-16">

        <div className="grid grid-cols-2 gap-20">

        
          <ProductGallery images={[product.image]} />

         
          <ProductInfo product={product} />

        </div>

      </section>
      <Footer/>
    </>
  );
};

export default ProductDetails;