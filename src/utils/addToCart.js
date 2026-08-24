import axios from "axios";

const addToCart = async (productId) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login first.");
    return false;
  }

  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login first.");
    return false;
  }

  try {
    const res = await axios.post(
      "https://greencare-backend.vercel.app/api/cart",
      {
        productId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(res.data.message);
    return true;

  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Something went wrong"
    );

    return false;
  }
};

export default addToCart;