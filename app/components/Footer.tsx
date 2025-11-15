import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Discover */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Discover</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/become-a-tasker" className="hover:text-[#00A86B] transition-colors">Become a Tasker</Link></li>
              <li><Link href="/services-by-city" className="hover:text-[#00A86B] transition-colors">Services By City</Link></li>
              <li><Link href="/services" className="hover:text-[#00A86B] transition-colors">Services Nearby</Link></li>
              <li><Link href="/services" className="hover:text-[#00A86B] transition-colors">All Services</Link></li>
              <li><Link href="/elite-taskers" className="hover:text-[#00A86B] transition-colors">Elite Taskers</Link></li>
              <li><Link href="/help" className="hover:text-[#00A86B] transition-colors">Help</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-[#00A86B] transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-[#00A86B] transition-colors">Careers</Link></li>
              <li><Link href="/partner" className="hover:text-[#00A86B] transition-colors">Partner with Taskrabbit</Link></li>
              <li><Link href="/blog" className="hover:text-[#00A86B] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Terms & Privacy</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/legal" className="hover:text-[#00A86B] transition-colors">Legal</Link></li>
              <li><Link href="/privacy" className="hover:text-[#00A86B] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Follow us!</h3>
            <p className="text-sm text-gray-600 mb-4">We're friendly:</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#00A86B] transition-colors" aria-label="Facebook">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-[#00A86B] transition-colors" aria-label="Twitter">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-[#00A86B] transition-colors" aria-label="Instagram">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-[#00A86B] transition-colors" aria-label="TikTok">TikTok</a>
              <a href="#" className="text-gray-600 hover:text-[#00A86B] transition-colors" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Taskrabbit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

