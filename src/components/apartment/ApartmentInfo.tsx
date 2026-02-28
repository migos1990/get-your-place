"use client";

import { useTranslations } from "next-intl";
import { MapPin, Bus, Bed, Maximize, Bath, Wifi } from "lucide-react";
import { Apartment } from "@/lib/types";

interface ApartmentInfoProps {
  apartment: Apartment;
  university?: string;
}

export default function ApartmentInfo({ apartment, university }: ApartmentInfoProps) {
  const t = useTranslations("apartment");
  const transitUni = university || apartment.universities[0];
  const transitTime = apartment.transitTimes[transitUni] || "N/A";

  const items = [
    { icon: MapPin, label: `${t("neighborhood")} : ${apartment.neighborhood}` },
    { icon: Bus, label: `${transitTime} ${t("transitTime")} ${transitUni.toUpperCase()}` },
    { icon: Bed, label: `${apartment.rooms} ${t("bedrooms")}` },
    { icon: Maximize, label: `${apartment.size} m²` },
    { icon: Bath, label: `${apartment.bathrooms} ${t("bathrooms")}` },
    { icon: Wifi, label: t("unlimitedInternet") },
  ];

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
          <item.icon className="h-5 w-5 text-primary shrink-0" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
