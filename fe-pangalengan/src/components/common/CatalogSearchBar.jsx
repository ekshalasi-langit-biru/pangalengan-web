import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const CatalogSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="relative w-80">
      <input
        type="text"
        placeholder="Cari produk yang kamu inginkan"
        value={searchTerm}
        onChange={handleChange}
        className="w-80 rounded-md bg-gray-100 py-2 pl-4 pr-24 text-sm placeholder-gray-500 focus:outline-none"
      />
      <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
    </div>
  );
};

export default CatalogSearchBar;