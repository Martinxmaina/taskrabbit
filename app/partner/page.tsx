import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PartnerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Partner with Taskrabbit</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrate Taskrabbit services into your platform and offer your customers convenient access to skilled Taskers.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Increase Revenue</h3>
              <p className="text-gray-600">
                Add value to your platform by offering on-demand services that your customers need.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhance Customer Experience</h3>
              <p className="text-gray-600">
                Provide a seamless experience with trusted Taskers available at the click of a button.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Integration</h3>
              <p className="text-gray-600">
                Simple API integration with comprehensive documentation and dedicated support.
              </p>
            </div>
          </div>

          {/* Partnership Types */}
          <div className="bg-white p-12 rounded-lg border border-gray-200 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Partnership Types</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">E-commerce Partners</h3>
                <p className="text-gray-600 mb-4">
                  Offer assembly and installation services for furniture and home goods purchased on your platform.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#00A86B] mr-2">✓</span>
                    <span>Furniture assembly services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A86B] mr-2">✓</span>
                    <span>Product installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A86B] mr-2">✓</span>
                    <span>White-label options</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Partners</h3>
                <p className="text-gray-600 mb-4">
                  Integrate Taskrabbit services into your business operations and workflows.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#00A86B] mr-2">✓</span>
                    <span>Custom API solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A86B] mr-2">✓</span>
                    <span>Dedicated account management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A86B] mr-2">✓</span>
                    <span>Volume discounts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-white p-12 rounded-lg border border-gray-200 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-4xl mb-4">🏪</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">IKEA</h3>
                <p className="text-gray-600">
                  "Taskrabbit has been an invaluable partner, helping our customers get their furniture assembled quickly and professionally."
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Management Companies</h3>
                <p className="text-gray-600">
                  "We use Taskrabbit for maintenance and repairs across our properties. It's reliable, fast, and cost-effective."
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-[#00A86B] text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-lg mb-8">Let's discuss how we can work together</p>
            <button className="bg-white text-[#00A86B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Contact Partnership Team
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

