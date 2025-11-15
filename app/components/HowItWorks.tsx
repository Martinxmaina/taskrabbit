export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Choose a Tasker',
      description: 'Choose a Tasker by price, skills, and reviews.',
    },
    {
      number: '2',
      title: 'Schedule a Tasker',
      description: 'Schedule a Tasker as early as today.',
    },
    {
      number: '3',
      title: 'Chat, pay, tip, and review',
      description: 'Chat, pay, tip, and review all in one place.',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#00A86B] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#00A86B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#008a5a] transition-colors">
            Get help Today
          </button>
        </div>
      </div>
    </section>
  );
}

