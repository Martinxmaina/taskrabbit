import Header from '../components/Header';
import Footer from '../components/Footer';

const eliteTaskers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    rating: 5,
    reviews: 324,
    tasks: 450,
    skills: ['Assembly', 'Mounting', 'Furniture'],
    verified: true,
    badge: 'Elite Pro',
  },
  {
    id: '2',
    name: 'Michael Chen',
    rating: 5,
    reviews: 289,
    tasks: 380,
    skills: ['Electrical', 'Plumbing', 'Repairs'],
    verified: true,
    badge: 'Elite Pro',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    rating: 5,
    reviews: 412,
    tasks: 520,
    skills: ['Cleaning', 'Organization', 'Moving'],
    verified: true,
    badge: 'Elite Pro',
  },
  {
    id: '4',
    name: 'David Kim',
    rating: 5,
    reviews: 267,
    tasks: 340,
    skills: ['Painting', 'Mounting', 'Assembly'],
    verified: true,
    badge: 'Elite Pro',
  },
  {
    id: '5',
    name: 'Jessica Martinez',
    rating: 5,
    reviews: 356,
    tasks: 480,
    skills: ['Moving', 'Heavy Lifting', 'Furniture'],
    verified: true,
    badge: 'Elite Pro',
  },
  {
    id: '6',
    name: 'James Wilson',
    rating: 5,
    reviews: 298,
    tasks: 390,
    skills: ['Outdoor', 'Yardwork', 'Landscaping'],
    verified: true,
    badge: 'Elite Pro',
  },
];

export default function EliteTaskersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Elite Taskers</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our top-rated Taskers who consistently deliver exceptional service and have completed hundreds of successful tasks.
            </p>
          </div>

          {/* Elite Taskers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eliteTaskers.map((tasker) => (
              <div
                key={tasker.id}
                className="bg-white p-6 rounded-lg border-2 border-[#00A86B] shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{tasker.name}</h3>
                      {tasker.verified && (
                        <svg className="w-5 h-5 text-[#00A86B]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(tasker.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        {tasker.rating} ({tasker.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  <span className="bg-[#00A86B] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {tasker.badge}
                  </span>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">{tasker.tasks}</span> tasks completed
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tasker.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-[#00A86B] text-white py-2 rounded-lg font-semibold hover:bg-[#008a5a] transition-colors">
                  Book {tasker.name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="mt-16 bg-white p-12 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Why Choose Elite Taskers?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="font-semibold text-gray-900 mb-2">Top Rated</h3>
                <p className="text-sm text-gray-600">Consistently 5-star reviews from satisfied customers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-2">Experienced</h3>
                <p className="text-sm text-gray-600">Hundreds of completed tasks with proven track records</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-semibold text-gray-900 mb-2">Verified</h3>
                <p className="text-sm text-gray-600">Background checked and fully verified professionals</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

