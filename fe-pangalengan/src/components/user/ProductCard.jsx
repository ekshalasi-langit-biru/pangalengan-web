import { FiHeart, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useLikedProducts } from "../../context/LikedProductContext";

const ProductCard = ({ product, onLike, isLikedPage }) => {
  if (!product) {
    return <div>Produk tidak tersedia</div>;
  }

  const { name, price, mainImage, diskon, presentaseDiskon } = product;

  const formatPrice = (price) => {
    return Number(price).toLocaleString("id-ID");
  };

  const calculateDiscountedPrice = () => {
    if (diskon && presentaseDiskon > 0) {
      const discountAmount = (price * presentaseDiskon) / 100;
      return price - discountAmount;
    }
    return price;
  };

  const discountedPrice = calculateDiscountedPrice();
  const { likedProducts, setLikedProducts } = useLikedProducts();

  const handleLike = (product) => {
    if (!likedProducts.some((likedProduct) => likedProduct.id === product.id)) {
      setLikedProducts([...likedProducts, product]);
    } else {
      setLikedProducts(
        likedProducts.filter(
          (likedProduct) => likedProduct.id !== product.id,
        ),
      );
    }
  };

  const handleHeartClick = () => {
    if (!onLike) {
      handleLike(product);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative p-4 bg-gray-100 w-72 h-64">
        {diskon && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold rounded-sm px-2 py-1 z-10">
            -{presentaseDiskon}%
          </div>
        )}
        <img
          src={mainImage}
          alt={name}
          className="w-full h-full object-contain"
        />
        <button
          onClick={handleHeartClick}
          className={`absolute top-2 right-2 p-2 rounded-full shadow transition
            ${likedProducts.some((p) => p.id === product.id) && !isLikedPage ? 'bg-red-500' : 'bg-white'}
            hover:scale-110 duration-200
          `}
        >
          {isLikedPage ? (
            <FiTrash2
              className="h-5 w-5 text-gray-600 transition-transform duration-200 hover:text-red-600"
            />
          ) : (
            <FiHeart
              className={`h-5 w-5 transition-transform duration-200
            ${likedProducts.some((p) => p.id === product.id)
                  ? 'text-white hover:scale-125'
                  : 'text-gray-700 hover:text-black'}
          `}
            />
          )}
        </button>

      </div>
      <Link to={`/produk/${product.id}`}>
        <div
          className="bg-black text-white text-center py-3 cursor-pointer 
      transition duration-200 transform hover:scale-95 hover:bg-opacity-90"
        >
          Detail Produk
        </div>
      </Link>


      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        {diskon && presentaseDiskon > 0 ? (
          <div className="flex items-center space-x-2">
            <p className="text-red-500 font-bold text-xl">
              Rp {formatPrice(discountedPrice)}
            </p>
            <p className="text-gray-500 line-through text-sm">
              Rp {formatPrice(price)}
            </p>
          </div>
        ) : (
          <p className="text-red-500 font-bold text-xl">
            Rp {formatPrice(price)}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;