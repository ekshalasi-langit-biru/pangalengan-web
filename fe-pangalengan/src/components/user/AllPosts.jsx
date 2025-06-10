import { Link } from 'react-router-dom';

export default function AllPosts({ posts }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-xl font-bold mb-6">ALL BLOG POSTS</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow-sm rounded overflow-hidden">
            <Link to={`/BlogPage/${post.id}`} className="relative block group">
              <div className="absolute inset-0 z-50 bg-slate-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </Link>
            {post.title && (
              <div className="p-4">
                <p className="text-sm text-indigo-600 font-semibold uppercase">{post.category}</p>
                <Link to={`/BlogPage/${post.id}`} className='hover:underline'>
                  <h3 className="text-md font-bold mt-1 mb-2 leading-snug">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-semibold text-black">{post.author}</span> &middot; {new Date(post.postedAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Non risus elementum porttitor risus. Volutpat iaculis volutpat ut in tincidunt ut.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
