import { useEffect, useState } from "react";
import API from "../../api/axios";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
    getUsers();
    getOrders();
  }, []);

  const getProducts = async () => {
    try {
      const res = await API.get("/products");

      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const res = await API.get("/auth/users");

      setUsers(res.data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrders(res.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  const categories = [
    ...new Set(products.map((item) => item.category)),
  ];

  if (loading) {
    return (
      <h1 className="text-3xl font-bold">
        Loading Dashboard...
      </h1>
    );
  }

  return (
    <div>
      <h1
        className="
        text-3xl
        sm:text-4xl
        font-bold
        mb-8
        "
      >
        Dashboard
      </h1>

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        "
      >

        {/* Total Products */}
        <div
          className="
          bg-white
          p-6
          rounded-xl
          shadow
          hover:shadow-lg
          transition
          "
        >
          <h2 className="text-gray-500">
            Total Products
          </h2>

          <p
            className="
            text-4xl
            font-bold
            text-green-700
            mt-3
            "
          >
            {products.length}
          </p>
        </div>

        {/* Categories */}
        <div
          className="
          bg-white
          p-6
          rounded-xl
          shadow
          hover:shadow-lg
          transition
          "
        >
          <h2 className="text-gray-500">
            Categories
          </h2>

          <p
            className="
            text-4xl
            font-bold
            text-green-700
            mt-3
            "
          >
            {categories.length}
          </p>
        </div>

        {/* Orders */}
        <div
          className="
          bg-white
          p-6
          rounded-xl
          shadow
          hover:shadow-lg
          transition
          "
        >
          <h2 className="text-gray-500">
            Orders
          </h2>

          <p
            className="
            text-4xl
            font-bold
            text-green-700
            mt-3
            "
          >
            {orders.length}
          </p>
        </div>

        {/* Users */}
        <div
          className="
          bg-white
          p-6
          rounded-xl
          shadow
          hover:shadow-lg
          transition
          "
        >
          <h2 className="text-gray-500">
            Users
          </h2>

          <p
            className="
            text-4xl
            font-bold
            text-green-700
            mt-3
            "
          >
            {users.length}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;