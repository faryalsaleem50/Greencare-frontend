import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageUrl";
import addToCart from "../utils/addToCart";
import API from "../api/axios";

function CDM() {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCBDProducts();
  }, []);

  const getCBDProducts = async () => {
    try {
      const res = await API.get(
        "/products/category/CBD"
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
          <h1 className="text-3xl font-bold text-pink-600">
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
            CBD Products
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(showAll ? products : products.slice(0, 16)).map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
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

                <div className="p-5">
                  <h3 className="text-lg font-semibold">
                    {product.name}
                  </h3>

                  {product.description && (
                    <p className="text-gray-600 text-sm mt-2">
                      {product.description}
                    </p>
                  )}

                  <p className="text-pink-600 font-bold text-xl mt-3">
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

          {products.length > 16 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition"
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

export default CDM;