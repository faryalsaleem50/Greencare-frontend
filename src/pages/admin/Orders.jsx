import { useEffect, useState } from "react";
import API from "../../api/axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrders(res.data.orders || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Search by customer name or email
  const filteredOrders = orders.filter((order) => {
    const name = order.fullName?.toLowerCase() || "";
    const email = order.email?.toLowerCase() || "";
    const searchText = search.toLowerCase();

    return (
      name.includes(searchText) ||
      email.includes(searchText)
    );
  });

  // Payment Status Update
  const updatePaymentStatus = async (orderId, paymentStatus) => {
    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/orders/${orderId}`,
        { paymentStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId
            ? { ...order, paymentStatus }
            : order
        )
      );
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Payment status update failed"
      );
    }
  };

  // Order Status Update
  const updateOrderStatus = async (orderId, orderStatus) => {
    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/orders/${orderId}`,
        { status: orderStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId
            ? { ...order, orderStatus }
            : order
        )
      );
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Order status update failed"
      );
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h1 className="text-3xl font-bold text-green-700">
          Loading Orders...
        </h1>
      </div>
    );
  }

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-8">
        Orders Management
      </h1>

      {/* Search Bar */}
      {orders.length > 0 && (
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search orders by customer name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>
      )}

      {orders.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-600">
            No orders found.
          </h2>
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-600">
            No matching orders found.
          </h2>
        </div>
      ) : (
        <div className="space-y-8">

          {filteredOrders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-xl shadow-lg p-6 border"
            >

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Customer */}
                <div>
                  <p className="text-gray-500 text-sm">
                    Customer
                  </p>

                  <h2 className="font-bold text-lg">
                    {order.fullName}
                  </h2>
                </div>

                {/* Email */}
                <div>
                  <p className="text-gray-500 text-sm">
                    Email
                  </p>

                  <h2>{order.email}</h2>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-gray-500 text-sm">
                    Phone
                  </p>

                  <h2>{order.phone}</h2>
                </div>

                {/* Total */}
                <div>
                  <p className="text-gray-500 text-sm">
                    Total
                  </p>

                  <h2 className="font-bold text-green-700">
                    ${Number(order.totalAmount).toFixed(2)}
                  </h2>
                </div>

                {/* Payment Method */}
                <div>
                  <p className="text-gray-500 text-sm">
                    Payment Method
                  </p>

                  <h2>{order.paymentMethod}</h2>
                </div>

                {/* PAYMENT STATUS DROPDOWN */}
                <div>
                  <p className="text-gray-500 text-sm mb-2">
                    Payment Status
                  </p>

                  <select
                    value={order.paymentStatus || "Pending"}
                    onChange={(e) =>
                      updatePaymentStatus(
                        order._id,
                        e.target.value
                      )
                    }
                    className={`border rounded-lg px-3 py-2 font-semibold outline-none ${
                      order.paymentStatus === "Received"
                        ? "bg-green-100 text-green-700 border-green-300"
                        : "bg-yellow-100 text-yellow-700 border-yellow-300"
                    }`}
                  >
                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Received">
                      Received
                    </option>
                  </select>
                </div>

                {/* ORDER STATUS DROPDOWN */}
                <div>
                  <p className="text-gray-500 text-sm mb-2">
                    Order Status
                  </p>

                  <select
                    value={order.orderStatus || "Pending"}
                    onChange={(e) =>
                      updateOrderStatus(
                        order._id,
                        e.target.value
                      )
                    }
                    className={`border rounded-lg px-3 py-2 font-semibold outline-none ${
                      order.orderStatus === "Delivered"
                        ? "bg-green-100 text-green-700 border-green-300"
                        : order.orderStatus === "Cancelled"
                        ? "bg-red-100 text-red-700 border-red-300"
                        : order.orderStatus === "Preparing"
                        ? "bg-blue-100 text-blue-700 border-blue-300"
                        : order.orderStatus === "Shipped"
                        ? "bg-purple-100 text-purple-700 border-purple-300"
                        : "bg-yellow-100 text-yellow-700 border-yellow-300"
                    }`}
                  >
                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Preparing">
                      Preparing
                    </option>

                    <option value="Shipped">
                      Shipped
                    </option>

                    <option value="Delivered">
                      Delivered
                    </option>

                    <option value="Cancelled">
                      Cancelled
                    </option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <p className="text-gray-500 text-sm">
                    Date
                  </p>

                  <h2>
                    {new Date(
                      order.createdAt
                    ).toLocaleDateString()}
                  </h2>
                </div>

              </div>

              <hr className="my-6" />

              {/* Shipping Address */}
              <h3 className="text-xl font-bold mb-4">
                Shipping Address
              </h3>

              <p>
                {order.address}, {order.city},{" "}
                {order.state} - {order.zipCode}
              </p>

              <hr className="my-6" />

              {/* Products */}
              <h3 className="text-xl font-bold mb-4">
                Ordered Products
              </h3>

              <div className="overflow-x-auto">

                <table className="w-full border">

                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th className="p-3">
                        Product
                      </th>

                      <th className="p-3">
                        Price
                      </th>

                      <th className="p-3">
                        Qty
                      </th>

                      <th className="p-3">
                        Subtotal
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                    {order.products.map((item) => (
                      <tr
                        key={item._id}
                        className="border-b text-center"
                      >

                        <td className="p-3">
                          {item.product?.name || "Product"}
                        </td>

                        <td className="p-3">
                          ${Number(item.price).toFixed(2)}
                        </td>

                        <td className="p-3">
                          {item.quantity}
                        </td>

                        <td className="p-3 font-semibold text-green-700">
                          $
                          {(
                            item.price *
                            item.quantity
                          ).toFixed(2)}
                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Orders;