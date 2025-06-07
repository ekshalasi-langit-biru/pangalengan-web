import { href } from "react-router-dom";
import Breadcrumbs from "../../components/common/BreadCrumb";
import ProductCard from "../../components/user/ProductCard";
import { useLikedProducts } from "../../context/LikedProductContext";
import Listproducts from "../../components/user/ListProducts";


const LikedProducts = () => {
  const { likedProducts } = useLikedProducts();
  const likedCount = likedProducts.length;

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-2">
        <Breadcrumbs paths={[{ label: 'Home', href: '/' }, { label: 'Katalog', href: '/katalog' }, { label: 'Liked Product', href: '/liked-products' }]} />
      </div>
      <section className="px-8">
        <div className="flex">
          <div className="h-8 w-5 rounded-md bg-red-500"></div>
          <h2 className="ml-4 text-xl font-bold text-red-500">
            Produk Disukai{" "}
            <span className="text-red-500 text-xl">({likedCount})</span>
          </h2>
        </div>
        <div className="flex flex-col ">
          <p className="ml-6 mt-5 text-lg font-medium text-black">
            Get Your Wish in Our List
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10">
            {likedProducts.map((product) => (
              <ProductCard key={product.id} product={product} isLikedPage={true} />
            ))}
          </div>
        </div>
      </section>
      <section className="px-8">
        <div className="flex mb-5">
          <div className="h-8 w-5 rounded-md bg-red-500"></div>
          <h2 className="ml-4 text-xl font-bold text-red-500">
            Produk Lainnya
          </h2>
        </div>
        <Listproducts/>
      </section>
    </>
  );
};

export default LikedProducts;
