import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const cities = [
  { name: 'New York', state: 'NY', services: 150 },
  { name: 'Los Angeles', state: 'CA', services: 120 },
  { name: 'Chicago', state: 'IL', services: 95 },
  { name: 'Houston', state: 'TX', services: 85 },
  { name: 'Phoenix', state: 'AZ', services: 70 },
  { name: 'Philadelphia', state: 'PA', services: 75 },
  { name: 'San Antonio', state: 'TX', services: 65 },
  { name: 'San Diego', state: 'CA', services: 80 },
  { name: 'Dallas', state: 'TX', services: 90 },
  { name: 'San Jose', state: 'CA', services: 60 },
  { name: 'Austin', state: 'TX', services: 70 },
  { name: 'Jacksonville', state: 'FL', services: 55 },
  { name: 'Fort Worth', state: 'TX', services: 50 },
  { name: 'Columbus', state: 'OH', services: 60 },
  { name: 'Charlotte', state: 'NC', services: 55 },
  { name: 'San Francisco', state: 'CA', services: 100 },
  { name: 'Indianapolis', state: 'IN', services: 50 },
  { name: 'Seattle', state: 'WA', services: 85 },
  { name: 'Denver', state: 'CO', services: 70 },
  { name: 'Boston', state: 'MA', services: 90 },
];

export default function ServicesByCityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Services By City</h1>
            <p className="text-lg text-gray-600">Find Taskers in your area</p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <input
              type="text"
              placeholder="Search for your city..."
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent text-lg"
            />
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <Link
                key={index}
                href={`/services-by-city/${city.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#00A86B] hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {city.name}, {city.state}
                </h3>
                <p className="text-sm text-gray-600">
                  {city.services}+ Taskers available
                </p>
              </Link>
            ))}
          </div>

          {/* Popular Categories */}
          <div className="mt-16 bg-white p-12 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Assembly', 'Mounting', 'Moving', 'Cleaning', 'Repairs', 'Painting'].map((service) => (
                <Link
                  key={service}
                  href={`/services?category=${service.toLowerCase()}`}
                  className="text-center p-4 border border-gray-200 rounded-lg hover:border-[#00A86B] hover:bg-[#00A86B]/5 transition-all"
                >
                  <p className="font-medium text-gray-900">{service}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

