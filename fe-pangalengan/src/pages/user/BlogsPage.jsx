import BreadCrumb from '../../components/common/BreadCrumb'
import FeaturedPost from '../../components/Blogs/FeaturedPost';
import PostListItem from '../../components/Blogs/PostListItem';
import TopHeadlines from '../../components/Blogs/TopHeadlines';
import Categories from '../../components/Blogs/Categories';
import AllPosts from '../../components/Blogs/AllPosts';

export default function BlogPage() {
  const BlogsDummy = [
    {
      id: 1,
      title: "The Rise of AI in Everyday Life",
      author: "Jane Doe",
      postedAt: "2025-05-27T10:30:00",
      category: "Politic",
      content: "Artificial Intelligence (AI) is transforming the way we interact with technology. From smart assistants to predictive analytics, AI applications are rapidly expanding across industries.",
      popularity: 87,
      image: "./Blogs/Politic.png"
    },
    {
      id: 2,
      title: "10 Tips for Healthy Living in a Busy World",
      author: "John Smith",
      postedAt: "2025-05-25T08:15:00",
      category: "Politic",
      content: "Staying healthy while juggling a busy schedule can be challenging. Here are ten practical tips that can help you maintain a balanced lifestyle.",
      popularity: 65,
      image: "./Blogs/Politic2.png"
    },
    {
      id: 3,
      title: "Exploring JavaScript Frameworks in 2025",
      author: "Alice Johnson",
      postedAt: "2025-05-22T14:00:00",
      category: "Sport",
      content: "The world of JavaScript frameworks is ever-evolving. This post compares the top frameworks in 2025, highlighting their strengths and use cases.",
      popularity: 92,
      image: "./Blogs/Sport.png"
    },
    {
      id: 4,
      title: "Mindful Travel: How to Explore Sustainably",
      author: "David Lee",
      postedAt: "2025-05-20T16:45:00",
      category: "Finance",
      content: "Traveling with mindfulness reduces your environmental footprint. Discover how to become a more responsible traveler.",
      popularity: 73,
      image: "./Blogs/Finance.png"
    },
    {
      id: 5,
      title: "Why You Should Start Journaling Today",
      author: "Emily White",
      postedAt: "2025-05-18T19:20:00",
      category: "Finance",
      content: "Journaling boosts mental clarity and personal growth. Learn the benefits of journaling and how to get started.",
      popularity: 80,
      image: "./Blogs/Finance2.png"
    },
    {
      id: 6,
      title: "Mastering Remote Work: Tools and Tips",
      author: "Carlos Kim",
      postedAt: "2025-05-15T09:00:00",
      category: "Politic",
      content: "Remote work is here to stay. Explore essential tools and habits that help you thrive while working from home.",
      popularity: 78,
      image: "./Blogs/Politic3.png"
    },
    {
      id: 7,
      title: "Beginner’s Guide to Investing in 2025",
      author: "Laura Chen",
      postedAt: "2025-05-13T11:45:00",
      category: "Politic",
      content: "Investing doesn't have to be intimidating. This guide walks you through the basics of modern investing in 2025.",
      popularity: 69,
      image: "./Blogs/Politic4.png"
    },
    {
      id: 8,
      title: "Top 5 UI Design Trends to Watch",
      author: "Michael Tanaka",
      postedAt: "2025-05-10T15:30:00",
      category: "Health",
      content: "UI design trends are shifting fast. Here's a look at what’s trending in 2025 and how to stay ahead.",
      popularity: 84,
      image: "./Blogs/Health.png"
    },
    {
      id: 9,
      title: "How Meditation Can Improve Focus",
      author: "Sara Nabila",
      postedAt: "2025-05-08T07:10:00",
      category: "Food",
      content: "Meditation has proven benefits for focus and stress relief. Learn simple meditation techniques you can start today.",
      popularity: 76,
      image: "./Blogs/Food1.png"
    },
    {
      id: 10,
      title: "The Future of Electric Vehicles",
      author: "Robert Green",
      postedAt: "2025-05-05T18:25:00",
      category: "Food",
      content: "Electric vehicles are reshaping transportation. This article explores the latest tech and market trends driving EV adoption.",
      popularity: 90,
      image: "./Blogs/Food2.png"
    }
  ];
  
  
  const categories = ['Finance', 'Food', 'Health', 'News', 'Pop', 'Politic', 'Sport', 'Travel'];
  const featuredPost = BlogsDummy.reduce((max, post) => post.popularity > max.popularity ? post : max, BlogsDummy[0]);
  const topHeadlines = BlogsDummy.slice().sort((a, b) => b.popularity - a.popularity).slice(0, 4)
  const latestPosts = BlogsDummy.slice().sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt)).slice(0,3);
  return (
    <div className="max-w-7xl mx-auto px-4 py-1">
      <BreadCrumb paths={[{ label: 'Beranda', href: '/' }, { label: 'Blog', href: '/blog' }]} />

      <div className="grid grid-cols-2 gap-8">
        <FeaturedPost post={featuredPost} />
        <aside className="col-span-1 space-y-10">
          <TopHeadlines headlines={topHeadlines} />
        </aside>
      </div>
      <div className="grid grid-cols-8 gap-8 mt-10">
        <section className='col-span-6 p-5 border border-gray-200 ring-1 ring-slate-300 rounded-xl'>
          <h1 className="text-3xl font-bold mb-4">Latest</h1>
          <div className="space-y-6">
            {latestPosts.map((post, index) => (
              <PostListItem key={index} post={post} />
            ))}
          </div>
        </section>

        <aside className="col-span-2 space-y-10 ml-10 p-5 border border-gray-200 ring-1 ring-slate-300 rounded-xl">
          <Categories categories={categories} />
        </aside>
      </div>
      <section>
        <AllPosts posts={BlogsDummy}/>
      </section>
    </div>
  );
}
