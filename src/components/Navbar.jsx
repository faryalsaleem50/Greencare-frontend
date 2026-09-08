import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.png";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [shopMenu, setShopMenu] = useState(false);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logout Successful");

    navigate("/login");
  };

  return (
    <>
      <div className="bg-blue-800 text-white text-sm py-2 font-bold text-center">
        Same day express delivery 1-2 Hour
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoImage}
              alt="GreenCare Cannabis Dispensary"
              className="h-12 md:h-14 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">

            <Link to="/" className="font-medium hover:text-green-500">
              Home
            </Link>

            <div className="relative group">
              <button className="font-medium hover:text-green-500 flex items-center">
                Shop Menu
              </button>

              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">

                <Link
                  to="/flower"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Flower
                </Link>

                <Link
                  to="/edibles"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Edibles
                </Link>

                <Link
                  to="/cdm"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  CDM
                </Link>

                <Link
                  to="/concentrates"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Concentrates
                </Link>

                <Link
                  to="/vaporizers"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Vaporizers
                </Link>

                <Link
                  to="/prerolls"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Pre-Rolls
                </Link>

                <Link
                  to="/cartridges"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Cartridges
                </Link>

              </div>
            </div>

            <Link
              to="/about"
              className="font-medium hover:text-green-500"
            >
              About Us
            </Link>

            <Link
              to="/cart"
              className="font-medium hover:text-green-500"
            >
              Add to Cart
            </Link>

            <Link
  to="/my-orders"
  className="font-semibold text-black-800"
>
  My Orders
</Link>

            {/* Login / Logout */}

            {user ? (
              <>
                <span className="text-green-600 font-semibold">
                  👤 {user.name}
                </span>

                <button
                  onClick={handleLogout}
                  className="font-medium text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-medium hover:text-green-500"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="font-medium hover:text-green-500"
                >
                  Sign Up
                </Link>
              </>
            )}

            <Link
              to="/contact"
              className="font-medium hover:text-green-500"
            >
              Contact Us
            </Link>

          </div>

          {/* Phone */}

          <div className="hidden md:flex items-center">
            <a
              href="tel:+16125642170"
              className="font-semibold text-blue-800"
            >
              📞 +1 (213) 876-7356
            </a>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

        </nav>

        {/* Mobile Menu */}

        {mobileMenu && (
          <div className="md:hidden bg-white shadow-lg p-4">

            <Link to="/" className="block py-2">
              Home
            </Link>

            <button
              onClick={() => setShopMenu(!shopMenu)}
              className="w-full text-left py-2"
            >
              Shop Menu
            </button>

            {shopMenu && (
              <div className="pl-4 space-y-2">

                <Link to="/flower" className="block">
                  Flower
                </Link>

                <Link to="/edibles" className="block">
                  Edibles
                </Link>

                <Link to="/cdm" className="block">
                  CDM
                </Link>

                <Link to="/concentrates" className="block">
                  Concentrates
                </Link>

                <Link to="/vaporizers" className="block">
                  Vaporizers
                </Link>

                <Link to="/prerolls" className="block">
                  Pre-Rolls
                </Link>

                <Link to="/cartridges" className="block">
                  Cartridges
                </Link>

              </div>
            )}

            <Link to="/about" className="block py-2">
              About Us
            </Link>

            <Link to="/cart" className="block py-2">
              Add to Cart
            </Link>

            <Link
  to="/my-orders"
  onClick={() => setMobileMenu(false)}
  className="block py-2 font-semibold text-black-800"
>
  My Orders
</Link>

            {user ? (
              <>
                <div className="py-2 font-semibold text-green-600">
                  👤 {user.name}
                </div>

                <button
                  onClick={handleLogout}
                  className="block py-2 text-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block py-2">
                  Login
                </Link>

                <Link to="/signup" className="block py-2">
                  Sign Up
                </Link>
              </>
            )}

          <Link to="/contact" className="block py-2">
  Contact Us
</Link>

<a
  href="tel:+16125642170"
  className="block py-2 font-semibold text-blue-800"
>
  📞 +1 (213) 876-7356
</a>
          </div>
        )}

      </header>
    </>
  );
}

export default Navbar;