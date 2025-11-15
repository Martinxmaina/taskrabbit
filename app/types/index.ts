// Types for Taskrabbit clone

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  startingPrice: number;
  icon?: string;
}

export interface Tasker {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  skills: string[];
  image?: string;
  verified: boolean;
}

export interface Testimonial {
  id: string;
  customerName: string;
  customerInitial: string;
  taskerName: string;
  service: string;
  review: string;
  rating: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  stats?: {
    label: string;
    value: string;
  };
}

