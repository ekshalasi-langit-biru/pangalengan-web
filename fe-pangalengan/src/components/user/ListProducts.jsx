import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
const Listproducts = () => {
  const productsData = [
    {
      id: 1,
      name: "Sepatu Kulit Asli Pengalengan",
      price: "300000",
      imageUrl: "/product/SepatuKulit.svg",
      diskon: true,
      presentaseDiskon: 20,
    },
    {
      id: 2,
      name: "Jaket Bomber",
      price: "250.000",
      imageUrl: "/product/JaketBomber.svg",
      diskon: false,
    },
    {
      id: 3,
      name: "Keripik Pisang",
      price: "30.000",
      imageUrl: "/product/KeripikPisang.svg",
      diskon: false,
    },
    {
      id: 4,
      name: "Perahu Mainan",
      price: "10.000",
      imageUrl: "/product/PerahuMainan.svg",
      diskon: false,
    },
    {
      id: 5,
      name: "Topi Pengalengan",
      price: "50000",
      imageUrl: "/product/TopiPengalengan.svg",
      diskon: true,
      presentaseDiskon: 10,
    },
    {
      id: 6,
      name: "Sarung Tangan Kulit",
      price: "75.000",
      imageUrl: "/product/SarungTangan.svg",
      diskon: false,
    },
    {
      id: 7,
      name: "Permen Susu",
      price: "35.000",
      imageUrl: "/product/PermenSusu.svg",
      diskon: false,
    },
    {
      id: 8,
      name: "Dodol Susu",
      price: "20.000",
      imageUrl: "/product/DodolSusu.svg",
      diskon: false,
    },
  ];

  console.log(
    "Data productsData di Listproducts sebelum render:",
    productsData,
  );

 const [likedProducts, setLikedProducts] = useState([]);
  const navigate = useNavigate();

  const handleLike = (product) => {
    // Periksa apakah produk sudah ada di daftar likedProducts
    if (!likedProducts.some((likedProduct) => likedProduct.id === product.id)) {
      setLikedProducts([...likedProducts, product]);
      navigate("/liked-products");
    } else {
      // Opsional: Tambahkan logika untuk menghapus jika sudah ada
      setLikedProducts(
        likedProducts.filter(
          (likedProduct) => likedProduct.id !== product.id,
        ),
      );
      // Jika ingin kembali ke halaman katalog setelah unlike, uncomment baris di bawah
      // navigate('/katalog');
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} onLike={handleLike} />
      ))}
    </div>
  );
};

export default Listproducts;
