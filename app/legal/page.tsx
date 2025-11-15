import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LegalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Legal</h1>
          
          <div className="bg-white p-12 rounded-lg border border-gray-200 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Last updated: January 1, 2025
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Taskrabbit. By accessing or using our platform, you agree to be bound by these Terms of Service.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Acceptance of Terms</h3>
              <p className="text-gray-700 leading-relaxed">
                By using Taskrabbit, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Use of Service</h3>
              <p className="text-gray-700 leading-relaxed">
                You may use our platform to connect with Taskers for various services. You agree to use the service only for lawful purposes and in accordance with these terms.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. User Responsibilities</h3>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
              </p>
            </section>

            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Last updated: January 1, 2025
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We respect your privacy and are committed to protecting your personal information.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information We Collect</h3>
              <p className="text-gray-700 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, book a task, or contact us for support.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How We Use Your Information</h3>
              <p className="text-gray-700 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
              </p>
            </section>

            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these legal documents, please contact us at legal@taskrabbit.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

