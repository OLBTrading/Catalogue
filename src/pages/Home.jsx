import products from "../data/products"
import ProductCard from "../components/ProductCard"

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}
      <section className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-500 mb-4">
              Premium Catalogue
            </p>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              Discover Modern Products
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Browse premium products with detailed information and direct eBay purchasing.
            </p>

            <div className="flex flex-wrap gap-4">

              <button className="bg-black text-white px-8 py-4 rounded-2xl text-lg hover:bg-gray-800 transition">
                Browse Products
              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-2xl text-lg hover:bg-gray-100 transition">
                Learn More
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex items-center justify-between mb-10">

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
              Featured
            </p>

            <h2 className="text-4xl font-bold">
              Latest Products
            </h2>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

    </div>
  )
}

export default Home