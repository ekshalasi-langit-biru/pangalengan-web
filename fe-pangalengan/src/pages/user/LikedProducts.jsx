import Breadcrumbs from "../../components/common/BreadCrumbs";
const LikedProducts = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <section className="mb-8">
          <Breadcrumbs paths={["Beranda", "Produk Disukai"]} />
        </section>
      </div>

      <section className="px-8">
        <div className="flex">
          <div className="h-8 w-5 rounded-md bg-red-500"></div>
          <h2 className="ml-4 text-xl font-bold text-red-500">
            Produk Disukai <span className="text-red-500 text-3xl">()</span>
          </h2>
        </div>
      </section>
    </>
  );
};

export default LikedProducts;
