import { useParams } from 'react-router-dom';
import BreadCrumb from '../../components/common/BreadCrumb'
import BlogsDummy from '../../components/common/BlogsDummy'

export default function BlogPage() {
  const { id } = useParams();
  const post = BlogsDummy.find(p => p.id === parseInt(id));

  if (!post) return <p>Post not found</p>;
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto px-4 py-1">
      <section className='max-w-screen-xl mx-auto'>
          <BreadCrumb paths={[
            { label: 'Beranda', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Unggahan', href: '/BlogPage/:id' },
          ]} />
      </section>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="md:col-span-3 bg-white p-6 shadow-lg rounded border border-gray-200 ring-gray-800">

          <div className="text-right text-xs text-gray-500 my-2">
            Posted {new Date(post.postedAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB - {new Date(post.postedAt).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
          <div className='w-full h-[2px] bg-gray-500 my-6'></div>

          <h2 className="text-indigo-600 font-semibold text-sm mb-1">
            {post.category.toUpperCase()}
          </h2>

          <h1 className="text-xl font-bold mb-2">
            {post.title}
          </h1>

          <p className="text-sm text-gray-600 mb-4">
            {post.content.substring(0, 150)}...
          </p>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[75vh] object-cover mb-2 rounded"
          />

          <p className="text-xs text-gray-500 mb-4">Image Credit: {post.author}</p>

          <p className="text-sm text-gray-700">
            {post.content}
          </p>
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-4">MOST POPULAR</h3>

          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-start gap-3 mb-4">
              <img
                src={`https://source.unsplash.com/random/80x60?sig=${item}`}
                alt="Popular Post"
                className="w-20 h-16 object-cover rounded"
              />
              <div className="text-sm">
                <p className="font-semibold leading-tight">
                  Lorem ipsum dolor sit amet consectetur scelerisque in.
                </p>
                <p className="text-gray-500 text-xs mt-1">27 minutes ago</p>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}