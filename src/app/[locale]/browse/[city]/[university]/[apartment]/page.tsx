"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { MessageCircle, Eye, X } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ImageCarousel from "@/components/apartment/ImageCarousel";
import ApartmentInfo from "@/components/apartment/ApartmentInfo";
import AmenityList from "@/components/apartment/AmenityList";
import ApartmentDescription from "@/components/apartment/ApartmentDescription";
import RoomSelector from "@/components/apartment/RoomSelector";
import { apartments } from "@/data/apartments";
import { universities } from "@/data/universities";

export default function ApartmentDetailPage() {
  const params = useParams();
  const locale = useLocale();
  const t = useTranslations("apartment");
  const [showTourModal, setShowTourModal] = useState(false);

  const city = params.city as string;
  const university = params.university as string;
  const aptSlug = params.apartment as string;

  const apartment = apartments.find((a) => a.slug === aptSlug);
  const uni = universities.find((u) => u.slug === university);
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  if (!apartment) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-500">Apartment not found</p>
      </div>
    );
  }

  const description =
    locale === "fr" ? apartment.description.fr : apartment.description.en;

  return (
    <>
      <Breadcrumb
        items={[
          { label: cityName, href: `/${locale}/browse/${city}` },
          {
            label: uni?.name || university,
            href: `/${locale}/browse/${city}/${university}`,
          },
          { label: apartment.name },
        ]}
      />

      <div className="px-4 py-6">
        <div className="mx-auto max-w-3xl space-y-6">
          {/* Image carousel */}
          <ImageCarousel images={apartment.images} name={apartment.name} />

          {/* Info */}
          <ApartmentInfo apartment={apartment} university={university} />

          {/* Amenities */}
          <AmenityList amenities={apartment.amenities} locale={locale} />

          {/* CTA buttons */}
          <div className="space-y-3">
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors">
              <MessageCircle className="h-4 w-4" />
              {t("askQuestion")}
            </button>
            <button
              onClick={() => setShowTourModal(true)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
            >
              <Eye className="h-4 w-4" />
              {t("virtualTour")}
            </button>
          </div>

          {/* Description */}
          <ApartmentDescription description={description} />

          {/* Room selector */}
          <RoomSelector
            rooms={apartment.availableRooms}
            apartmentId={apartment.id}
            apartmentName={apartment.name}
          />
        </div>
      </div>

      {/* Virtual tour modal */}
      {showTourModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-4 max-w-sm rounded-xl bg-white p-6 text-center">
            <button
              onClick={() => setShowTourModal(false)}
              className="absolute right-3 top-3"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>
            <Eye className="mx-auto mb-3 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-lg font-bold">{t("virtualTourSoon")}</h3>
            <p className="mb-4 text-sm text-gray-600">
              {t("virtualTourSoonDesc")}
            </p>
            <button
              onClick={() => setShowTourModal(false)}
              className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary-dark"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
