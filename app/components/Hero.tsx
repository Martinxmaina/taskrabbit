'use client';

import Link from 'next/link';
import { serviceCategories } from '../data/services';

export default function Hero() {

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Book trusted help
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            for home tasks
          </h2>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
          {serviceCategories.map((category) => (
            <Link
              key={category.id}
              href={`/book/${category.id}/details`}
              className={`p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 text-center ${
                selectedCategory === category.id
                  ? 'border-[#00A86B] bg-[#00A86B]/5 scale-105'
                  : 'border-gray-200 hover:border-[#00A86B] bg-white'
              }`}
            >
              <div className="text-3xl mb-2 transform transition-transform duration-200 hover:scale-110">{category.icon}</div>
              <p className="text-sm font-medium text-gray-900">{category.name}</p>
            </Link>
          ))}
        </div>

        {/* Featured Service */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3">🔧</span>
            <h3 className="text-2xl font-bold text-gray-900">Assembly</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Assemble or disassemble furniture items by unboxing, building, and any cleanup.
          </p>
          <p className="text-sm text-gray-500 italic">
            Now Trending: Curved sofas, computer desks, and sustainable materials.
          </p>
        </div>
      </div>
    </section>
  );
}

