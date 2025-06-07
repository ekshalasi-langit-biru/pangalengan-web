import { Link } from 'react-router-dom';

export default function FeaturedPost({ post }) {
    return (
      <section>
        <Link to={`/BlogPage/${post.id}`} className="relative block group">
          <div className="absolute inset-0 z-50 bg-slate-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[50vh] object-cover rounded-lg mb-4"
          />
        </Link>
        <h3 className="text-sm font-semibold text-indigo-600 mb-1">{post.category}</h3>
        <Link to={`/Blog/${post.id}`} className='hover:underline'>
          <h1 className="text-2xl font-bold text-gray-900 leading-snug">{post.title}</h1>
        </Link>
        <p className="text-sm text-gray-500 mt-1">{post.author} · {post.date}</p>
        <p className="text-gray-700 mt-3">{post.description}</p>
      </section>
    );
  }
  
