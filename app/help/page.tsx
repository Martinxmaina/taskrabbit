import Header from '../components/Header';
import Footer from '../components/Footer';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How do I book a Tasker?',
        a: 'Simply browse our services, select the task you need help with, choose a date and time, and select a Tasker that fits your needs. You can chat with them before booking to discuss details.',
      },
      {
        q: 'How much does it cost?',
        a: 'Pricing varies by task type and location. Each service has a starting price, and Taskers set their own rates. You\'ll see the exact price before booking.',
      },
      {
        q: 'Are Taskers insured?',
        a: 'Yes, all Taskers are covered by our insurance while working on your task. This provides protection for both you and the Tasker.',
      },
    ],
  },
  {
    category: 'Payment',
    questions: [
      {
        q: 'How do I pay?',
        a: 'Payment is processed securely through our platform. You can pay with credit card, debit card, or other accepted payment methods.',
      },
      {
        q: 'When am I charged?',
        a: 'You\'re charged after the task is completed and you confirm you\'re satisfied with the work.',
      },
      {
        q: 'Can I tip my Tasker?',
        a: 'Yes! You can add a tip when you rate and review your Tasker after the task is completed.',
      },
    ],
  },
  {
    category: 'Cancellations',
    questions: [
      {
        q: 'Can I cancel a booking?',
        a: 'Yes, you can cancel up to 24 hours before the scheduled time without any charges. Cancellations within 24 hours may incur a fee.',
      },
      {
        q: 'What if my Tasker cancels?',
        a: 'If a Tasker cancels, we\'ll help you find a replacement immediately. You won\'t be charged, and we\'ll work to get your task completed as soon as possible.',
      },
    ],
  },
  {
    category: 'Safety',
    questions: [
      {
        q: 'Are Taskers background checked?',
        a: 'Yes, all Taskers undergo a comprehensive background check before they can join our platform.',
      },
      {
        q: 'What if something goes wrong?',
        a: 'We have a Happiness Pledge - if you\'re not satisfied, we\'ll work to make it right. Contact our support team and we\'ll help resolve any issues.',
      },
    ],
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
            <p className="text-lg text-gray-600">Find answers to common questions</p>
          </div>

          {/* Search */}
          <div className="mb-12">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent"
            />
          </div>

          {/* FAQs */}
          <div className="space-y-8">
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="bg-white p-8 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                <div className="space-y-6">
                  {category.questions.map((faq, qIndex) => (
                    <div key={qIndex}>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-12 bg-[#00A86B] text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
            <p className="mb-6">Our support team is here for you 24/7</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#00A86B] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

