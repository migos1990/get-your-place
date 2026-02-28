"use client";

import { useTranslations } from "next-intl";
import { Apartment } from "@/lib/types";
import ApartmentCard from "./ApartmentCard";

interface ApartmentGridProps {
  apartments: Apartment[];
  university?: string;
}

export default function ApartmentGrid({ apartments, university }: ApartmentGridProps) {
  const t = useTranslations("browse");

  if (apartments.length === 0) {
    return (
      <div className="py-12 text-center text-gray-500">
        <p>{t("noResults")}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {apartments.map((apt) => (
        <ApartmentCard key={apt.id} apartment={apt} university={university} />
      ))}
    </div>
  );
}
