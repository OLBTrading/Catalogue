import { Routes, Route, Link, useParams } from "react-router-dom"

import products from "./data/Product"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <header className="bg-white rounded-3xl shadow-md mb-12 overflow-hidden">

        <div className="max-w-7xl mx-auto px-8 py-16">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">
              Premium Products
            </p>

            <h1 className="text-6xl font-bold leading-tight mb-6">
              Modern Product Catalogue
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Browse high quality products with detailed descriptions and direct eBay purchasing.
            </p>

            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition">
                Browse Products
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow hover:shadow-2xl transition p-4"
          >
            <div className="h-72 flex items-center justify-center bg-gray-50 rounded-xl mb-4 p-4">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <h2 className="text-xl font-semibold mb-3">
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

function ProductPage() {
  const { slug } = useParams()

  const product = products.find(
    (p) => p.slug === slug
  )

  if (!product) {
    return (
      <div className="p-10 text-3xl">
        Product not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">

        <div className="flex items-center justify-center bg-gray-50 p-10">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[500px] object-contain"
          />
        </div>

        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-6">
            {product.name}
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            {product.description}
          </p>

          <a
            href={product.ebayLink}
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white px-8 py-4 rounded-2xl text-center text-lg hover:bg-gray-800 transition"
          >
            Buy on eBay
          </a>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/product/:slug"
          element={<ProductPage />}
        />
      </Routes>
      
      <Footer />
    </>
  )
}


export default App