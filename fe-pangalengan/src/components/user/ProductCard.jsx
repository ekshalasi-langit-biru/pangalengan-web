import React from "react";
import { FiHeart } from "react-icons/fi";

const ProductCard = ({ product, onLike }) => {
  if (!product) {
    return <div>Produk tidak tersedia</div>;
  }

  const { name, price, imageUrl, diskon, presentaseDiskon } = product;

  const formatPrice = (price) => {
    return price.toLocaleString("id-ID");
  };

  const calculateDiscountedPrice = () => {
    if (diskon && presentaseDiskon > 0) {
      const discountAmount = (price * presentaseDiskon) / 100;
      return price - discountAmount;
    }
    return price;
  };

  const discountedPrice = calculateDiscountedPrice();

   const handleHeartClick = () => {
     if (onLike) {
       onLike(product);
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
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain"
        />
        <button onClick={handleHeartClick} className="absolute top-2 right-2 p-2 rounded-full bg-white shadow">
          <FiHeart className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      <div className="bg-black text-white text-center py-3 cursor-pointer hover:opacity-90">
        Detail Produk
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        {diskon && presentaseDiskon > 0 ? (
          <div className="flex items-center space-x-2">
            <p className="text-red-500 font-bold text-xl">
              Rp.{formatPrice(discountedPrice)}
            </p>
            <p className="text-gray-500 line-through text-sm">
              Rp.{formatPrice(price)}
            </p>
          </div>
        ) : (
          <p className="text-red-500 font-bold text-xl">
            Rp.{formatPrice(price)}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
