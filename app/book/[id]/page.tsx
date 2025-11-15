'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { allServices, serviceCategories } from '../../data/services';

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();
  const serviceId = params?.id as string;
  const service = allServices.find((s) => s.id === serviceId);
  const category = service ? serviceCategories.find((c) => c.id === service.category) : null;

  const [currentStep, setCurrentStep] = useState(1);
  const [taskLocation, setTaskLocation] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [taskOptions, setTaskOptions] = useState<string[]>([]);

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // In a real app, this would submit the booking
    alert('Booking submitted! Redirecting to Tasker selection...');
    router.push(`/book/${serviceId}/taskers`);
  };

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h1>
            <Link href="/services" className="text-[#00A86B] hover:underline">
              Browse all services
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        step <= currentStep
                          ? 'bg-[#00A86B] text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {step}
                    </div>
                    <div className="mt-2 text-xs text-center text-gray-600 hidden sm:block">
                      {step === 1 && 'Describe'}
                      {step === 2 && 'Location'}
                      {step === 3 && 'Options'}
                      {step === 4 && 'Details'}
                    </div>
                  </div>
                  {step < totalSteps && (
                    <div
                      className={`h-1 flex-1 mx-2 ${
                        step < currentStep ? 'bg-[#00A86B]' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Service Header */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{category?.icon || '🔧'}</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{service.name}</h1>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            {/* Step 1: Describe Task */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Describe your task</h2>
                <p className="text-gray-600 mb-6">
                  Tell us about your task. We use these details to show Taskers in your area who fit your needs.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What do you need help with?
                    </label>
                    <textarea
                      value={taskDetails}
                      onChange={(e) => setTaskDetails(e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent"
                      placeholder="Describe your task in detail..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Location */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your task location</h2>
                <p className="text-gray-600 mb-6">
                  Where should the Tasker come to complete your task?
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      value={taskLocation}
                      onChange={(e) => setTaskLocation(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent"
                      placeholder="Enter your address"
                    />
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      💡 Tip: Be as specific as possible. This helps Taskers find you easily.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Task Options */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Task options</h2>
                <p className="text-gray-600 mb-6">
                  Select any options that apply to your task.
                </p>
                <div className="space-y-3">
                  {[
                    'Need help moving heavy items',
                    'Requires special tools',
                    'Multiple rooms',
                    'Pet-friendly Tasker preferred',
                    'Eco-friendly products only',
                    'Rush job (same day)',
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-[#00A86B] cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={taskOptions.includes(option)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setTaskOptions([...taskOptions, option]);
                          } else {
                            setTaskOptions(taskOptions.filter((o) => o !== option));
                          }
                        }}
                        className="w-5 h-5 text-[#00A86B] border-gray-300 rounded focus:ring-[#00A86B]"
                      />
                      <span className="ml-3 text-gray-900">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Schedule & Details */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule your task</h2>
                <p className="text-gray-600 mb-6">
                  When would you like the Tasker to complete your task?
                </p>
                <div className="space-y-6">
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
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Task Summary</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><span className="font-medium">Service:</span> {service.name}</p>
                      <p><span className="font-medium">Location:</span> {taskLocation || 'Not set'}</p>
                      <p><span className="font-medium">Date:</span> {selectedDate || 'Not set'}</p>
                      <p><span className="font-medium">Time:</span> {selectedTime || 'Not set'}</p>
                      {taskOptions.length > 0 && (
                        <p><span className="font-medium">Options:</span> {taskOptions.length} selected</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Back
              </button>
              {currentStep < totalSteps ? (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-[#00A86B] text-white rounded-lg font-semibold hover:bg-[#008a5a] transition-colors"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!taskLocation || !selectedDate || !selectedTime || !taskDetails}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    !taskLocation || !selectedDate || !selectedTime || !taskDetails
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-[#00A86B] text-white hover:bg-[#008a5a]'
                  }`}
                >
                  Find Taskers
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

