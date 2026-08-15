import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminAddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);

  const adminToken = localStorage.getItem("adminToken");


  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://baroque-ecommerce.onrender.com/product/getallproducts"
      );

      if (response.data.status === "success") {
        setProducts(response.data.products);
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
    getProducts();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);

    if (image) {
      formData.append("image", image);
    }

    try {
      if (editingId) {
      
        await axios.put(
          `https://baroque-ecommerce.onrender.com/product/updateproduct/${editingId}`,
          formData,
          {
            headers: {
              Authorization: adminToken,
            },
          }
        );

        alert("Product update ho gaya");
      } else {
       
        await axios.post(
          "https://baroque-ecommerce.onrender.com/product/addproduct",
          formData,
          {
            headers: {
              Authorization: adminToken,
            },
          }
        );

        alert("Product add ho gaya");
      }

    
      setName("");
      setPrice("");
      setImage(null);
      setEditingId(null);

   
      getProducts();
    } catch (err) {
      console.log(err.message);
      alert("Kuchissue hai");
        if (err.response?.status === 401) {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  }
    }
  };

  const handleEdit = (product) => {
    setEditingId(product._id);
    setName(product.name);
    setPrice(product.price);
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `https://baroque-ecommerce.onrender.com/product/deleteproduct/${productId}`,
        {
          headers: {
            Authorization: adminToken,
          },
        }
      );

      getProducts();
    } catch (err) {
      console.log(err.message);
        if (err.response?.status === 401) {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  }
    }
  };

  return (
    <section className="max-w-3xl px-4 py-10 mx-auto sm:px-6 sm:py-20">

      <h1 className="mb-6 text-2xl tracking-[3px] sm:mb-10 sm:text-3xl sm:tracking-[5px]">
        {editingId ? "EDIT PRODUCT" : "ADD NEW PRODUCT"}
      </h1>

  

      <form onSubmit={handleSubmit} className="mb-12 space-y-5 sm:mb-16 sm:space-y-6">

        <div>
          <label className="block mb-2 text-sm text-gray-500">
            Product Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2.5 text-sm border border-gray-300 sm:px-4 sm:py-3 sm:text-base"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-500">
            Product Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-3 text-sm border border-gray-300 outline-none sm:px-4 sm:py-4 sm:text-base focus:border-black"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-500">
            Price
          </label>

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-3 text-sm border border-gray-300 outline-none sm:px-4 sm:py-4 sm:text-base focus:border-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#1f1f1f] text-white tracking-[2px] sm:tracking-[3px] py-3.5 sm:py-4 text-sm sm:text-base hover:bg-black transition"
        >
          {editingId ? "UPDATE PRODUCT" : "SAVE PRODUCT"}
        </button>

      </form>

   

      <h2 className="mb-4 text-xl tracking-[3px] sm:mb-6 sm:text-2xl sm:tracking-[4px]">
        MY PRODUCTS
      </h2>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500">No products added yet.</p>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col gap-4 p-4 border rounded-xl sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="flex-shrink-0 object-cover w-16 h-20 rounded-lg"
                />

                <div className="min-w-0">
                  <p className="font-medium truncate">{product.name}</p>
                  <p className="text-sm text-gray-500">
                    PKR {product.price}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(product)}
                  className="flex-1 px-4 py-2 text-sm transition border rounded-full sm:flex-none hover:bg-black hover:text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(product._id)}
                  className="flex-1 px-4 py-2 text-sm text-red-600 transition border rounded-full sm:flex-none hover:bg-red-600 hover:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </section>
  );
};

export default AdminAddProduct;