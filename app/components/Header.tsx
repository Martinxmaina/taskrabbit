'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#00A86B]">Taskrabbit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/services" className="text-gray-700 hover:text-[#00A86B] transition-colors">
              Services
            </Link>
            <Link href="/become-a-tasker" className="text-gray-700 hover:text-[#00A86B] transition-colors">
              Become a Tasker
            </Link>
            <Link href="/sign-in" className="text-gray-700 hover:text-[#00A86B] transition-colors">
              Sign up / Log in
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link href="/services" className="block text-gray-700 hover:text-[#00A86B] transition-colors">
              Services
            </Link>
            <Link href="/become-a-tasker" className="block text-gray-700 hover:text-[#00A86B] transition-colors">
              Become a Tasker
            </Link>
            <Link href="/sign-in" className="block text-gray-700 hover:text-[#00A86B] transition-colors">
              Sign up / Log in
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

