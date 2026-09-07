import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactImage from "../assets/contact.png";

function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full h-64 md:h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${contactImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative flex items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">

            {/* Left Side */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-green-600">
                Customer Service
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Welcome to Green Care Cannabis Dispensary, where we work every
                day to provide our customers with an unrivaled shopping
                experience. Our budtenders are highly knowledgeable to help you
                select the product you need.
              </p>

              <h3 className="text-xl font-bold text-gray-800">
                Contact Info
              </h3>

              <p className="text-gray-600">
                <strong>Business Hours:</strong> 24/7 A Week
              </p>

              <p>
                <a
                  href="mailto:info@greencarecannabisdispensary.com"
                  className="text-green-600 hover:underline"
                >
                  akulicreation1@gmail.com
                </a>
              </p>

              <p className="text-gray-600">
                We’re Here for You.
              </p>

              <div>
                <h5 className="font-semibold mb-2">
                  For Contact
                </h5>

                <a
                  href="tel:+12138767356"
                  className="text-lg font-semibold text-blue-800 hover:text-green-600"
                >
                  📞 +1 (213) 876-7356
                </a>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="md:w-1/2">
              <form className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">
                  Send a Message
                </h3>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border rounded-lg px-3 py-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>

                  <textarea
                    rows="4"
                    className="w-full border rounded-lg px-3 py-2"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;