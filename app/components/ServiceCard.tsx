import Link from 'next/link';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.id}`}
      className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#00A86B] hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#00A86B] transition-colors duration-200">
        {service.name}
      </h3>
      <p className="text-sm text-gray-600 mb-4">{service.description}</p>
      <p className="text-base font-semibold text-gray-900">
        Projects starting at <span className="text-[#00A86B]">${service.startingPrice}</span>
      </p>
    </Link>
  );
}

