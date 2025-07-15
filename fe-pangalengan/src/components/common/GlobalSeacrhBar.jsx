import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import BlogsDummy from "./BlogsDummy";
import ProductsData from "./ProductsData";
import StaticPages from "./StaticPages";

const combineData = () => [
  ...ProductsData.map(p => ({
    type: "produk",
    id: p.id,
    title: p.name,
    description: p.description,
    image: p.mainImage,
    link: `/produk/${p.id}`
  })),
  ...BlogsDummy.map(b => ({
    type: "blog",
    id: b.id,
    title: b.title,
    description: b.content,
    image: b.image,
    link: `/BlogPage/${b.id}`
  })),
  ...StaticPages
];

const GlobalSearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (!val) {
      setResults([]);
      return;
    }
    const data = combineData();
    const filtered = data.filter(item =>
      (item.title && item.title.toLowerCase().includes(val.toLowerCase())) ||
      (item.description && item.description.toLowerCase().includes(val.toLowerCase()))
    );
    setResults(filtered.slice(0, 7));
  };

  const handleSelect = (item) => {
    setQuery("");
    setResults([]);
    navigate(item.link);
  };

  return (
    <div className="relative w-80">
      <input
        type="text"
        placeholder="Cari produk, blog, atau halaman..."
        value={query}
        onChange={handleChange}
        className="w-80 rounded-md bg-gray-100 py-2 pl-4 pr-10 text-sm placeholder-gray-500 focus:outline-none"
      />
      <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
      {results.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white border rounded shadow-lg z-50 max-h-80 overflow-y-auto">
          {results.map((item, idx) => (
            <div
              key={item.type + "-" + (item.id ?? item.link)}
              className="flex items-center p-3 hover:bg-gray-100 cursor-pointer gap-3"
              onClick={() => handleSelect(item)}
            >
              <img src={item.image} alt={item.title} className="w-10 h-10 object-cover rounded" />
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-xs text-gray-500">{item.type === "blog" ? "Blog" : item.type === "produk" ? "Produk" : "Halaman"} - {item.description?.substring(0, 40)}...</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GlobalSearchBar;