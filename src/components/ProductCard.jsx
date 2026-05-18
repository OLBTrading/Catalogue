import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.slug}`}>
      <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl transition">

            <div className="h-72 flex items-center justify-center bg-gray-50 rounded-xl mb-4 p-4">
            <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
            />
            </div>

        <div className="p-5">
          <h2 className="text-2xl font-semibold mb-2">
            {product.name}
          </h2>

          <p className="text-xl font-bold">
            {product.price}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard