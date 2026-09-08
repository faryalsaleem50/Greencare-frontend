import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyOrders();
  }, []);

  const getMyOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/orders/my-orders`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrders(res.data.orders || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="flex justify-center items-center h-[70vh]">
          <h1 className="text-3xl font-bold text-green-700">
            Loading Your Orders...
          </h1>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* My Orders */}
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-green-800">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              You haven't placed any orders yet.
            </h2>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-xl shadow-lg p-5 sm:p-6"
              >
                {/* Order Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-gray-500 text-sm">
                      Order Date
                    </p>

                    <h2 className="font-bold text-lg">
                      {new Date(
                        order.createdAt
                      ).toLocaleDateString()}
                    </h2>
                  </div>

                  {/* Order Status */}
                  <div>
                    <p className="text-gray-500 text-sm">
                      Order Status
                    </p>

                    <span
                      className={`inline-block mt-1 px-4 py-2 rounded-full text-sm font-semibold ${
                        order.orderStatus === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.orderStatus === "Cancelled"
                          ? "bg-red-100 text-red-700"
                          : order.orderStatus === "Preparing"
                          ? "bg-blue-100 text-blue-700"
                          : order.orderStatus === "Shipped"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.orderStatus}
                    </span>
                  </div>

                  {/* Total */}
                  <div>
                    <p className="text-gray-500 text-sm">
                      Total
                    </p>

                    <h2 className="font-bold text-xl text-green-700">
                      ${Number(order.totalAmount).toFixed(2)}
                    </h2>
                  </div>
                </div>

                <hr className="my-5" />

                {/* Products */}
                <h3 className="text-xl font-bold mb-4">
                  What You Ordered
                </h3>

                <div className="space-y-4">
                  {order.products.map((item) => (
                    <div
                      key={item._id}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border rounded-lg p-4"
                    >
                      <div>
                        <h4 className="font-semibold text-lg">
                          {item.product?.name || "Product"}
                        </h4>

                        <p className="text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="text-gray-600">
                          ${Number(item.price).toFixed(2)} ×{" "}
                          {item.quantity}
                        </p>

                        <p className="font-bold text-green-700">
                          $
                          {(
                            item.price * item.quantity
                          ).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <hr className="my-6" />

                {/* Payment */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">
                      Payment Method
                    </p>

                    <p className="font-semibold">
                      {order.paymentMethod}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Payment Status
                    </p>

                    <span className="inline-block mt-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {order.paymentStatus}
                    </span>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="mt-5">
                  <p className="text-gray-500 text-sm">
                    Shipping Address
                  </p>

                  <p className="font-medium">
                    {order.address}, {order.city},{" "}
                    {order.state} - {order.zipCode}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default MyOrders;