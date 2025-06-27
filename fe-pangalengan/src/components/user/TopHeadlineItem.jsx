import { Link } from 'react-router-dom';

export default function TopHeadlineItem({ headline }) {
    return (
      <div className="flex flex-col gap-3 p-3 h-full">
        <Link to={`/BlogPage/${headline.id}`} className="relative block group">
          <div className="absolute inset-0 z-50 bg-slate-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
          <img
            src={headline.image}
            alt={headline.title}
            className="w-full h-36 object-cover rounded"
          />
        </Link>
        <div>
          <h4 className="text-xs text-indigo-600 font-semibold">{headline.category}</h4>
          <Link to={`/BlogPage/${headline.id}`} className='hover:underline'>
            <p className="text-sm font-medium text-gray-800 leading-snug">{headline.title}</p>
          </Link>
          <p className="text-xs text-gray-500">{headline.author} · {headline.date}</p>
        </div>
      </div>
    );
  }
  