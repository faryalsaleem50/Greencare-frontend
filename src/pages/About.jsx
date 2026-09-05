import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cannabisImage from "../assets/cannabis.png";
import aboutImage from "../assets/about.png";

function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
   <section
  className="relative w-full h-64 md:h-80 bg-cover bg-center"
  style={{
    backgroundImage: `url(${aboutImage})`,
  }}
>
  <div className="absolute inset-0 bg-black/20"></div>

  <div className="relative flex items-center justify-center h-full text-center text-white px-4">
    <h1 className="text-3xl md:text-4xl font-bold">
      About Us
    </h1>
  </div>
</section>

      {/* About Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* Text */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-green-600">
                The Best Caring Cannabis Dispensary
              </h2>

              <h3 className="text-2xl font-bold text-green-400">
                ABOUT US
              </h3>

              <p className="text-gray-600 leading-relaxed">
                At Green Care Cannabis Dispensary, we believe in the
                power of cannabis to help people live their best lives.
                Our team is dedicated to providing you with a personalized
                experience that’s tailored to your needs.
              </p>

              <p className="text-gray-600 leading-relaxed">
                We’re locally & family owned and operated, and our
                budtenders are hand-selected for their knowledge and
                training. The experience you have at one of our locations
                is unlike anything else out there — we have a selection
                that can’t be beat, and prices that are unmatched by
                other dispensaries.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our goal is to provide quality lab-tested products for
                holistic medicine. We want every patient to leave feeling
                like they’ve had a custom experience created just for them.
                That’s why we’re always working on new ways to offer more
                options and better services.
              </p>
            </div>

            {/* Image */}
{/* Image */}
<div className="md:w-1/2">
  <img
    src={cannabisImage}
    alt="Our Dispensary"
    className="w-full max-h-[500px] object-cover rounded-lg shadow-lg"
  />
</div>
          </div>
        </div>
      </section>

      {/* Knowledgeable Staff & Products */}
      <section className="w-full bg-green-800 py-16 text-white">
        <div className="container mx-auto px-4">

          {/* Knowledgeable Staff */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-green-300 mb-4">
              Knowledgeable Staff
            </h2>

            <p className="leading-relaxed">
              Stepping into the world of cannabis can feel overwhelming,
              but starting your journey with the experts at Green Care
              Cannabis Dispensary means it doesn’t have to be. Each of
              our locations offers a large selection of products, and
              we put our customers first every day.
            </p>

            <p className="leading-relaxed mt-4">
              Our experienced staff will pair you with the right
              product for your lifestyle and needs. We take the time
              to educate you so you truly understand the options
              available and feel confident in your selections.
            </p>
          </div>

          {/* Quality Products */}
          <div>
            <h2 className="text-3xl font-bold text-green-300 mb-4">
              Quality Products
            </h2>

            <p className="leading-relaxed mb-4">
              The products sold in our stores are high-quality cannabis
              products that have been carefully selected to ensure you
              receive a safe and consistent experience every time.
            </p>

            <p className="leading-relaxed">
              Whether it’s edibles, concentrates, cannabis oil, or
              classic flower, all of our suppliers meet strict quality
              standards. We partner with top-tier brands to ensure
              you consistently have the best experience.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;