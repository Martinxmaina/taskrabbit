import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';
import TrustSection from './components/TrustSection';
import HowItWorks from './components/HowItWorks';
import { popularProjects, testimonials, allServices } from './data/services';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <StatsSection />

        {/* Popular Projects */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularProjects.map((project) => (
                <ServiceCard key={project.id} service={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              See what happy customers are saying about Taskrabbit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <TrustSection />

        {/* How It Works */}
        <HowItWorks />

        {/* All Services */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get help Today</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allServices.map((service) => (
                <a
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#00A86B] hover:shadow-md transition-all duration-200 text-center"
                >
                  <p className="text-sm font-medium text-gray-900 hover:text-[#00A86B] transition-colors">
                    {service.name}
                  </p>
                </a>
              ))}
        </div>
        </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
