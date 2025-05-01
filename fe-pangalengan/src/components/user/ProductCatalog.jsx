import { Link } from 'react-router-dom'

const dummyProducts = [
  { id: 1, name: 'Stroberi Pangalengan', image: '/catalog/product1.png', path: '/produk/1' },
  { id: 2, name: 'Stroberi Pangalengan', image: '/catalog/product2.png', path: '/produk/2' },
  { id: 3, name: 'Stroberi Pangalengan', image: '/catalog/product3.png', path: '/produk/3' },
  { id: 4, name: 'Stroberi Pangalengan', image: '/catalog/product4.png', path: '/produk/4' },
]

const ProductCatalog = () => {
  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-10 px-4">
        <div>
          <p className="text-sm font-semibold mb-2">Bulan ini</p>
          <h2 className="text-3xl font-bold">Katalog Produk Terbaru</h2>
        </div>
        <Link
          to="/catalog"
          className="bg-black text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-900 transition"
        >
          Lihat Semua Produk
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {dummyProducts.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className="relative bg-grayExtraLight rounded-lg w-full h-48 overflow-hidden shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button
                  onClick={() => alert(`You liked ${product.name}`)}
                  className="w-8 h-8 bg-white rounded-full shadow flex justify-center items-center hover:bg-gray-200 transition"
                >
                  <img src="/catalog/heartIcon.svg" alt="Like" className="w-4 h-4" />
                </button>

                <Link
                  to={product.path}
                  className="w-8 h-8 bg-white rounded-full shadow flex justify-center items-center hover:bg-gray-200 transition"
                >
                  <img src="/catalog/eyeIcon.svg" alt="View" className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <p className="text-center text-sm font-semibold mt-2">{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductCatalog