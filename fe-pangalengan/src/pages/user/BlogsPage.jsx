import BreadCrumb from '../../components/common/BreadCrumb'
import FeaturedPost from '../../components/user/FeaturedPost';
import PostListItem from '../../components/user/PostListItem';
import TopHeadlines from '../../components/user/TopHeadlines';
import Categories from '../../components/user/Categories';
import AllPosts from '../../components/user/AllPosts';
import BlogsDummy from '../../components/common/BlogsDummy'

export default function BlogPage() {
  
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
