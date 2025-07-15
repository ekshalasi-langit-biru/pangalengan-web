import { useState, useEffect } from "react";

const ProductVariantModal = ({ onClose, onSave,defaultValue }) => {
  const [variant, setVariant] = useState({
    image: null,
    imageUrl: "",
    price: "",
    presentaseDiskon: "",
    size: "",
    flavour: "",
    colour: { name: "", hex: "#000000" },
  });

  useEffect(() => {
    if (defaultValue) {
      setVariant(defaultValue);
    }
  }, [defaultValue]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setVariant({ ...variant, image: file, imageUrl: URL.createObjectURL(file) });
    } else if (name === "colourHex") {
      setVariant({ ...variant, colour: { ...variant.colour, hex: value } });
    } else if (name === "colourName") {
      setVariant({ ...variant, colour: { ...variant.colour, name: value } });
    } else {
      setVariant({ ...variant, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!variant.image || !variant.price) return;
    onSave(variant);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-xl">
        <h2 className="text-lg font-semibold mb-4">Tambah Jenis Produk</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-semibold block mb-1">Foto Jenis Produk</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
            {variant.imageUrl && (
              <img
                src={variant.imageUrl}
                alt="preview"
                className="mt-2 w-20 h-20 object-cover"
              />
            )}
          </div>

          <div>
            <label className="font-semibold block mb-1">Harga Jenis Produk</label>
            <input
              type="number"
              name="price"
              value={variant.price}
              onChange={handleChange}
              className="w-full border-b px-2 py-1"
              placeholder="Contoh: 75000"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Diskon Jenis Produk (%)</label>
            <input
              type="number"
              name="presentaseDiskon"
              value={variant.presentaseDiskon}
              onChange={handleChange}
              className="w-full border-b px-2 py-1"
              placeholder="Contoh: 10"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Ukuran Jenis Produk</label>
            <input
              type="text"
              name="size"
              value={variant.size}
              onChange={handleChange}
              className="w-full border-b px-2 py-1"
              placeholder="Contoh: M, 250g, 1kg"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Rasa Jenis Produk</label>
            <input
              type="text"
              name="flavour"
              value={variant.flavour}
              onChange={handleChange}
              className="w-full border-b px-2 py-1"
              placeholder="Contoh: Manis, Asam"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Warna Jenis Produk</label>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                name="colourName"
                value={variant.colour.name}
                onChange={handleChange}
                className="border-b px-2 py-1"
                placeholder="Nama Warna"
              />
              <input
                type="color"
                name="colourHex"
                value={variant.colour.hex}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="text-right mt-6">
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Tambah
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-3 px-4 py-2 border rounded hover:bg-gray-100"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductVariantModal;