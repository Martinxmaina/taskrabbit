export default function StatsSection() {
  const stats = [
    { label: 'Furniture Assemblies', value: '3.4 million+' },
    { label: 'Moving tasks', value: '1.5 million+' },
    { label: 'Items mounted', value: '1 million+' },
    { label: 'Home Repairs', value: '700,000+' },
    { label: 'Homes cleaned', value: '890,000+' },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#00A86B] mb-2">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

