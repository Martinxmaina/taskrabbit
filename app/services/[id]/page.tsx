'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { allServices } from '../../data/services';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const serviceId = params?.id as string;
  const service = allServices.find((s) => s.id === serviceId);

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h1>
            <a href="/services" className="text-[#00A86B] hover:underline">
              Browse all services
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Service Info */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{service.description}</p>
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
                <p className="text-2xl font-bold text-[#00A86B] mb-2">
                  Starting at ${service.startingPrice}
                </p>
                <p className="text-sm text-gray-600">Price may vary based on task complexity</p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book this service</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent"
                  >
                    <option value="">Choose a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>
                <Link
                  href={`/book/${service.category}/details`}
                  className="w-full bg-[#00A86B] text-white py-3 rounded-lg font-semibold hover:bg-[#008a5a] transition-colors duration-200 block text-center"
                >
                  Book This Service
                </Link>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

