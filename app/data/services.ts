// Service data for Taskrabbit clone

import { Service, ServiceCategory, Testimonial } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'assembly',
    name: 'Assembly',
    icon: '🔧',
    description: 'Assemble or disassemble furniture items by unboxing, building, and any cleanup.',
    stats: {
      label: 'Furniture Assemblies',
      value: '3.4 million+'
    }
  },
  {
    id: 'mounting',
    name: 'Mounting',
    icon: '📺',
    description: 'Mount TVs, art, shelves, and more securely to your walls.',
    stats: {
      label: 'Items mounted',
      value: '1 million+'
    }
  },
  {
    id: 'moving',
    name: 'Moving',
    icon: '📦',
    description: 'Professional moving help for your home or apartment.',
    stats: {
      label: 'Moving tasks',
      value: '1.5 million+'
    }
  },
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: '🧹',
    description: 'Home and apartment cleaning services.',
    stats: {
      label: 'Homes cleaned',
      value: '890,000+'
    }
  },
  {
    id: 'outdoor',
    name: 'Outdoor Help',
    icon: '🌳',
    description: 'Yardwork, lawn care, and outdoor maintenance.',
  },
  {
    id: 'repairs',
    name: 'Home Repairs',
    icon: '🔨',
    description: 'Minor plumbing, electrical, and general home repairs.',
    stats: {
      label: 'Home Repairs',
      value: '700,000+'
    }
  },
  {
    id: 'painting',
    name: 'Painting',
    icon: '🎨',
    description: 'Interior and exterior painting services.',
  },
  {
    id: 'trending',
    name: 'Trending',
    icon: '🔥',
    description: 'Popular services right now.',
  },
];

export const popularProjects: Service[] = [
  { id: '1', name: 'Furniture Assembly', category: 'assembly', description: 'Assemble furniture items', startingPrice: 49 },
  { id: '2', name: 'Mount Art or Shelves', category: 'mounting', description: 'Mount artwork and shelves', startingPrice: 65 },
  { id: '3', name: 'Mount a TV', category: 'mounting', description: 'Professional TV mounting', startingPrice: 69 },
  { id: '4', name: 'Flat-Rate Move by Dolly™', category: 'moving', description: 'Flat rate moving service', startingPrice: 139 },
  { id: '5', name: 'Home & Apartment Cleaning', category: 'cleaning', description: 'Professional cleaning', startingPrice: 49 },
  { id: '6', name: 'Minor Plumbing Repairs', category: 'repairs', description: 'Plumbing fixes', startingPrice: 74 },
  { id: '7', name: 'Electrical Help', category: 'repairs', description: 'Electrical services', startingPrice: 69 },
  { id: '8', name: 'Heavy Lifting', category: 'moving', description: 'Heavy item moving', startingPrice: 61 },
];

export const allServices: Service[] = [
  { id: '1', name: 'General Mounting', category: 'mounting', description: 'Mount various items', startingPrice: 65 },
  { id: '2', name: 'TV Mounting', category: 'mounting', description: 'Mount your TV', startingPrice: 69 },
  { id: '3', name: 'Furniture Assembly', category: 'assembly', description: 'Assemble furniture', startingPrice: 49 },
  { id: '4', name: 'IKEA Furniture Assembly', category: 'assembly', description: 'IKEA assembly specialist', startingPrice: 49 },
  { id: '5', name: 'Help Moving', category: 'moving', description: 'Moving assistance', startingPrice: 61 },
  { id: '6', name: 'House Cleaning', category: 'cleaning', description: 'House cleaning', startingPrice: 49 },
  { id: '7', name: 'Yardwork', category: 'outdoor', description: 'Yard maintenance', startingPrice: 55 },
  { id: '8', name: 'Furniture Removal', category: 'moving', description: 'Remove furniture', startingPrice: 50 },
  { id: '9', name: 'Lawn Care', category: 'outdoor', description: 'Lawn maintenance', startingPrice: 45 },
  { id: '10', name: 'Hang Pictures', category: 'mounting', description: 'Hang artwork', startingPrice: 40 },
  { id: '11', name: 'In Home Furniture Movers', category: 'moving', description: 'Furniture moving', startingPrice: 60 },
  { id: '12', name: 'Shelf Mounting', category: 'mounting', description: 'Mount shelves', startingPrice: 55 },
  { id: '13', name: 'Light Installation', category: 'repairs', description: 'Install lights', startingPrice: 65 },
  { id: '14', name: 'Plumbing', category: 'repairs', description: 'Plumbing services', startingPrice: 74 },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    customerName: 'Elizabeth P.',
    customerInitial: 'E',
    taskerName: 'Vitalii',
    service: 'IKEA Furniture Assembly',
    review: 'Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it extends further.',
    rating: 5
  },
  {
    id: '2',
    customerName: 'Tiffany B.',
    customerInitial: 'T',
    taskerName: 'David',
    service: 'Furniture Assembly',
    review: 'David did an awesome job assembling crib and dresser for nursery. Really appreciate this! He cleaned up the area after his work, organized the boxes for easy disposal and went through the directions with us in the event we have to change crib settings.',
    rating: 5
  },
  {
    id: '3',
    customerName: 'Amanda L.',
    customerInitial: 'A',
    taskerName: 'Joe',
    service: 'Home repairs',
    review: 'I hired Joe to patch 2 holes on my wall and 1 hole on my ceiling. Joe was great with communication, was fast, professional and did a fantastic job. He even came back to do a second layer on the patches to make it look seamless with the rest of the wall and ceiling.',
    rating: 5
  },
  {
    id: '4',
    customerName: 'Sabrina K.',
    customerInitial: 'S',
    taskerName: 'Aleksandr',
    service: 'Electrical help',
    review: 'Aleksandr was fantastic! He came with all the equipment to do the job, even the hardware I didn\'t know I would need. He hung a heavy chandelier perfectly and fixed a cabinet to our wall. 100% would hire again.',
    rating: 5
  },
  {
    id: '5',
    customerName: 'Jana T.',
    customerInitial: 'J',
    taskerName: 'Jose',
    service: 'Plumbing',
    review: 'Jose fixed my AC drain line which was clogging my master bathroom sink. He was prompt, communicative, and efficient. Highly recommend!',
    rating: 5
  },
  {
    id: '6',
    customerName: 'Elisa R.',
    customerInitial: 'E',
    taskerName: 'Michael',
    service: 'General Mounting',
    review: 'Michael did a great job helping us install frameless glass hinged shower doors with an unusual set up. He was patient and willing to help figure it out with us. Thank you Michael!',
    rating: 5
  },
];

