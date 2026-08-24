import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const [shipping, setShipping] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "Zelle",
  });

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    try {

      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first.");
        navigate("/login");
        return;
      }

      const res = await axios.get(
        "https://greencare-backend.vercel.app/api/cart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCart(res.data.cart);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  const handleChange = (e) => {

    setShipping({
      ...shipping,
      [e.target.name]: e.target.value,
    });

  };

  const total = cart.reduce(
    (sum, item) =>
      sum + (item.product?.price || 0) * item.quantity,
    0
  );
   const placeOrder = async () => {
  if (
    !shipping.fullName ||
    !shipping.email ||
    !shipping.phone ||
    !shipping.address ||
    !shipping.city ||
    !shipping.state ||
    !shipping.zipCode
  ) {
    alert("Please fill all shipping details.");
    return;
  }

  try {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      "https://greencare-backend.vercel.app/api/orders",
      {
        fullName: shipping.fullName,
        email: shipping.email,
        phone: shipping.phone,
        address: shipping.address,
        city: shipping.city,
        state: shipping.state,
        zipCode: shipping.zipCode,
        paymentMethod: shipping.paymentMethod,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(res.data.message);

    navigate("/");

  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message ||
      "Something went wrong"
    );
  }
};

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold text-green-700">
            Loading Checkout...
          </h1>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">

        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Shipping Form */}

          <div className="bg-white shadow-lg rounded-xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Shipping Information
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={shipping.fullName}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={shipping.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={shipping.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={shipping.address}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={shipping.city}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                value={shipping.state}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                value={shipping.zipCode}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <div className="mt-6">

                <h3 className="text-xl font-bold mb-4">
                  Payment Method
                </h3>

                <div className="space-y-3">

                  {["Zelle", "Chime", "Apple Pay", "PayPal"].map((method) => (
                    <label
                      key={method}
                      className="flex items-center gap-3"
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        checked={shipping.paymentMethod === method}
                        onChange={handleChange}
                      />

                      {method}
                    </label>
                  ))}

                </div>

              </div>

            </div>

          </div>
                    {/* Order Summary */}

          <div className="bg-white shadow-lg rounded-xl p-8 h-fit">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            {cart.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <h3 className="font-semibold">
                    {item.product?.name}
                  </h3>

                  <p className="text-gray-500">
                    Qty : {item.quantity}
                  </p>
                </div>

                <p className="font-bold text-green-600">
                  $
                  {(
                    (item.product?.price || 0) *
                    item.quantity
                  ).toFixed(2)}
                </p>
              </div>
            ))}

            <div className="mt-8 border-t pt-6">

              <div className="flex justify-between text-lg">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-lg mt-3">
                <span>Delivery</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between text-2xl font-bold mt-6 text-green-700">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={placeOrder}
                className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg text-lg font-semibold"
              >
                Place Order
              </button>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </>
  );

}

export default Checkout;