import { useState } from "react";
import API from "../../api/axios";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
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

      const res = await API.post("/products", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert(res.data.message);

      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
      });

      setImage(null);
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="bg-white p-5 sm:p-8 rounded-xl shadow-md w-full">

      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">
            Select Category
          </option>

          <option value="Flower">
            Flowers
          </option>

          <option value="Edibles">
            Edibles
          </option>

          <option value="Concentrates">
            Concentrates
          </option>

          <option value="CBD">
            CBD
          </option>

          <option value="Cartridges">
            Cartridges
          </option>

          <option value="Pre-Rolls">
            Pre-Rolls
          </option>

          <option value="Vaporizers">
            Vaporizers
          </option>
        </select>

        <div>

          <label className="block font-semibold mb-2">
            Product Image
          </label>

          <input
            type="file"
            accept="image/*"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setImage(e.target.files[0])}
          />

          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="mt-4 w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-lg border"
            />
          )}

        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Add Product
        </button>

      </form>

    </div>
  );
}

export default AddProduct;