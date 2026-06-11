import { useParams } from "react-router-dom"
import products from "../data/products"

function ProductPage() {
  const { slug } = useParams()

  const product = products.find(
    (p) => p.slug === slug
  )

  if (!product) {
    return <h1>Product not found</h1>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">

        <div className="bg-gray-50 flex items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[500px] max-w-full object-contain"
          />
        </div>

        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-3xl font-semibold mb-6">
            {product.price}
          </p>

          <p className="text-gray-600 text-lg mb-8">
            {product.description}
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Product Specifications
            </h3>

            <p className="text-gray-600">
              Full technical specifications, dimensions, compatibility details, and additional product information can be found on our eBay listing.
            </p>
          </div>

          <a
            href="https://www.ebay.co.uk/str/olbtrading"
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

export default ProductPage