import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BecomeATaskerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Become a Tasker
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Earn money doing what you love. Set your own schedule, choose your tasks, and build your business on your terms.
            </p>
            <button className="bg-[#00A86B] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#008a5a] transition-colors">
              Get Started
            </button>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Earn on Your Schedule</h3>
              <p className="text-gray-600">
                Work when you want, where you want. Set your own rates and take on tasks that fit your lifestyle.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe & Secure</h3>
              <p className="text-gray-600">
                We handle payments, provide insurance coverage, and offer 24/7 support to keep you safe.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Grow Your Business</h3>
              <p className="text-gray-600">
                Build your reputation, get repeat clients, and scale your business with our platform.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white p-12 rounded-lg border border-gray-200 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#00A86B] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sign Up</h3>
                <p className="text-sm text-gray-600">Create your profile and tell us about your skills</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#00A86B] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Get Verified</h3>
                <p className="text-sm text-gray-600">Complete background check and verification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#00A86B] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Start Earning</h3>
                <p className="text-sm text-gray-600">Browse available tasks and start accepting jobs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#00A86B] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Get Paid</h3>
                <p className="text-sm text-gray-600">Receive payments directly to your account</p>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white p-12 rounded-lg border border-gray-200 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Requirements</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start">
                <div className="text-[#00A86B] text-xl mr-3">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">18+ Years Old</h4>
                  <p className="text-sm text-gray-600">Must be at least 18 years of age</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-[#00A86B] text-xl mr-3">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Background Check</h4>
                  <p className="text-sm text-gray-600">Pass our background verification process</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-[#00A86B] text-xl mr-3">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Valid ID</h4>
                  <p className="text-sm text-gray-600">Government-issued identification required</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-[#00A86B] text-xl mr-3">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Skills & Experience</h4>
                  <p className="text-sm text-gray-600">Relevant skills for the tasks you want to do</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">Join thousands of Taskers earning on their own terms</p>
            <button className="bg-[#00A86B] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#008a5a] transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

