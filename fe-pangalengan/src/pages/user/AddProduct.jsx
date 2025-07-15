import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import ProductVariantModal from "../../components/user/ProductVariantModal";
import CatalogHeader from "../../components/user/CatalogHeader";

const AddProduct = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    type: "",
    image: null,
    imageUrl: "",
    price: "",
    presentaseDiskon: "",
  });

  const [charNameCount, setCharNameCount] = useState(0);
  const [charDescCount, setCharDescCount] = useState(0);
  const [variants, setVariants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setForm({
        ...form,
        image: file,
        imageUrl: URL.createObjectURL(file),
      });
    } else {
      setForm({ ...form, [name]: value });
    }
    if (name === "name") setCharNameCount(value.length);
    if (name === "description") setCharDescCount(value.length);
  };

  const handleAddVariant = (variant) => {
    if (editIndex !== null) {
      const updated = [...variants];
      updated[editIndex] = variant;
      setVariants(updated);
      setEditIndex(null);
    } else {
      setVariants((prev) => [...prev, variant]);
    }
    setShowModal(false);
  };

  const handleEditVariant = (index) => {
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDeleteVariant = (index) => {
    setVariants((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.description || !form.type || !form.image || variants.length === 0) return;

    const newCatalog = {
      id: Date.now(),
      name: form.name,
      description: form.description,
      type: form.type,
      mainImage: form.imageUrl,
      imageUrls: variants.map((v) => v.imageUrl),
      price: variants[0]?.price || 0,
      flavourOptions: variants.map((v) => v.flavour || "-"),
      sizeOptions: variants.map((v) => v.size || "-"),
      colourOptions: variants.map((v) => v.colour?.name || "-"),
      presentaseDiskon: variants[0]?.presentaseDiskon || 0,
      diskon: variants[0]?.presentaseDiskon > 0 || false,
      contactLink: "https://wa.me/6281234567890",
    };

    const existing = JSON.parse(localStorage.getItem("my-products") || "[]");
    localStorage.setItem("my-products", JSON.stringify([...existing, newCatalog]));

    navigate('/pengaturan/toko-saya');
  };

  return (
    <div className="min-h-screen bg-white">
      <CatalogHeader />
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm space-y-6"
        >
          <div>
            <label className="block font-semibold mb-2">Foto Produk Utama</label>
            <label className="w-32 h-32 border-2 border-dashed border-red-400 flex items-center justify-center text-red-500 cursor-pointer">
              + Tambah Foto
              <input
                type="file"
                name="image"
                accept="image/*"
                className="hidden"
                onChange={handleChange}
              />
            </label>
            {form.imageUrl && (
              <img
                src={form.imageUrl}
                alt="preview"
                className="mt-2 w-32 h-32 object-cover"
              />
            )}
          </div>

          <div>
            <label className="block font-semibold">Nama Katalog</label>
            <input
              type="text"
              name="name"
              maxLength={100}
              value={form.name}
              onChange={handleChange}
              className="w-full border-b focus:outline-none mt-1 px-4 py-2"
              placeholder="Masukkan Nama Produk"
            />
            <p className="text-sm text-gray-400 text-right">{charNameCount}/100</p>
          </div>

          <div>
            <label className="block font-semibold">Deskripsi Produk</label>
            <textarea
              name="description"
              rows={3}
              maxLength={300}
              value={form.description}
              onChange={handleChange}
              className="w-full border-b focus:outline-none mt-1 px-4 py-2"
              placeholder="Masukkan Deskripsi Produk"
            />
            <p className="text-sm text-gray-400 text-right">{charDescCount}/300</p>
          </div>

          <div>
            <label className="block font-semibold">Kategori</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border-b mt-1 bg-white cursor-pointer px-4 py-2"
            >
              <option value="">Pilih Kategori</option>
              <option value="sayuran">Sayuran</option>
              <option value="makanan">Makanan</option>
              <option value="kopi-teh">Kopi & Teh</option>
              <option value="mainan">Mainan</option>
              <option value="herbal-obat">Herbal/Obat</option>
              <option value="kerajinan">Kerajinan</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">Harga Produk</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full border-b focus:outline-none mt-1 px-4 py-2"
              placeholder="Masukkan harga default produk, misal: 100000"
            />
          </div>

          <div>
            <label className="block font-semibold">Diskon Produk (%)</label>
            <input
              type="number"
              name="presentaseDiskon"
              value={form.presentaseDiskon}
              onChange={handleChange}
              className="w-full border-b focus:outline-none mt-1 px-4 py-2"
              placeholder="Masukkan diskon default produk, misal: 10"
            />
          </div>

          <div className="mt-10">
            <h3 className="font-bold text-lg mb-2">Jenis Produk</h3>
            <div className="mb-4">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="bg-gray-100 border border-gray-300 px-4 py-2 rounded hover:bg-gray-200"
              >
                + Tambah Jenis Produk
              </button>
            </div>

            {variants.length > 0 && (
              <table className="w-full table-auto border text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2">Gambar</th>
                    <th>Harga</th>
                    <th>Diskon</th>
                    <th>Ukuran</th>
                    <th>Warna</th>
                    <th>Rasa</th>
                    <th>Tindakan</th>
                  </tr>
                </thead>
                <tbody>
                  {variants.map((v, i) => (
                    <tr key={i} className="text-center">
                      <td className="p-2">
                        <img src={v.imageUrl} alt="varian" className="w-12 h-12 object-cover mx-auto" />
                      </td>
                      <td>Rp {parseInt(v.price).toLocaleString("id-ID")}</td>
                      <td>{v.presentaseDiskon ? `${v.presentaseDiskon}%` : "-"}</td>
                      <td>{v.size || "-"}</td>
                      <td>{v.colour?.name || "-"}</td>
                      <td>{v.flavour || "-"}</td>
                      <td className="flex mt-5 justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleEditVariant(i)}
                          className="text-blue-500"
                        >
                          <FiEdit2 />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteVariant(i)}
                          className="text-red-500"
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="mt-10 text-right">
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              + Tambah Katalog
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <ProductVariantModal
          onClose={() => {
            setShowModal(false);
            setEditIndex(null);
          }}
          onSave={handleAddVariant}
          defaultValue={editIndex !== null ? variants[editIndex] : null}
        />
      )}
    </div>
  );
};

export default AddProduct;