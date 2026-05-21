import { Link } from "react-router-dom"
import logo from "../assets/images/olbnew2.png"

function Navbar() {
  return (
      <nav className="bg-white shadow-sm border-b">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="OLB Trading"
              className="w-12 h-12 object-contain"
            />

            <span className="text-2xl font-bold">
              OLB Trading
            </span>
          </Link>

          <div className="flex items-center gap-8">

            <Link
              to="/"
              className="hover:text-gray-600 transition"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="hover:text-gray-600 transition"
            >
              Products
            </Link>

          </div>

        </div>

      </nav>
  )
}

export default Navbar