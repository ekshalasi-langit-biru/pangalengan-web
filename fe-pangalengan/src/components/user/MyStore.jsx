import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyProducts from "./MyProducts";
import AddProduct from "../../pages/user/AddProduct";
import ProductsData from "../common/ProductsData";

const LOCAL_STORAGE_KEY = "my-products";

const MyStore = () => {
  const navigate = useNavigate();
  const [myProducts, setMyProducts] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {

    // localStorage.removeItem(LOCAL_STORAGE_KEY); //ini untuk menghapus uji coba menyimpan katalog yang ditambahkan, begitu.

    const storedProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
    let initialProducts = [];

    try {
      if (storedProducts) {
        initialProducts = JSON.parse(storedProducts);
      }
    } catch (error) {
      console.error("Failed to parse localStorage data:", error);
    }

    const exampleProducts = ProductsData.slice(0, 6); //ini untuk mengambil data dummy dari ProductsData.js
    const combined = [...initialProducts, ...exampleProducts];

    setMyProducts(combined);
  }, []);

  const handleAddProduct = (newProduct) => {
    const updatedProducts = [newProduct, ...myProducts];
    setMyProducts(updatedProducts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([newProduct, ...myProducts.filter(p => !p.isExample)]));
    setIsAdding(false);
  };

  return (
    <section className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-6">Produk saya</h2>

      {isAdding ? (
        <AddProduct onAddProduct={handleAddProduct} />
      ) : (
        <>
          {myProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {myProducts.map((product) => (
                <MyProducts
                  key={product.id}
                  product={product}
                  onDelete={(id) => {
                    const filtered = myProducts.filter((p) => p.id !== id);
                    setMyProducts(filtered);
                    const updated = filtered.filter((p) => !p.isExample);
                    localStorage.setItem("my-products", JSON.stringify(updated));
                  }}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              Belum ada produk yang ditambahkan.
            </p>
          )}

          <div className="flex justify-end mt-8">
            <button
              onClick={() => navigate("/pengaturan/tambah-katalog")}
              className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-md transition"
            >
              + Tambah Katalog
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default MyStore;