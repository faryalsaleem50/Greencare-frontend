import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageUrl";
import API from "../api/axios";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      const res = await API.get("/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCart(res.data.cart);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const increaseQty = async (id, quantity) => {
    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/cart/${id}`,
        {
          quantity: quantity + 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  const decreaseQty = async (id, quantity) => {
    if (quantity <= 1) return;

    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/cart/${id}`,
        {
          quantity: quantity - 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + (item.product?.price || 0) * item.quantity,
    0
  );

  const checkout = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    navigate("/checkout");
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold text-green-700">
            Loading Cart...
          </h1>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-500">
              Your Cart is Empty 🛒
            </h2>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="bg-white shadow rounded-xl p-5 flex flex-col md:flex-row items-center gap-6"
                >
                  <img
                    src={getImageUrl(item.product.image)}
                    alt={item.product.name}
                    className="w-36 h-36 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h2 className="text-2xl font-bold">
                      {item.product.name}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() =>
                          decreaseQty(item._id, item.quantity)
                        }
                        className="bg-gray-200 px-4 py-2 rounded"
                      >
                        -
                      </button>

                      <span className="font-bold text-lg">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQty(item._id, item.quantity)
                        }
                        className="bg-gray-200 px-4 py-2 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-xl mb-4">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      onClick={() => removeItem(item._id)}
                      className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-white shadow rounded-xl p-8 text-right">
              <h2 className="text-3xl font-bold">
                Total : ${total.toFixed(2)}
              </h2>

              <button
                onClick={checkout}
                className="mt-6 bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-lg font-semibold"
              >
                Proceed To Checkout
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;