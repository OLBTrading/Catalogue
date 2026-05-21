
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              OLB Trading
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Premium bathroom, heating, and home products
              with direct eBay purchasing.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link
                to="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="hover:text-white transition"
              >
                Products
              </Link>

            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <p>
                info@olbtrading.com
              </p>

              <p>
                United Kingdom
              </p>

            </div>
          </div>

          {/* EBAY */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Marketplace
            </h3>

            <a
              href="https://www.ebay.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              Visit our eBay Store
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 OLB Trading. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">


          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer