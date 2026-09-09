import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import getImageUrl from "../../utils/imageUrl";
import API from "../../api/axios";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    try {
      const res = await API.get(`/products/${id}`);

      const product = res.data.product;

      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
      });

      setPreview(getImageUrl(product.image));
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Product Not Found",
      });

      navigate("/admin/products");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("category", formData.category);

      if (image) {
        data.append("image", image);
      }

      const token = localStorage.getItem("token");

      if (!token) {
        Swal.fire({
          icon: "error",
          title: "Please login first",
        });
        return;
      }

      const res = await API.put(`/products/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      Swal.fire({
        icon: "success",
        title: res.data.message,
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/admin/products");
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: error.response?.data?.message || "Update Failed",
      });
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl">

      <h1 className="text-3xl font-bold mb-8">
        Edit Product
      </h1>

      <form
        onSubmit={updateProduct}
        className="space-y-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="w-full border p-3 rounded"
          value={formData.name}
          onChange={handleChange}
        />

        <textarea
          name="description"
          rows="4"
          placeholder="Description"
          className="w-full border p-3 rounded"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full border p-3 rounded"
          value={formData.price}
          onChange={handleChange}
        />

        <select
          name="category"
          className="w-full border p-3 rounded"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Flower">Flower</option>
          <option value="Edibles">Edibles</option>
          <option value="Concentrates">Concentrates</option>
          <option value="CBD">CBD</option>
          <option value="Cartridges">Cartridges</option>
          <option value="Pre-Rolls">Pre-Rolls</option>
          <option value="Vaporizers">Vaporizers</option>
        </select>

        <div>
          <label className="block font-semibold mb-2">
            Product Image
          </label>

          <input
            type="file"
            accept="image/*"
            className="w-full border p-3 rounded"
            onChange={handleImage}
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-4 w-52 h-52 object-cover rounded-lg border"
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700 transition"
        >
          Save Changes
        </button>

      </form>

    </div>
  );
}

export default EditProduct;