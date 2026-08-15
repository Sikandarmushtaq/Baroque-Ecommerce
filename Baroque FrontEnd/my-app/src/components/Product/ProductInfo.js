import { useState } from "react";
import axios from "axios";
import AddToCart from "./AddToCart";
import AddToWishlist from "./AddToWishlist";
import ProductAccordion from "./ProductAccordion";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const productId = product.id ? product.id : product._id;

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        await axios.post(
          "https://baroque-ecommerce.onrender.com/cart/addcart",
          {
            productId: String(productId),
            name: product.name,
            price: product.price,
            type: product.category,
            image: product.image,
            quantity: quantity,
          },
          {
            headers: {
              Authorization: token,
            },
          },
        );

        window.dispatchEvent(new Event("openCart"));
      } catch (err) {
        console.log(err.message);

        if (err.response?.status === 401) {
          localStorage.removeItem("token");
        }
      }

      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      (item) => item.productId === String(productId),
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({
        productId: String(productId),
        name: product.name,
        price: product.price,
        type: product.category,
        image: product.image,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("openCart"));
  };

  const handleAddToWishlist = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.dispatchEvent(new Event("openLoginPopup"));
      return;
    }

    try {
      console.log("Product image wishlist sey phly :", product.image);

      const response = await axios.post(
        "https://baroque-ecommerce.onrender.com/wishlist/addwishlist",
        {
          productId: String(productId),
          name: product.name,
          price: product.price,
          type: product.category,
          image: product.image,
        },
        {
          headers: {
            Authorization: token,
          },
        },
      );

      if (response.data.status === "error") {
        alert(response.data.message);
        return;
      }

      navigate("/wishlist");
    } catch (err) {
      console.log(err.message);

      if (err.response?.status === 401) {
        localStorage.removeItem("token");
      }
    }
  };

  return (
    <div>
      <p className="text-xs sm:text-sm uppercase tracking-[2px] sm:tracking-[3px] text-gray-500">
        {product.category}
      </p>

      <h1 className="mt-3 text-2xl leading-tight tracking-wide sm:mt-5 sm:text-4xl">
        {product.name}
      </h1>

      <h2 className="mt-4 text-xl font-medium sm:mt-6 sm:text-3xl">
        PKR {product.price.toLocaleString()}
      </h2>

      <p className="mt-6 text-sm leading-7 text-gray-600 sm:mt-8 sm:leading-8 sm:text-base">{product.description}</p>

      <div className="mt-8 sm:mt-10">
        <p className="uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm mb-3 sm:mb-4">Quantity</p>

        <div className="flex w-[130px] h-[48px] sm:w-[150px] sm:h-[55px] border">
          <button onClick={decreaseQuantity} className="flex-1 text-xl sm:text-2xl">
            -
          </button>

          <div className="flex items-center justify-center flex-1 text-sm sm:text-base border-x">
            {quantity}
          </div>

          <button onClick={increaseQuantity} className="flex-1 text-xl sm:text-2xl">
            +
          </button>
        </div>
      </div>

      <AddToCart onAddToCart={handleAddToCart} />

      <AddToWishlist onAddToWishlist={handleAddToWishlist} />

      <ProductAccordion />
    </div>
  );
};

export default ProductInfo;