import ProductCard from "./ProductCard";

const Listproducts = ({ products = [] }) => {

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.length === 0 && (
        <div className="col-span-full text-gray-500 text-center py-10">Produk tidak ditemukan.</div>
      )}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} isLikedPage={false} />
      ))}
    </div>
  );
};

export default Listproducts;