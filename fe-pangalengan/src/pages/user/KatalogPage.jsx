import Breadcrumbs from "../../components/common/BreadCrumbs";
import { FiSearch } from "react-icons/fi";
import CategoryExplorer from "../../components/user/CategoryExplorer";
import Products from "../../components/user/Products";

const KatalogPage = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <section className="mb-8">
          <Breadcrumbs paths={["Beranda", "Katalog"]} />
        </section>

        <section className="mt-[47px]">
          <img src="/catalog/Photo.svg" alt="background" />
        </section>

        <section className="mt-10 flex justify-between">
          <h1 className="text-2xl font-bold">Give All You Need</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Cari produk yang kamu inginkan"
              className="w-80 rounded-md bg-gray-100 py-2 pl-4 pr-24 text-sm placeholder-gray-500 focus:outline-none"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
          </div>
        </section>

        <section className="mt-10 rounded-md border-2 p-7 shadow-md">
          <div className="flex">
            <div className="h-8 w-5 rounded-md bg-red-500"></div>
            <h2 className="ml-4 text-xl font-bold text-red-500">Category</h2>
          </div>
          <h2 className="mt-8 text-xl font-bold">All Categories</h2>


          <CategoryExplorer />

        </section>

        <section className="p-7">
          <div className="flex">
            <div className="h-8 w-5 rounded-md bg-red-500"></div>
            <h2 className="ml-4 text-xl font-bold text-red-500">
              Our Products
            </h2>
          </div>
          <div className="mt-8">
            <Products />
          </div>
        </section>
      </div>
    </>
  );
};

export default KatalogPage;
