import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageUrl";
import addToCart from "../utils/addToCart";

function Edibles() {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEdiblesProducts();
  }, []);

  const getEdiblesProducts = async () => {
    try {
      const res = await axios.get(
        "https://greencare-backend.vercel.app/api/products/category/Edibles"
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Edibles Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {(showAll ? products : products.slice(0, 6)).map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={getImageUrl(product.image)}
                  alt={product.name}
                  className="w-full h-72 object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x400?text=No+Image";
                  }}
                />

                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {product.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {product.description}
                  </p>

                  <p className="text-green-600 font-bold mt-3 text-xl">
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

          {products.length > 6 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Edibles;