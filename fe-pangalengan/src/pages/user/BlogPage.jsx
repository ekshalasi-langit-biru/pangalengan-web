import Breadcrumb from '../../components/common/BreadCrumb'
import { useParams } from 'react-router-dom';

const BlogsDummy = [
  {
    id: 1,
    title: "The Rise of AI in Everyday Life",
    author: "Jane Doe",
    postedAt: "2025-05-27T10:30:00",
    category: "Politic",
    content: "Artificial Intelligence (AI) is transforming the way we interact with technology. From smart assistants to predictive analytics, AI applications are rapidly expanding across industries.",
    popularity: 87,
    image: "/Blogs/Politic.png"
  },
  {
    id: 2,
    title: "10 Tips for Healthy Living in a Busy World",
    author: "John Smith",
    postedAt: "2025-05-25T08:15:00",
    category: "Politic",
    content: "Staying healthy while juggling a busy schedule can be challenging. Here are ten practical tips that can help you maintain a balanced lifestyle.",
    popularity: 65,
    image: "/Blogs/Politic2.png"
  },
  {
    id: 3,
    title: "Exploring JavaScript Frameworks in 2025",
    author: "Alice Johnson",
    postedAt: "2025-05-22T14:00:00",
    category: "Sport",
    content: "The world of JavaScript frameworks is ever-evolving. This post compares the top frameworks in 2025, highlighting their strengths and use cases.",
    popularity: 92,
    image: "/Blogs/Sport.png"
  },
  {
    id: 4,
    title: "Mindful Travel: How to Explore Sustainably",
    author: "David Lee",
    postedAt: "2025-05-20T16:45:00",
    category: "Finance",
    content: "Traveling with mindfulness reduces your environmental footprint. Discover how to become a more responsible traveler.",
    popularity: 73,
    image: "/Blogs/Finance.png"
  },
  {
    id: 5,
    title: "Why You Should Start Journaling Today",
    author: "Emily White",
    postedAt: "2025-05-18T19:20:00",
    category: "Finance",
    content: "Journaling boosts mental clarity and personal growth. Learn the benefits of journaling and how to get started.",
    popularity: 80,
    image: "/Blogs/Finance2.png"
  },
  {
    id: 6,
    title: "Mastering Remote Work: Tools and Tips",
    author: "Carlos Kim",
    postedAt: "2025-05-15T09:00:00",
    category: "Politic",
    content: "Remote work is here to stay. Explore essential tools and habits that help you thrive while working from home.",
    popularity: 78,
    image: "/Blogs/Politic3.png"
  },
  {
    id: 7,
    title: "Beginner’s Guide to Investing in 2025",
    author: "Laura Chen",
    postedAt: "2025-05-13T11:45:00",
    category: "Politic",
    content: "Investing doesn't have to be intimidating. This guide walks you through the basics of modern investing in 2025.",
    popularity: 69,
    image: "/Blogs/Politic4.png"
  },
  {
    id: 8,
    title: "Top 5 UI Design Trends to Watch",
    author: "Michael Tanaka",
    postedAt: "2025-05-10T15:30:00",
    category: "Health",
    content: "UI design trends are shifting fast. Here's a look at what’s trending in 2025 and how to stay ahead.",
    popularity: 84,
    image: "/Blogs/Health.png"
  },
  {
    id: 9,
    title: "How Meditation Can Improve Focus",
    author: "Sara Nabila",
    postedAt: "2025-05-08T07:10:00",
    category: "Food",
    content: "Meditation has proven benefits for focus and stress relief. Learn simple meditation techniques you can start today.",
    popularity: 76,
    image: "/Blogs/Food1.png"
  },
  {
    id: 10,
    title: "The Future of Electric Vehicles",
    author: "Robert Green",
    postedAt: "2025-05-05T18:25:00",
    category: "Food",
    content: "Electric vehicles are reshaping transportation. This article explores the latest tech and market trends driving EV adoption.",
    popularity: 90,
    image: "/Blogs/Food2.png"
  }
];

export default function BlogPage() {
  const { id } = useParams();
  const post = BlogsDummy.find(p => p.id === parseInt(id));

  if (!post) return <p>Post not found</p>;
  return (
    <div className="min-h-screen ">
      <section className='ml-24 h-12'>
          <Breadcrumb paths={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/Blogs' },
            { label: 'Post', href: '/' },
          ]} />
      </section>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
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