import { useState } from "react"
import { Link } from "react-router-dom"
import products from "../data/products"

function ProductView() {
  const [search, setSearch] = useState("")

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto mb-10">

        <h1 className="text-5xl font-bold mb-4">
          All Products
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Browse all available products.
        </p>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />

      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4"
          >

            <div className="h-72 flex items-center justify-center bg-gray-50 rounded-xl mb-4 p-4">

              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />

            </div>

            <h2 className="text-lg font-semibold mb-4">
              {product.name}
            </h2>

            <Link
              to={`/product/${product.slug}`}
              className="bg-black text-white px-4 py-2 rounded-xl inline-block"
            >
              View Product
            </Link>

          </div>
        ))}

      </div>

    </div>
  )
}

export default ProductView