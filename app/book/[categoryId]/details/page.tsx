'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { serviceCategories } from '../../../data/services';

const categoryNames: { [key: string]: string } = {
  '113': 'Yard Work',
  'assembly': 'Assembly',
  'mounting': 'Mounting',
  'moving': 'Moving',
  'cleaning': 'Cleaning',
  'outdoor': 'Outdoor Help',
  'repairs': 'Home Repairs',
  'painting': 'Painting',
};

export default function BookingDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.categoryId as string;
  const categoryName = categoryNames[categoryId] || 'Service';

  const [currentStep, setCurrentStep] = useState(1);
  const [location, setLocation] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const totalSteps = 4;

  const taskOptions = [
    'Lawn mowing',
    'Weed removal',
    'Leaf raking',
    'Tree trimming',
    'Garden cleanup',
    'Mulching',
    'Fertilizing',
    'Planting',
  ];

  const handleOptionToggle = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const handleContinue = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit booking
      router.push(`/book/${categoryId}/taskers`);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

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
                      {step === 1 && 'Describe task'}
                      {step === 2 && 'Location'}
                      {step === 3 && 'Task options'}
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

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            {/* Step 1: Describe Task */}
            {currentStep === 1 && (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{categoryName}</h1>
                <p className="text-gray-600 mb-8">
                  Tell us about your task. We use these details to show Taskers in your area who fit your needs.
                </p>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Task Description
                  </label>
                  <textarea
                    value={taskDetails}
                    onChange={(e) => setTaskDetails(e.target.value)}
                    placeholder="Describe what you need help with..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleContinue}
                    disabled={!taskDetails.trim()}
                    className="bg-[#00A86B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#008a5a] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Location */}
            {currentStep === 2 && (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Your task location</h1>
                <p className="text-gray-600 mb-8">
                  Where should the Tasker come to complete this task?
                </p>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter your address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={handleBack}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleContinue}
                    disabled={!location.trim()}
                    className="bg-[#00A86B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#008a5a] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Task Options */}
            {currentStep === 3 && (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Task options</h1>
                <p className="text-gray-600 mb-8">
                  Select all that apply to help us match you with the right Tasker.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {taskOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionToggle(option)}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        selectedOptions.includes(option)
                          ? 'border-[#00A86B] bg-[#00A86B]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">{option}</span>
                        {selectedOptions.includes(option) && (
                          <svg className="w-5 h-5 text-[#00A86B]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={handleBack}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleContinue}
                    className="bg-[#00A86B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#008a5a] transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Details */}
            {currentStep === 4 && (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Tell us the details of your task</h1>
                <p className="text-gray-600 mb-8">
                  Any additional information that will help the Tasker prepare?
                </p>
                <div className="space-y-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Duration
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent">
                      <option>Less than 1 hour</option>
                      <option>1-2 hours</option>
                      <option>2-4 hours</option>
                      <option>4-6 hours</option>
                      <option>More than 6 hours</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent">
                      <option>Morning (8 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 5 PM)</option>
                      <option>Evening (5 PM - 8 PM)</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Any special instructions or requirements?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={handleBack}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleContinue}
                    className="bg-[#00A86B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#008a5a] transition-colors"
                  >
                    Find Taskers
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Help Text */}
          <div className="mt-6 text-center">
            <Link href="/help" className="text-sm text-[#00A86B] hover:underline">
              Need help? Contact support
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

