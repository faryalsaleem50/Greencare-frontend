import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://greencare-backend.vercel.app/api/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrders(res.data.orders);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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

      <div className="space-y-8">

        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-xl shadow-lg p-6 border"
          >

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">              <div>
                <p className="text-gray-500 text-sm">
                  Customer
                </p>

                <h2 className="font-bold text-lg">
                  {order.fullName}
                </h2>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <h2>{order.email}</h2>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Phone
                </p>

                <h2>{order.phone}</h2>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Total
                </p>

                <h2 className="font-bold text-green-700">
                  ${order.totalAmount}
                </h2>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Payment Method
                </p>

                <h2>{order.paymentMethod}</h2>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Payment Status
                </p>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {order.paymentStatus}
                </span>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Order Status
                </p>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  {order.orderStatus}
                </span>
              </div>

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

            <h3 className="text-xl font-bold mb-4">
              Shipping Address
            </h3>

            <p>
              {order.address}, {order.city},{" "}
              {order.state} - {order.zipCode}
            </p>

            <hr className="my-6" />

            <h3 className="text-xl font-bold mb-4">
              Ordered Products
            </h3>

            <div className="overflow-x-auto">

              <table className="w-full border">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="p-3">Product</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Qty</th>
                    <th className="p-3">Subtotal</th>
                  </tr>
                </thead>

                <tbody>
                                      {order.products.map((item) => (
                    <tr
                      key={item._id}
                      className="border-b text-center"
                    >
                      <td className="p-3">
                        {item.product?.name}
                      </td>

                      <td className="p-3">
                        ${item.price}
                      </td>

                      <td className="p-3">
                        {item.quantity}
                      </td>

                      <td className="p-3 font-semibold text-green-700">
                        $
                        {(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
                