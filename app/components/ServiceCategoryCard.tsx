import Link from 'next/link';
import { ServiceCategory } from '../types';

interface ServiceCategoryCardProps {
  category: ServiceCategory;
}

export default function ServiceCategoryCard({ category }: ServiceCategoryCardProps) {
  return (
    <Link
      href={`/services?category=${category.id}`}
      className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#00A86B] hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1"
    >
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-200">{category.icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#00A86B] transition-colors duration-200">
        {category.name}
      </h3>
      <p className="text-sm text-gray-600 mb-4">{category.description}</p>
      {category.stats && (
        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-1">{category.stats.label}</p>
          <p className="text-lg font-semibold text-gray-900">{category.stats.value}</p>
        </div>
      )}
    </Link>
  );
}

