import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/common/BreadCrumb';
import ListProducts from '../../components/user/ListProducts';

const ProductImageGallery = ({ images, mainImage, onSelect }) => {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col gap-2">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="w-24 h-24 flex items-center justify-center border border-gray-300 cursor-pointer"
                        onClick={() => onSelect(img)}
                    >
                        <img
                            src={img}
                            alt="Thumbnail"
                            className="object-contain w-full h-full"
                        />
                    </div>
                ))}
            </div>
            <img src={mainImage} alt="Main" className="w-[30vw]" />
        </div>
    );
};

const ProductInfo = ({ product }) => {
    const [selectedColour, setSelectedColour] = useState(product.colours.hex);
    const [selectedSize, setSelectedSize] = useState(product.sizes);

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">{product.name}</h1>
            <p className="text-red-600 text-lg font-semibold">
                Rp.{product.price.toLocaleString('id-ID')},00
            </p>
            <p className="text-sm text-gray-600 max-w-sm">{product.description}</p>
            <hr />

            <div>
                <p className="mb-1 font-semibold">Colours:</p>
                <div className="flex gap-2">
                    {product.colours.map((colour, idx) => (
                        <div
                            key={idx}
                            className={`w-5 h-5 rounded-full border cursor-pointer ${selectedColour === colour.hex ? 'ring-2 ring-red-600' : ''
                                }`}
                            style={{ backgroundColor: colour.hex }}
                            onClick={() => setSelectedColour(colour.hex)}
                        ></div>
                    ))}
                </div>
            </div>

            <div>
                <p className="mb-1 font-semibold">Size:</p>
                <div className="flex gap-2">
                    {product.sizes.map((size, idx) => (
                        <button
                            key={idx}
                            className={`px-2 py-1 border rounded text-sm ${selectedSize === size ? 'bg-red-500 text-white' : ''
                                }`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <a href={product.contactLink} target="_blank" rel="noopener noreferrer">
                <button
                    onClick={() => window.open(product.contactLink, "_blank")}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 hover:shadow-lg transition duration-300 ease-in-out"
                >
                    Hubungi via WhatsApp
                </button>
            </a>
        </div>
    );
};

const DetailedProduct = () => {
    const productsData = [
        {
            id: 1,
            name: "Sepatu Kulit Asli Pengalengan",
            price: "300000",
            description: "Sepatu kulit asli buatan tangan dari Pengalengan, nyaman dan tahan lama.",
            colours: [
                { name: "Coklat", hex: "#8B4513" },
                { name: "Hitam", hex: "#000000" },
            ],
            sizes: ["39", "40", "41", "42", "43"],
            flavourOptions: [],
            imageUrls: ["/product/SepatuKulit.svg", "/product/SepatuKulit.svg", "/product/SepatuKulit.svg"],
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
            colours: [
                { name: "Hitam", hex: "#000000" },
                { name: "Hijau Army", hex: "#4B5320" },
                { name: "Navy", hex: "#000080" },
            ],
            sizes: ["S", "M", "L", "XL"],
            flavourOptions: [],
            imageUrls: ["/product/JaketBomber.svg", "/product/JaketBomber.svg", "/product/JaketBomber.svg"],
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
            colours: [],
            sizes: ["100g", "250g"],
            imageUrls: ["/product/KeripikPisang.svg", "/product/KeripikPisang.svg", "/product/KeripikPisang.svg"],
            mainImage: "/product/KeripikPisang.svg",
            contactLink: "https://wa.me/6281234567890",
            diskon: false,
        },
        {
            id: 4,
            name: "Perahu Mainan",
            price: "10.000",
            description: "Mainan perahu kecil dari kayu, cocok untuk anak-anak dan dekorasi.",
            colours: [
                { name: "Merah", hex: "#FF0000" },
                { name: "Biru", hex: "#0000FF" },
                { name: "Kuning", hex: "#FFFF00" },
            ],
            sizes: ["Kecil", "Sedang"],
            flavourOptions: [],
            imageUrls: ["/product/PerahuMainan.svg", "/product/PerahuMainan.svg", "/product/PerahuMainan.svg",],
            mainImage: "/product/PerahuMainan.svg",
            contactLink: "https://wa.me/6281234567890",
            diskon: false,
        },
        {
            id: 5,
            name: "Topi Pengalengan",
            price: "50000",
            description: "Topi stylish buatan lokal dengan bordiran khas Pengalengan.",
            colours: [
                { name: "Hitam", hex: "#000000" },
                { name: "Coklat", hex: "#8B4513" },
                { name: "Abu-Abu", hex: "#808080" },
            ],
            sizes: ["All Size"],
            flavourOptions: [],
            imageUrls: ["/product/TopiPengalengan.svg", "/product/TopiPengalengan.svg", "/product/TopiPengalengan.svg",],
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
            colours: [
                { name: "Hitam", hex: "#000000" },
                { name: "Coklat", hex: "#8B4513" },
            ],
            sizes: ["M", "L", "XL"],
            flavourOptions: [],
            imageUrls: ["/product/SarungTangan.svg", "/product/SarungTangan.svg", "/product/SarungTangan.svg",],
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
            colours: [],
            sizes: ["250g", "500g"],
            imageUrls: ["/product/PermenSusu.svg", "/product/PermenSusu.svg", "/product/PermenSusu.svg"],
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
            colours: [],
            sizes: ["250g"],
            imageUrls: ["/product/DodolSusu.svg", "/product/DodolSusu.svg", "/product/DodolSusu.svg",],
            mainImage: "/product/DodolSusu.svg",
            contactLink: "https://wa.me/6281234567890",
            diskon: false,
        },
    ];

    const { id } = useParams();
    const product = productsData.find(p => p.id === parseInt(id));
    const [mainImage, setMainImage] = useState(product.mainImage);

    useEffect(() => {
        setMainImage(product.mainImage);
    }, [product]);

    return (
        <>
        <section className='max-w-screen-xl mx-auto px-4 py-1'>
            <Breadcrumb paths={[{ label: 'Beranda', href: '/' }, { label: 'Katalog', href: '/katalog' }, { label: 'Produk', href: '/product/:id' }]} />
            <div className="grid grid-cols-2 p-10 gap-10">
                <ProductImageGallery
                    images={product.imageUrls}
                    mainImage={mainImage}
                    onSelect={setMainImage}
                    />
                <ProductInfo product={product} />
            </div>
        </section>
        <section className="max-w-screen-xl mx-auto px-4 py-10 mt-10">
          <div className="flex">
            <div className="h-8 w-5 rounded-md bg-red-500"></div>
            <h2 className="ml-4 text-xl font-bold text-red-500">
              Produk Lainnya
            </h2>
          </div>
          <div className="mt-8">
            <ListProducts/>
          </div>
        </section>
        </>
        
    );
};

export default DetailedProduct;
