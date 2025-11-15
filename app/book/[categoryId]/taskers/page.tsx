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
    image: '👩',
    verified: true,
    skills: ['Yard Work', 'Landscaping', 'Garden Cleanup'],
    responseTime: 'Usually responds in 1 hour',
  },
  {
    id: '2',
    name: 'Michael Chen',
    rating: 4.9,
    reviews: 289,
    tasks: 380,
    price: 70,
    image: '👨',
    verified: true,
    skills: ['Lawn Care', 'Tree Trimming', 'Mulching'],
    responseTime: 'Usually responds in 30 minutes',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    rating: 5,
    reviews: 412,
    tasks: 520,
    price: 60,
    image: '👩',
    verified: true,
    skills: ['Weed Removal', 'Planting', 'Fertilizing'],
    responseTime: 'Usually responds in 2 hours',
  },
  {
    id: '4',
    name: 'David Kim',
    rating: 4.8,
    reviews: 267,
    tasks: 340,
    price: 75,
    image: '👨',
    verified: true,
    skills: ['Yard Work', 'Leaf Raking', 'Garden Cleanup'],
    responseTime: 'Usually responds in 1 hour',
  },
];

export default function TaskersPage() {
  const params = useParams();
  const categoryId = params.categoryId as string;
  const [selectedTasker, setSelectedTasker] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Link href={`/book/${categoryId}/details`} className="text-[#00A86B] hover:underline">
              ← Back to task details
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Available Taskers</h1>
          <p className="text-gray-600 mb-8">Choose a Tasker that fits your needs</p>

          {/* Filters */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
            <div className="flex flex-wrap gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B]">
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: Highest First</option>
                <option>Most Reviews</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B]">
                <option>All Taskers</option>
                <option>Verified Only</option>
                <option>Elite Taskers</option>
              </select>
            </div>
          </div>

          {/* Taskers Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {mockTaskers.map((tasker) => (
              <div
                key={tasker.id}
                className={`bg-white p-6 rounded-lg border-2 transition-all ${
                  selectedTasker === tasker.id
                    ? 'border-[#00A86B] shadow-lg'
                    : 'border-gray-200 hover:border-[#00A86B]'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{tasker.image}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold text-gray-900">{tasker.name}</h3>
                        {tasker.verified && (
                          <svg className="w-5 h-5 text-[#00A86B]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mb-2">
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
                          {tasker.rating} ({tasker.reviews} reviews)
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{tasker.responseTime}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#00A86B]">${tasker.price}</div>
                    <div className="text-sm text-gray-600">per hour</div>
                  </div>
                </div>

                <div className="mb-4">
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

                <button
                  onClick={() => setSelectedTasker(tasker.id)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    selectedTasker === tasker.id
                      ? 'bg-[#00A86B] text-white hover:bg-[#008a5a]'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedTasker === tasker.id ? 'Selected' : 'Select Tasker'}
                </button>
              </div>
            ))}
          </div>

          {/* Continue Button */}
          {selectedTasker && (
            <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Selected Tasker</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {mockTaskers.find((t) => t.id === selectedTasker)?.name}
                  </p>
                </div>
                <button className="bg-[#00A86B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#008a5a] transition-colors">
                  Continue to Booking
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

