"use client";

import {
  Wifi,
  Wind,
  WashingMachine,
  Flame,
  Droplets,
  Zap,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react";

const amenityIcons: Record<string, typeof Wifi> = {
  wifi: Wifi,
  dryer: Wind,
  washer: WashingMachine,
  heating: Flame,
  "hot-water": Droplets,
  electricity: Zap,
  dishwasher: UtensilsCrossed,
  cleaning: Sparkles,
};

const amenityLabels: Record<string, { en: string; fr: string }> = {
  wifi: { en: "WiFi", fr: "WiFi" },
  dryer: { en: "Dryer", fr: "Sèche-linge" },
  washer: { en: "Washing machine", fr: "Lave-linge" },
  heating: { en: "Heating", fr: "Chauffage" },
  "hot-water": { en: "Hot water", fr: "Eau chaude" },
  electricity: { en: "Electricity", fr: "Électricité" },
  dishwasher: { en: "Dishwasher", fr: "Lave-vaisselle" },
  cleaning: { en: "Cleaning service", fr: "Service de ménage" },
};

interface AmenityListProps {
  amenities: string[];
  locale: string;
}

export default function AmenityList({ amenities, locale }: AmenityListProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {amenities.map((amenity) => {
        const Icon = amenityIcons[amenity] || Zap;
        const label =
          amenityLabels[amenity]?.[locale as "en" | "fr"] || amenity;
        return (
          <div
            key={amenity}
            className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm text-primary"
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
}
