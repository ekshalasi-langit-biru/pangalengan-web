import { Link } from 'react-router-dom'
import { useLikedProducts } from '../../context/LikedProductContext';
import { FiHeart } from 'react-icons/fi';
import ProductsData from '../common/ProductsData'

const ProductCatalog = () => {
  const { likedProducts, setLikedProducts } = useLikedProducts();

  const displayedProducts = ProductsData.filter(product =>
    ["Sayur Segar", "Baju Batik", "Dodol Susu", "Stroberi Pangalengan"].includes(product.name)
  ); //nanti ketika integrasi diubah aja menjadi aambil product random, karena 4 produk ini belum tentu ada kan.

  const handleLike = (product) => {
    const isAlreadyLiked = likedProducts.some(p => p.id === product.id);

    if (isAlreadyLiked) {
      setLikedProducts(likedProducts.filter(p => p.id !== product.id));
    } else {
      setLikedProducts([...likedProducts, product]);
    }
  };

  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-10 px-4">
        <div>
          <p className="text-sm font-semibold mb-2">Bulan ini</p>
          <h2 className="text-3xl font-bold">Katalog Produk Terbaru</h2>
        </div>
        <Link
          to="/katalog"
          className="bg-black text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-900 transition"
        >
          Lihat Semua Produk
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {displayedProducts.map((product) => {
          const isLiked = likedProducts.some(p => p.id === product.id);

          return(
            <div key={product.id} className="flex flex-col items-center">
              <div className="relative bg-grayExtraLight rounded-lg w-full h-48 overflow-hidden shadow-md">
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-lg"
                />

                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <button
                    onClick={() => handleLike(product)}
                    className={`w-8 h-8 rounded-full shadow flex justify-center items-center transition
                      ${isLiked ? 'bg-red-500' : 'bg-white'} hover:scale-110`}
                  >
                    <FiHeart className={`w-4 h-4 ${isLiked ? 'text-white' : 'text-gray-700'}`} />
                  </button>

                  <Link
                    to={`/produk/${product.id}`}
                    className="w-8 h-8 bg-white rounded-full shadow flex justify-center items-center hover:bg-gray-200 transition"
                  >
                    <img src="/catalog/eyeIcon.svg" alt="View" className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <p className="text-center text-sm font-semibold mt-2">{product.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default ProductCatalog;