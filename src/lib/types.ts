export interface Room {
  id: string;
  name: string;
  price: number;
  available: boolean;
  availableFrom: string;
  availableTo: string;
  images: string[];
  furnished: boolean;
  bedType: string;
  windows: number;
  roomSize: number;
  leaseDurations: string[];
}

export interface Apartment {
  id: string;
  name: string;
  slug: string;
  city: string;
  neighborhood: string;
  universities: string[];
  transitTimes: Record<string, string>;
  rooms: number;
  bathrooms: number;
  size: number;
  priceRange: { min: number; max: number };
  amenities: string[];
  images: string[];
  description: { en: string; fr: string };
  virtualTourUrl?: string;
  availableRooms: Room[];
  status: "available" | "reservations_started" | "full";
  coordinates: { lat: number; lng: number };
}

export interface City {
  id: string;
  name: string;
  slug: string;
  image: string;
  apartmentCount: number;
}

export interface University {
  id: string;
  name: string;
  slug: string;
  city: string;
  roomCount: number;
  image: string;
  status: string;
}

export interface CartItem {
  apartmentId: string;
  apartmentName: string;
  roomId: string;
  roomName: string;
  price: number;
  addedAt: number;
  roomImage?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: { en: string; fr: string };
  bio: { en: string; fr: string };
  image: string;
}

export interface FAQItem {
  id: string;
  question: { en: string; fr: string };
  answer: { en: string; fr: string };
  category: string;
}
