"use client";

import { useTranslations } from "next-intl";

interface ApartmentDescriptionProps {
  description: string;
}

export default function ApartmentDescription({
  description,
}: ApartmentDescriptionProps) {
  const t = useTranslations("apartment");

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-gray-300 uppercase tracking-wide">
        {t("theApartment")}
      </h2>
      <div className="rounded-lg bg-white p-5 shadow-sm border border-gray-100">
        <p className="text-sm text-gray-700 leading-relaxed text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}
