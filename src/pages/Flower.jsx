import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageUrl";
import addToCart from "../utils/addToCart";

function Flower() {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFlowerProducts();
  }, []);

  const getFlowerProducts = async () => {
    try {
      const res = await axios.get(
        "https://greencare-backend.vercel.app/api/products/category/Flower"
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

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
            Flower Products
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(showAll ? products : products.slice(0, 8)).map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
               <img
  src={getImageUrl(product.image)}
  alt={product.name}
  className="w-full h-60 object-cover"
  onError={(e) => {
    e.target.src =
      "https://via.placeholder.com/400x400?text=No+Image";
  }}
/>

                <div className="p-4">
                  <h3 className="font-bold text-lg">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2 min-h-[70px]">
                    {product.description}
                  </p>

                  <p className="text-green-600 font-bold text-2xl mt-3">
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
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Flower;