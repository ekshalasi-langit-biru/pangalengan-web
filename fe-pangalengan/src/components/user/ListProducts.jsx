import { useState } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
const Listproducts = () => {
  const productsData = [
    {
      id: 1,
      name: "Sepatu Kulit Asli Pengalengan",
      price: "300000",
      description: "Sepatu kulit asli buatan tangan dari Pengalengan, nyaman dan tahan lama.",
      colourOptions: ["Coklat", "Hitam"],
      sizeOptions: ["39", "40", "41", "42", "43"],
      flavourOptions: [],
      imageUrls: ["/product/SepatuKulit1.svg", "/product/SepatuKulit2.svg"],
      mainImage: "/product/SepatuKulit.svg",
      contactLink: "https://wa.me/6281234567890",
      diskon: true,
      presentaseDiskon: 20,
    },
    {
      id: 2,
      name: "Jaket Bomber",
      price: "250.000",
      description: "Jaket bomber modern dengan bahan parasut, cocok untuk gaya kasual.",
      colourOptions: ["Hitam", "Hijau Army", "Navy"],
      sizeOptions: ["S", "M", "L", "XL"],
      flavourOptions: [],
      imageUrls: ["/product/JaketBomber1.svg", "/product/JaketBomber2.svg"],
      mainImage: "/product/JaketBomber.svg",
      contactLink: "https://wa.me/6281234567890",
      diskon: false,
    },
    {
      id: 3,
      name: "Keripik Pisang",
      price: "30.000",
      description: "Keripik pisang renyah dari pisang pilihan, cocok untuk camilan keluarga.",
      flavourOptions: ["Original", "Coklat", "Keju", "Balado"],
      colourOptions: [],
      sizeOptions: ["100g", "250g"],
      imageUrls: ["/product/KeripikPisang1.svg"],
      mainImage: "/product/KeripikPisang.svg",
      contactLink: "https://wa.me/6281234567890",
      diskon: false,
    },
    {
      id: 4,
      name: "Perahu Mainan",
      price: "10.000",
      description: "Mainan perahu kecil dari kayu, cocok untuk anak-anak dan dekorasi.",
      colourOptions: ["Merah", "Biru", "Kuning"],
      sizeOptions: ["Kecil", "Sedang"],
      flavourOptions: [],
      imageUrls: [],
      mainImage: "/product/PerahuMainan.svg",
      contactLink: "https://wa.me/6281234567890",
      diskon: false,
    },
    {
      id: 5,
      name: "Topi Pengalengan",
      price: "50000",
      description: "Topi stylish buatan lokal dengan bordiran khas Pengalengan.",
      colourOptions: ["Hitam", "Coklat", "Abu-Abu"],
      sizeOptions: ["All Size"],
      flavourOptions: [],
      imageUrls: ["/product/TopiPengalengan1.svg"],
      mainImage: "/product/TopiPengalengan.svg",
      contactLink: "https://wa.me/6281234567890",
      diskon: true,
      presentaseDiskon: 10,
    },
    {
      id: 6,
      name: "Sarung Tangan Kulit",
      price: "75.000",
      description: "Sarung tangan kulit asli untuk berkendara atau aktivitas outdoor.",
      colourOptions: ["Hitam", "Coklat"],
      sizeOptions: ["M", "L", "XL"],
      flavourOptions: [],
      imageUrls: [],
      mainImage: "/product/SarungTangan.svg",
      contactLink: "https://wa.me/6281234567890",
      diskon: false,
    },
    {
      id: 7,
      name: "Permen Susu",
      price: "35.000",
      description: "Permen susu manis dan lembut dari susu segar Pengalengan.",
      flavourOptions: ["Original", "Strawberry", "Coklat"],
      colourOptions: [],
      sizeOptions: ["250g", "500g"],
      imageUrls: ["/product/PermenSusu1.svg"],
      mainImage: "/product/PermenSusu.svg",
      contactLink: "https://wa.me/6281234567890",
      diskon: false,
    },
    {
      id: 8,
      name: "Dodol Susu",
      price: "20.000",
      description: "Dodol susu lembut dan legit dengan rasa manis khas susu segar.",
      flavourOptions: ["Original", "Pandan", "Durian"],
      colourOptions: [],
      sizeOptions: ["250g"],
      imageUrls: [],
      mainImage: "/product/DodolSusu.svg",
      contactLink: "https://wa.me/6281234567890",
      diskon: false,
    },
  ];
  


  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} isLikedPage={false} />
      ))}
    </div>
  );
};

export default Listproducts;
