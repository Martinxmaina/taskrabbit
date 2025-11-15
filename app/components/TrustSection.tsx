export default function TrustSection() {
  const features = [
    {
      title: 'Happiness Pledge',
      description: "If you're not satisfied, we'll work to make it right.",
      icon: '✓'
    },
    {
      title: 'Vetted Taskers',
      description: 'Taskers are always background checked before joining the platform.',
      icon: '✓'
    },
    {
      title: 'Dedicated Support',
      description: 'Friendly service when you need us – every day of the week.',
      icon: '✓'
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Your satisfaction, guaranteed
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[#00A86B] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

