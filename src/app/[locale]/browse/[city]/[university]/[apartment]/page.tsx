"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { MessageCircle, Eye, X, User, Mail } from "lucide-react";
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
  const [showQuestionModal, setShowQuestionModal] = useState(false);

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

      <div className="mx-auto max-w-3xl">
        {/* Image carousel */}
        <div className="px-4 pt-6">
          <ImageCarousel images={apartment.images} name={apartment.name} />
        </div>

        {/* Info with separators */}
        <div className="px-4 pt-4">
          <ApartmentInfo apartment={apartment} university={university} />
        </div>

        {/* Amenities with separators */}
        <div className="px-4">
          <AmenityList amenities={apartment.amenities} locale={locale} />
        </div>

        {/* Full-bleed CTA buttons */}
        <div className="mt-4 space-y-0">
          <button
            onClick={() => setShowQuestionModal(true)}
            className="flex w-full items-center justify-center gap-2 bg-primary py-4 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            {t("askQuestion")}
          </button>
          <button
            onClick={() => setShowTourModal(true)}
            className="flex w-full items-center justify-center gap-2 bg-primary py-4 text-sm font-medium text-white hover:bg-primary-dark transition-colors border-t border-white/20"
          >
            <Eye className="h-4 w-4" />
            {t("virtualTour")}
          </button>
        </div>

        {/* Description */}
        <div className="px-4 py-6">
          <ApartmentDescription description={description} />
        </div>

        {/* Room selector */}
        <div className="px-4 pb-8">
          <RoomSelector
            rooms={apartment.availableRooms}
            apartmentId={apartment.id}
            apartmentName={apartment.name}
          />
        </div>
      </div>

      {/* Ask a question modal */}
      {showQuestionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative mx-4 w-full max-w-md overflow-hidden rounded-xl bg-white shadow-2xl">
            {/* Blue header */}
            <div className="flex items-center justify-between bg-primary px-5 py-4">
              <h3 className="text-base font-medium text-white">
                {t("askQuestionTitle")}
              </h3>
              <button onClick={() => setShowQuestionModal(false)}>
                <X className="h-5 w-5 text-white/80 hover:text-white" />
              </button>
            </div>

            {/* Form body */}
            <div className="p-5 space-y-4">
              {/* Subject */}
              <div>
                <input
                  type="text"
                  placeholder={t("subject")}
                  className="w-full border-b border-gray-200 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-primary focus:outline-none"
                />
              </div>

              {/* Message */}
              <textarea
                rows={5}
                placeholder={t("questionPlaceholder")}
                className="w-full rounded-lg bg-gray-50 p-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary"
              />

              {/* Name */}
              <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2.5">
                <User className="h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder={t("yourName")}
                  className="flex-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2.5">
                <Mail className="h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  placeholder={t("yourEmail")}
                  className="flex-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>

              {/* Submit */}
              <button
                onClick={() => setShowQuestionModal(false)}
                className="w-full rounded-lg bg-primary py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
              >
                {t("sendMessage")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Virtual tour modal */}
      {showTourModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative mx-4 max-w-sm rounded-xl bg-white p-6 text-center">
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
