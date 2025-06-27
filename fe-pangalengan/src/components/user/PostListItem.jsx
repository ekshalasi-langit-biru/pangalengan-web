import { Link } from 'react-router-dom';

export default function PostListItem({ post }) {
    return (
      <div className="flex gap-4 ">
        <Link to={`/BlogPage/${post.id}`} className="relative block group">
          <div className="absolute h-24 inset-0 z-50 bg-slate-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
          <img
            src={post.image}
            alt={post.title}
            className="w-48 h-24 object-cover rounded-lg mb-4"
          />
        </Link>
        <div>
          <h4 className="text-xs font-semibold text-indigo-600">{post.category}</h4>
          <Link to={`/BlogPage/${post.id}`} className='hover:underline'>
            <p className="text-sm text-gray-800 mt-1">{post.title}</p>
          </Link>
          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
        </div>
      </div>
    );
  }
  