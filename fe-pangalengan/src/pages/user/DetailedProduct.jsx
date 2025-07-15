import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/common/BreadCrumb';
import ListProducts from "../../components/user/ListProducts";
import ProductsData from '../../components/common/ProductsData';

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
    const [selectedColour, setSelectedColour] = useState(product.colourOptions.hex);
    const [selectedSize, setSelectedSize] = useState(product.sizeOptions);

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">{product.name}</h1>
            <p className="text-red-600 text-lg font-semibold">
                Rp {product.price.toLocaleString('id-ID')},00
            </p>
            <p className="text-sm text-gray-600 max-w-sm">{product.description}</p>
            <hr />

            <div>
                <p className="mb-1 font-semibold">Colours:</p>
                <div className="flex gap-2">
                    {product.colourOptions.map((colour, idx) => (
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
                    {product.sizeOptions.map((size, idx) => (
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

    const { id } = useParams();
    const product = ProductsData.find(p => p.id === parseInt(id));
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
            <ListProducts products={ProductsData} />
          </div>
        </section>
        </>
        
    );
};

export default DetailedProduct;