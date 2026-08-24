import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageUrl";
import addToCart from "../utils/addToCart";

export default function Concentrates() {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getConcentrates();
  }, []);

  const getConcentrates = async () => {
    try {
      const res = await axios.get(
        "https://greencare-backend.vercel.app/api/products/category/Concentrates"
      );

      setProducts(res.data.products);
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
            Loading Products...
          </h1>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
          Concentrates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(showAll ? products : products.slice(0, 8)).map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={getImageUrl(product.image)}
                alt={product.name}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x400?text=No+Image";
                }}
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg min-h-[60px]">
                  {product.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {product.description}
                </p>

                <p className="text-green-600 font-bold text-xl mt-3">
                  ${product.price}
                </p>

                <button
  onClick={() => addToCart(product._id)}
  className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
>
  Add To Cart
</button>
              </div>
            </div>
          ))}
        </div>

        {products.length > 8 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}