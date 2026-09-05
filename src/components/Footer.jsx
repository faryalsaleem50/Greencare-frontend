import logoImage from "../assets/logo.png";

function Footer() {
  return (
    <footer className="w-full bg-blue-950 py-24 text-white">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[400px]">

        <div className="mb-10">
          <img
            src={logoImage}
            alt="Green Care Cannabis Dispensary"
            className="h-28 md:h-36 object-contain mx-auto"
          />
        </div>

        <p className="text-xl md:text-2xl font-medium mb-8 text-center max-w-3xl leading-relaxed">
          Green Care Cannabis Dispensary – Quality products, expert staff,
          and a welcoming environment.
        </p>

        <div className="mt-4 text-center">
          <h5 className="text-lg font-semibold mb-2">
            For Contact
          </h5>

          <a
            href="tel:+16125642170"
            className="text-lg font-semibold hover:text-blue-300"
          >
            📞 (612) 564-2170
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-lg my-8">
          <a href="#" className="hover:text-blue-100 transition">
            About Us
          </a>

          <a href="#" className="hover:text-blue-100 transition">
            Shop Menu
          </a>

          <a href="#" className="hover:text-blue-100 transition">
            Contact Us
          </a>

          <a href="#" className="hover:text-blue-100 transition">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-blue-100 transition">
            Terms of Service
          </a>
        </div>

        <p className="text-base text-blue-100 text-center">
          © 2026 Green Care Cannabis Dispensary. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;