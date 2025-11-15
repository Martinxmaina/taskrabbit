import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Taskrabbit</h1>
            <p className="text-lg text-gray-600">
              Connecting people with skilled Taskers to get things done
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-12 rounded-lg border border-gray-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Taskrabbit was founded on a simple idea: neighbors helping neighbors. We believe that everyone should have access to reliable, affordable help for everyday tasks, and that skilled individuals should be able to earn money doing what they love.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we're proud to connect millions of people with trusted Taskers who can help with everything from furniture assembly to home repairs, moving, cleaning, and more.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-[#00A86B] mb-2">3.4M+</div>
              <p className="text-gray-600">Tasks Completed</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-[#00A86B] mb-2">200K+</div>
              <p className="text-gray-600">Active Taskers</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-[#00A86B] mb-2">50+</div>
              <p className="text-gray-600">Cities Served</p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white p-12 rounded-lg border border-gray-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Safety</h3>
                <p className="text-gray-600">
                  Every Tasker is background checked and verified. We're committed to creating a safe, trustworthy platform for everyone.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Service</h3>
                <p className="text-gray-600">
                  We maintain high standards through our review system and Happiness Pledge, ensuring you get the quality service you deserve.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600">
                  We're building a community where neighbors help neighbors, creating connections and supporting local economies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We're constantly improving our platform to make it easier, faster, and more convenient to get things done.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="bg-white p-12 rounded-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We're always looking for talented people to join our team. Whether you're interested in engineering, design, operations, or customer support, we'd love to hear from you.
            </p>
            <a
              href="/careers"
              className="inline-block bg-[#00A86B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#008a5a] transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

