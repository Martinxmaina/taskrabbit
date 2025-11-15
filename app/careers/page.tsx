import Header from '../components/Header';
import Footer from '../components/Footer';

const positions = [
  {
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Customer Support Specialist',
    department: 'Support',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'New York, NY',
    type: 'Full-time',
  },
  {
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
  },
  {
    title: 'Data Analyst',
    department: 'Analytics',
    location: 'Remote',
    type: 'Full-time',
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Help us build the future of on-demand services. We're looking for passionate people who want to make a difference.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-white p-12 rounded-lg border border-gray-200 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Work at Taskrabbit?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="font-semibold text-gray-900 mb-2">Great Benefits</h3>
                <p className="text-sm text-gray-600">Health, dental, vision, and more</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="font-semibold text-gray-900 mb-2">Remote Friendly</h3>
                <p className="text-sm text-gray-600">Work from anywhere</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                <p className="text-sm text-gray-600">Advance your career with us</p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Open Positions</h2>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#00A86B] hover:shadow-md transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-[#00A86B] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#008a5a] transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-[#00A86B] text-white p-12 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Don't see a role that fits?</h2>
            <p className="mb-6">We're always looking for great talent. Send us your resume!</p>
            <button className="bg-white text-[#00A86B] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Submit General Application
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

