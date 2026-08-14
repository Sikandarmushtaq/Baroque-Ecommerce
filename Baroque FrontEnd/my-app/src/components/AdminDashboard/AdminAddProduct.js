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
        "http://localhost:3000/product/getallproducts"
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
          `http://localhost:3000/product/updateproduct/${editingId}`,
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
          "http://localhost:3000/product/addproduct",
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
        `http://localhost:3000/product/deleteproduct/${productId}`,
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
    <section className="max-w-3xl px-6 py-20 mx-auto">

      <h1 className="text-3xl tracking-[5px] mb-10">
        {editingId ? "EDIT PRODUCT" : "ADD NEW PRODUCT"}
      </h1>

  

      <form onSubmit={handleSubmit} className="mb-16 space-y-6">

        <div>
          <label className="block mb-2 text-sm text-gray-500">
            Product Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-3 border border-gray-300"
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
            className="w-full px-4 py-4 border border-gray-300 outline-none focus:border-black"
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
            className="w-full px-4 py-4 border border-gray-300 outline-none focus:border-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#1f1f1f] text-white tracking-[3px] py-4 hover:bg-black transition"
        >
          {editingId ? "UPDATE PRODUCT" : "SAVE PRODUCT"}
        </button>

      </form>

   

      <h2 className="text-2xl tracking-[4px] mb-6">
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
              className="flex items-center justify-between p-4 border rounded-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-16 h-20 rounded-lg"
                />

                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">
                    PKR {product.price}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(product)}
                  className="px-4 py-2 text-sm transition border rounded-full hover:bg-black hover:text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(product._id)}
                  className="px-4 py-2 text-sm text-red-600 transition border rounded-full hover:bg-red-600 hover:text-white"
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