import { Link } from 'react-router-dom';

export default function Categories({ categories }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Kategori</h2>
      <ul className="space-y-2 font-medium text-gray-700">
        {categories.map((cat, index) => (
          <li key={index} className="hover:text-indigo-600 cursor-pointer transition-colors">
            • <Link to={`/Blogs/${encodeURIComponent(cat)}`} className="hover:underline">{cat}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
