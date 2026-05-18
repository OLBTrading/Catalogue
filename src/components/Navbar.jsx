import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight"
        >
          OLB Trading
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">

          <Link
            to="/"
            className="hover:text-black transition"
          >
            Home
          </Link>

          <a
            href="#"
            className="hover:text-black transition"
          >
            Products
          </a>

          <a
            href="#"
            className="hover:text-black transition"
          >
            Contact
          </a>

        </div>

        {/* Right Side Button */}
        <button className="bg-black text-white px-5 py-2 rounded-2xl hover:bg-gray-800 transition">
          Browse
        </button>

      </div>

    </nav>
  )
}

export default Navbar