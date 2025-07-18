import { useLikedProducts } from "../../context/LikedProductContext";
import Breadcrumbs from "../../components/common/BreadCrumb";
import ProductCard from "../../components/user/ProductCard";
import ListProducts from "../../components/user/ListProducts";
import ProductsData from "../../components/common/ProductsData";

const LikedProducts = () => {
  const { likedProducts } = useLikedProducts();
  const likedCount = likedProducts.length;

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-2">
        <Breadcrumbs paths={[{ label: 'Beranda', href: '/' }, { label: 'Katalog', href: '/katalog' }, { label: 'Produk Disukai', href: '/produk-disukai' }]} />
      </div>
      <section className="max-w-screen-xl mx-auto px-4 py-1">
        <div className="flex">
          <div className="h-8 w-5 rounded-md bg-red-500"></div>
          <h2 className="ml-4 text-xl font-bold text-red-500">
            Produk Disukai{" "}
            <span className="text-red-500 text-xl">({likedCount})</span>
          </h2>
        </div>
        <div className="flex flex-col ">
          <p className="ml-6 mt-5 text-lg font-medium text-black">
            Temukan Keinginan Anda di Daftar Kami!
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10">
            {likedProducts.map((product) => (
              <ProductCard key={product.id} product={product} isLikedPage={true} />
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-4 py-1">
        <div className="flex mb-5">
          <div className="h-8 w-5 rounded-md bg-red-500"></div>
          <h2 className="ml-4 text-xl font-bold text-red-500">
            Produk Lainnya
          </h2>
        </div>
        <ListProducts products={ProductsData} />
      </section>
    </>
  );
};

export default LikedProducts;
