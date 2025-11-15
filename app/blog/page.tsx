import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const blogPosts = [
  {
    id: '1',
    title: '10 Home Organization Tips from Professional Organizers',
    excerpt: 'Learn how to declutter and organize your space like a pro with these expert tips.',
    author: 'Sarah Johnson',
    date: 'January 15, 2025',
    category: 'Home Tips',
    image: '📦',
  },
  {
    id: '2',
    title: 'How to Choose the Right Tasker for Your Project',
    excerpt: 'A guide to finding the perfect Tasker based on your needs, budget, and timeline.',
    author: 'Mike Chen',
    date: 'January 10, 2025',
    category: 'How-To',
    image: '🔍',
  },
  {
    id: '3',
    title: 'The Future of On-Demand Services',
    excerpt: 'Exploring how technology is shaping the way we get things done.',
    author: 'Emily Rodriguez',
    date: 'January 5, 2025',
    category: 'Industry News',
    image: '🚀',
  },
  {
    id: '4',
    title: 'DIY vs. Hiring a Professional: When to Call a Tasker',
    excerpt: 'Learn when it makes sense to tackle a project yourself versus hiring a professional.',
    author: 'David Kim',
    date: 'December 28, 2024',
    category: 'Home Tips',
    image: '🔧',
  },
  {
    id: '5',
    title: 'Success Stories: How Taskers Built Their Businesses',
    excerpt: 'Inspiring stories from Taskers who turned their skills into successful businesses.',
    author: 'Jessica Martinez',
    date: 'December 20, 2024',
    category: 'Success Stories',
    image: '💼',
  },
  {
    id: '6',
    title: 'Safety First: How We Keep Our Platform Secure',
    excerpt: 'An inside look at our safety measures and background check process.',
    author: 'James Wilson',
    date: 'December 15, 2024',
    category: 'Safety',
    image: '🔒',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Taskrabbit Blog</h1>
            <p className="text-lg text-gray-600">
              Tips, stories, and insights to help you get things done
            </p>
          </div>

          {/* Featured Post */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-6xl flex items-center justify-center">
                {blogPosts[0].image}
              </div>
              <div>
                <span className="text-sm text-[#00A86B] font-semibold mb-2 inline-block">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{blogPosts[0].author}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].date}</span>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="text-[#00A86B] font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#00A86B] hover:shadow-lg transition-all duration-200"
              >
                <div className="text-4xl mb-4">{post.image}</div>
                <span className="text-xs text-[#00A86B] font-semibold mb-2 inline-block">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 bg-[#00A86B] text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6">Get the latest tips, stories, and updates delivered to your inbox</p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#00A86B] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

