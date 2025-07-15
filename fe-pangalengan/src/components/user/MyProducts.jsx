import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { useState } from "react";
import ConfirmPopup from "./ConfirmPopup";

const MyProducts = ({ product, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  
  if (!product) return <div>Produk tidak tersedia</div>;

  const { price, diskon, presentaseDiskon } = product;

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

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64">
      <div className="relative p-4 bg-gray-100 w-full h-64 flex items-center justify-center">
        <div className="absolute top-2 right-2 z-20">
          <button
            onClick={() => setShowConfirm(true)}
            className="text-red-500 bg-white shadow p-1 rounded-full hover:bg-gray-100 transition"
          >
            <FiTrash size={18} />
          </button>
        </div>

        {product.diskon && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold rounded-sm px-2 py-1 z-10">
            -{product.presentaseDiskon}%
          </div>
        )}

        <img
          src={product.mainImage}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      <Link to={`/produk/${product.id}`}>
        <div className="bg-black text-white text-center py-3 transition hover:opacity-90 cursor-pointer">
          Detail Produk
        </div>
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {product.name}
        </h3>
        {product.diskon && product.presentaseDiskon > 0 ? (
          <div className="flex items-center space-x-2">
            <p className="text-red-500 font-bold text-xl">
              Rp {formatPrice(discountedPrice)}
            </p>
            <p className="text-gray-500 line-through text-sm">
              Rp {formatPrice(product.price)}
            </p>
          </div>
        ) : (
          <p className="text-red-500 font-bold text-xl">
            Rp {formatPrice(product.price)}
          </p>
        )}
      </div>

      {showConfirm && (
        <ConfirmPopup
          message={`Hapus katalog "${product.name}"?`}
          onConfirm={() => onDelete(product.id)}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
};

export default MyProducts;