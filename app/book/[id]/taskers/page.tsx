'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const mockTaskers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    rating: 5,
    reviews: 324,
    tasks: 450,
    price: 65,
    verified: true,
    skills: ['Yardwork', 'Landscaping', 'Outdoor'],
    responseTime: 'Usually responds in 1 hour',
    image: '👩‍🌾',
  },
  {
    id: '2',
    name: 'Michael Chen',
    rating: 4.9,
    reviews: 289,
    tasks: 380,
    price: 70,
    verified: true,
    skills: ['Yardwork', 'Heavy Lifting', 'Outdoor'],
    responseTime: 'Usually responds in 30 minutes',
    image: '👨‍💼',
  },
  {
    id: '3',
    name: 'James Wilson',
    rating: 5,
    reviews: 298,
    tasks: 390,
    price: 60,
    verified: true,
    skills: ['Yardwork', 'Lawn Care', 'Landscaping'],
    responseTime: 'Usually responds in 2 hours',
    image: '👨‍🌾',
  },
];

export default function TaskerSelectionPage() {
  const params = useParams();
  const serviceId = params?.id as string;
  const [selectedTasker, setSelectedTasker] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('rating');

  const sortedTaskers = [...mockTaskers].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-6">
            <Link
              href={`/book/${serviceId}`}
              className="text-[#00A86B] hover:underline text-sm mb-4 inline-block"
            >
              ← Back to booking details
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose a Tasker</h1>
            <p className="text-gray-600">
              Select a Tasker based on price, skills, and reviews
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6 flex flex-wrap gap-4 items-center">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent"
            >
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <span className="text-sm text-gray-600 ml-auto">
              {mockTaskers.length} Taskers available
            </span>
          </div>

          {/* Taskers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sortedTaskers.map((tasker) => (
              <div
                key={tasker.id}
                className={`bg-white p-6 rounded-lg border-2 transition-all cursor-pointer ${
                  selectedTasker === tasker.id
                    ? 'border-[#00A86B] shadow-lg'
                    : 'border-gray-200 hover:border-[#00A86B] hover:shadow-md'
                }`}
                onClick={() => setSelectedTasker(tasker.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{tasker.image}</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-gray-900">{tasker.name}</h3>
                        {tasker.verified && (
                          <svg className="w-5 h-5 text-[#00A86B]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(tasker.rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-sm text-gray-600 ml-2">
                          {tasker.rating} ({tasker.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">{tasker.responseTime}</p>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">{tasker.tasks}</span> tasks completed
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tasker.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-2xl font-bold text-[#00A86B]">${tasker.price}</p>
                    <p className="text-xs text-gray-600">per hour</p>
                  </div>
                  {selectedTasker === tasker.id && (
                    <div className="text-[#00A86B] font-semibold">Selected ✓</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Continue Button */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 sticky bottom-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Selected Tasker</p>
                <p className="text-lg font-semibold text-gray-900">
                  {selectedTasker
                    ? mockTaskers.find((t) => t.id === selectedTasker)?.name
                    : 'None selected'}
                </p>
              </div>
              <button
                disabled={!selectedTasker}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  selectedTasker
                    ? 'bg-[#00A86B] text-white hover:bg-[#008a5a]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                onClick={() => {
                  if (selectedTasker) {
                    alert('Booking confirmed! Redirecting to payment...');
                  }
                }}
              >
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

