import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Products() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen py-16 bg-gray-100">
        <div className="container mx-auto px-4">

          <h1 className="text-4xl font-bold text-center mb-10 text-green-700">
            Our Products
          </h1>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white shadow-lg rounded-xl p-5">
              <img
                src="https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=500"
                className="rounded-lg h-60 w-full object-cover"
              />

              <h2 className="text-xl font-bold mt-4">
                Premium Flower
              </h2>

              <p className="text-gray-600 my-2">
                High quality cannabis flower.
              </p>

              <h3 className="text-2xl font-bold text-green-600">
                $45
              </h3>

              <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
                Add To Cart
              </button>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Products;