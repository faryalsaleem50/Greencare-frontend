import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import hero from "../assets/hero.jpg";
import Footer from "../components/Footer";
import delieveryImage from "../assets/delievery.png";
import wellnessImage from "../assets/wellness.png";
import flowerImage from "../assets/flower.png";
import edibleImage from "../assets/edible.png";
import cbdImage from "../assets/cbd.png";
import concentratesImage from "../assets/concentrates.png";
import vaporizerImage from "../assets/vaporizer.png";
import preRollsImage from "../assets/pre-rolls.png";
import catridgesImage from "../assets/catridges.png";




function Home() {
  const [showTestimonial, setShowTestimonial] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTestimonial(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative flex items-center justify-center h-full text-center text-white px-4">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Welcome to Green leaf Cannabis Dispensary
              </h1>

              <button className="mt-4 bg-blue-800 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-800 transition shadow-lg">
                Shop Online Now
              </button>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="w-full bg-blue-800 py-40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                The Best Cannabis Experience
              </h2>

              <h4 className="text-xl mb-2 font-bold text-white">
                Excellent
              </h4>

              <div className="flex items-center justify-center space-x-1 text-yellow-400 text-lg">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <p className="text-white mt-1 font-bold">
                Based on 2765 reviews
              </p>
            </div>

            <div className="flex overflow-x-auto space-x-6 pb-4">
              <div className="min-w-[300px] bg-white rounded-lg shadow-lg p-9">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Sarah M.
                </h4>
                <p className="text-sm text-gray-600">
                  The staff is incredibly knowledgeable and the products are always fresh.
                </p>
              </div>

              <div className="min-w-[280px] bg-white rounded-lg shadow-lg p-5">
                <h4 className="font-semibold text-gray-800 mb-2">
                  James L.
                </h4>
                <p className="text-sm text-gray-600">
                  Clean, professional, and welcoming environment.
                </p>
              </div>

              <div className="min-w-[280px] bg-white rounded-lg shadow-lg p-5">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Linda K.
                </h4>
                <p className="text-sm text-gray-600">
                  Great selection and excellent customer service.
                </p>
              </div>

              <div className="min-w-[280px] bg-white rounded-lg shadow-lg p-5">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Mark T.
                </h4>
                <p className="text-sm text-gray-600">
                  Fast online ordering and smooth pickup.
                </p>
              </div>

              {showTestimonial && (
                <div className="min-w-[280px] bg-white rounded-lg shadow-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Anna R.
                  </h4>
                  <p className="text-sm text-gray-600">
                    Friendly staff and a wide variety of products.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* Cannabis Delivered To Your Door */}
<section className="w-full bg-gray-50 py-16">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-10">

      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Same day express delivery 1-2h, 24/7 7 days a week.
        </h2>

        <h3 className="text-2xl md:text-3xl font-bold text-green-800">
          CANNABIS DELIVERED TO YOUR DOOR
        </h3>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 leading-relaxed">
            Cannabis delivered right to your doorstep? You bet! With Us, it’s easy.
            Select our dispensary’s online menu offering same-day express delivery
            for all your cannabis needs. With just a few clicks of a button,
            you can order a wide assortment of premium cannabis products to be
            delivered, generally within the hour, all at an affordable price.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Our staff of discreet drivers and exceptional customer service staff
            will ensure that your delivery will be smooth, no matter the situation.
            Time to wait (not so) patiently. Once your order is on the way,
            you’ll receive a tracking link and updates on the expected arrival time.
          </p>

          <a
            href="#"
            className="inline-block mt-6 bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-900 transition"
          >
            All Delivery Menu
          </a>
        </div>
      </div>

      {/* Right Image */}
       {/* Right Image */}
      <div className="md:w-1/2">
        <img
          src={delieveryImage}
          alt="Cannabis Delivery"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>


    </div>
  </div>
</section>

        {/* Shop By Category */}
<section className="w-full bg-blue-800 py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-white mb-12">
      Shop By Category
    </h2>

    {/* Top Row */}
    <div className="flex flex-wrap justify-center gap-8 mb-12">
      <a href="#" className="group flex-1 min-w-[220px] max-w-[280px] flex flex-col items-center">
        <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-2xl transition">
          <img
            src={flowerImage}
            alt="Flower"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <span className="mt-3 text-white font-semibold">Flower</span>
      </a>

      <a href="#" className="group flex-1 min-w-[220px] max-w-[280px] flex flex-col items-center">
        <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-2xl transition">
          <img
            src={edibleImage}
            alt="Edibles"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <span className="mt-3 text-white font-semibold">Edibles</span>
      </a>

      <a href="#" className="group flex-1 min-w-[220px] max-w-[280px] flex flex-col items-center">
        <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-2xl transition">
          <img
            src={cbdImage}
            alt="CDM"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <span className="mt-3 text-white font-semibold">CDM</span>
      </a>

      <a href="#" className="group flex-1 min-w-[220px] max-w-[280px] flex flex-col items-center">
        <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-2xl transition">
          <img
            src={concentratesImage}
            alt="Concentrates"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <span className="mt-3 text-white font-semibold">Concentrates</span>
      </a>
    </div>

    {/* Bottom Row */}
    <div className="flex flex-wrap justify-center gap-8">
      <a href="#" className="group flex-1 min-w-[220px] max-w-[280px] flex flex-col items-center">
        <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-2xl transition">
          <img
            src={vaporizerImage}
            alt="Vaporizers"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <span className="mt-3 text-white font-semibold">Vaporizers</span>
      </a>

      <a href="#" className="group flex-1 min-w-[220px] max-w-[280px] flex flex-col items-center">
        <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-2xl transition">
          <img
            src={preRollsImage}
            alt="Pre Rolls"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <span className="mt-3 text-white font-semibold">Pre-Rolls</span>
      </a>

      <a href="#" className="group flex-1 min-w-[220px] max-w-[280px] flex flex-col items-center">
        <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-2xl transition">
          <img
            src={catridgesImage}
            alt="Cartridges"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <span className="mt-3 text-white font-semibold">Cartridges</span>
      </a>
    </div>
  </div>
</section>

{/* Shop Premium Cannabis */}
<section className="w-full bg-gray-50 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-green-600 mb-12">
      Shop Premium Cannabis
    </h2>

    {/* Row 1 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="https://www.greencarecannabisdispensary.com/wp-content/uploads/2022/08/71d4c91b-4a22-4c20-8d9d-3684b4625991.webp"
          alt="Purple Thunder"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-green-600 mb-1">
            Purple Thunder
          </h3>
          <p className="text-gray-800 font-bold">
            $80.00 – $1,400.00
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="https://www.greencarecannabisdispensary.com/wp-content/uploads/2022/08/G13.webp"
          alt="G13"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-green-600 mb-1">
            G13
          </h3>
          <p className="text-gray-800 font-bold">
            $85.00 – $1,200.00
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="https://www.greencarecannabisdispensary.com/wp-content/uploads/2022/08/KOA-Banana-Cream-x-Jealousy-10-ct.-Infused-Pre-Rolls-600x600-1.webp"
          alt="KOA Banana Cream"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-green-600 mb-1">
            KOA Banana Cream x Jealousy
          </h3>
          <p className="text-gray-800 font-bold">
            $32.99
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="https://www.greencarecannabisdispensary.com/wp-content/uploads/2022/08/Lowell-Smokes.webp"
          alt="Lowell Smokes"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-green-600 mb-1">
            Lowell Smokes
          </h3>
          <p className="text-gray-800 font-bold">
            $50.00
          </p>
        </div>
      </div>

    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="https://www.greencarecannabisdispensary.com/wp-content/uploads/2022/08/NORTHERN-NIGHTS.webp"
          alt="Northern Nights"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-green-600 mb-1">
            NORTHERN NIGHTS
          </h3>
          <p className="text-gray-800 font-bold">
            $80.00 – $1,450.00
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="https://www.greencarecannabisdispensary.com/wp-content/uploads/2022/08/PLUS-Mango-CBD-relief-gummies.webp"
          alt="CBD Gummies"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-green-600 mb-1">
            CBD Relief Tropical Mango Gummies
          </h3>
          <p className="text-gray-800 font-bold">
            $25.00
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="https://www.greencarecannabisdispensary.com/wp-content/uploads/2022/08/Satori-Dark-Chocolate-Almonds-CBD.webp"
          alt="Dark Chocolate Almonds"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-green-600 mb-1">
            Dark Chocolate Sweet & Salty Almonds
          </h3>
          <p className="text-gray-800 font-bold">
            $30.00
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="https://www.greencarecannabisdispensary.com/wp-content/uploads/2022/08/Dr-Norms-Cookies-Snickerdoodle-10mg.webp"
          alt="Snickerdoodle Cookies"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-green-600 mb-1">
            Gluten Free Snickerdoodle Cookies
          </h3>
          <p className="text-gray-800 font-bold">
            $30.00
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Maximize Your Wellness Section */}
<section className="w-full bg-green-600 py-16">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-10">

      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Maximize Your Wellness with Green leaf Cannabis Dispensary
        </h2>

        <p className="text-lg leading-relaxed">
          At Green leaf Cannabis Dispensary, we believe in a holistic approach
          to wellness. Our carefully curated selection of premium cannabis
          products is designed to support your physical, mental, and emotional
          well-being.
        </p>

        <p className="text-lg leading-relaxed">
          From expert guidance to discreet delivery, we’re here to help you
          find the right products for your lifestyle. Whether you’re looking
          for relaxation, pain relief, or a better night’s sleep, Green leaf
          has something for you.
        </p>

       <Link
  to="/about"
  className="inline-block mt-6 bg-white text-blue-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
>
  Read More
</Link>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2">
        <img
          src={wellnessImage}
          alt="Wellness"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

    </div>
  </div>
</section>

      </main>
      <Footer />
    </>
  );
  
}

export default Home;
