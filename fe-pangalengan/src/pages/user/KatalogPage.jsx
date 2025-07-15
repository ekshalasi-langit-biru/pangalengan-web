import { useState } from "react";
import CategoryExplorer from "../../components/user/CategoryExplorer";
import ListProducts from "../../components/user/ListProducts";
import Breadcrumb from "../../components/common/BreadCrumb";
import useSearchFilter from "../../components/common/useSearchFilter";
import CatalogSearchBar from "../../components/common/CatalogSearchBar";
import ProductsData from "../../components/common/ProductsData";

const KatalogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = useSearchFilter(ProductsData, searchTerm, ["name", "description"]);

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <section className="mb-8">
        <Breadcrumb paths={[{ label: 'Home', href: '/' }, { label: 'Katalog', href: '/katalog' }]} />
        </section>

        <section className="mt-[47px]">
          <img src="/catalog/catalogBackground.png" alt="background" />
        </section>

        <section className="mt-10 flex justify-between">
          <h1 className="text-2xl font-bold">Give All You Need</h1>
          <div className="relative w-80">
            <CatalogSearchBar onSearch={setSearchTerm} />
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
            <ListProducts products={filteredProducts}/>
          </div>
        </section>
      </div>
    </>
  );
};

export default KatalogPage;
