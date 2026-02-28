"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { MapPin, Bed, Maximize } from "lucide-react";
import { Apartment } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface ApartmentCardProps {
  apartment: Apartment;
  university?: string;
}

export default function ApartmentCard({ apartment, university }: ApartmentCardProps) {
  const locale = useLocale();
  const t = useTranslations("apartment");
  const uniSlug = university || apartment.universities[0];

  return (
    <Link
      href={`/${locale}/browse/${apartment.city}/${uniSlug}/${apartment.slug}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={apartment.images[0]}
          alt={apartment.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <h3 className="text-lg font-bold text-white">{apartment.name}</h3>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{apartment.neighborhood}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Bed className="h-4 w-4 text-primary" />
            {apartment.rooms} {t("bedrooms")}
          </span>
          <span className="flex items-center gap-1">
            <Maximize className="h-4 w-4 text-primary" />
            {apartment.size} m²
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            {formatPrice(apartment.priceRange.min)} - {formatPrice(apartment.priceRange.max)}
          </span>
          <span className="text-xs text-gray-500">{t("perMonth")}</span>
        </div>
      </div>
    </Link>
  );
}
