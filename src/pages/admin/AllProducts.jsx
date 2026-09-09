import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import getImageUrl from "../../utils/imageUrl";
import API from "../../api/axios";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    const result = await Swal.fire({
      title: "Delete Product?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#dc2626",
      confirmButtonText: "Yes, Delete",
    });

    if (!result.isConfirmed) return;

    try {
      const token = localStorage.getItem("token");

      const res = await API.delete(`/products/${id}`, {
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

      getProducts();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
      });

      console.log(error);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="
      bg-white
      p-4
      sm:p-6
      rounded-xl
      shadow-lg
      "
    >
      {/* Header */}

      <div
        className="
        flex
        flex-col
        gap-4
        mb-6
        "
      >
        <div
          className="
          flex
          flex-col
          sm:flex-row
          justify-between
          gap-4
          "
        >
          <h1
            className="
            text-2xl
            sm:text-3xl
            font-bold
            "
          >
            All Products
          </h1>

          <span
            className="
            bg-green-600
            text-white
            px-4
            py-2
            rounded-lg
            w-fit
            "
          >
            Total: {products.length}
          </span>
        </div>

        {/* Search */}

        <input
          type="text"
          placeholder="Search product by name or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          border
          rounded-lg
          px-4
          py-3
          w-full
          sm:w-96
          focus:outline-none
          focus:ring-2
          focus:ring-green-600
          "
        />
      </div>

      {/* Desktop Table */}

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => (
              <tr
                key={product._id}
                className="
                border-b
                hover:bg-gray-50
                "
              >
                <td className="p-3">
                  <img
                    src={getImageUrl(product.image)}
                    alt={product.name}
                    className="
                    w-20
                    h-20
                    object-cover
                    rounded-lg
                    "
                  />
                </td>

                <td className="p-3 font-semibold">
                  {product.name}
                </td>

                <td className="p-3">
                  {product.category}
                </td>

                <td className="p-3 font-bold text-green-600">
                  ${product.price}
                </td>

                <td className="p-3">
                  <div className="flex justify-center gap-3">
                    <Link
                      to={`/admin/edit/${product._id}`}
                      className="
                      bg-blue-600
                      text-white
                      px-4
                      py-2
                      rounded
                      hover:bg-blue-700
                      "
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="
                      bg-red-600
                      text-white
                      px-4
                      py-2
                      rounded
                      hover:bg-red-700
                      "
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}

      <div
        className="
        md:hidden
        space-y-5
        "
      >
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="
            border
            rounded-xl
            p-4
            shadow
            "
          >
            <img
              src={getImageUrl(product.image)}
              alt={product.name}
              className="
              w-full
              h-52
              object-cover
              rounded-lg
              "
            />

            <h2
              className="
              font-bold
              text-lg
              mt-4
              "
            >
              {product.name}
            </h2>

            <p className="text-gray-600 mt-2">
              Category: {product.category}
            </p>

            <p
              className="
              text-green-600
              font-bold
              text-xl
              mt-2
              "
            >
              ${product.price}
            </p>

            <div
              className="
              flex
              gap-3
              mt-4
              "
            >
              <Link
                to={`/admin/edit/${product._id}`}
                className="
                flex-1
                text-center
                bg-blue-600
                text-white
                py-2
                rounded-lg
                "
              >
                Edit
              </Link>

              <button
                onClick={() => deleteProduct(product._id)}
                className="
                flex-1
                bg-red-600
                text-white
                py-2
                rounded-lg
                "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;