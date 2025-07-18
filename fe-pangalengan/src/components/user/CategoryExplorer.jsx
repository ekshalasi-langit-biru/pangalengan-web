import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Sayuran",
    path: "/katalog/sayuran",
    icon: "/category/vegetableIcon.svg",
  },
  {
    id: 2,
    name: "Makanan",
    path: "/katalog/makanan",
    icon: "/category/foodIcon.svg",
  },
  {
    id: 3,
    name: "Kopi & Teh",
    path: "/katalog/kopi-teh",
    icon: "/category/drinkIcon.svg",
  },
  {
    id: 4,
    name: "Mainan",
    path: "/katalog/mainan",
    icon: "/category/gameIcon.svg",
  },
  {
    id: 5,
    name: "Herbal/Obat",
    path: "/katalog/herbal-obat",
    icon: "/category/medicineIcon.svg",
  },
  {
    id: 6,
    name: "Kerajinan",
    path: "/katalog/kerajinan",
    icon: "/category/craftIcon.svg",
  },
];

const CategoryExplorer = () => {
  return (
    <section className="mt-16 mb-20">

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.path}
            className="bg-graySoft hover:bg-gray-300 transition rounded-lg shadow-lg w-36 h-24 flex flex-col justify-center items-center text-center p-4"
          >
            <img
              src={category.icon}
              alt={category.name}
              className="w-9 h-9 mb-3"
            />
            <span className="text-sm font-semibold">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryExplorer;