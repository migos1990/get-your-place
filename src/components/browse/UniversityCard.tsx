"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { University } from "@/lib/types";

interface UniversityCardProps {
  university: University;
}

export default function UniversityCard({ university }: UniversityCardProps) {
  const locale = useLocale();
  const t = useTranslations("browse");

  return (
    <Link
      href={`/${locale}/browse/${university.city}/${university.slug}`}
      className="group relative overflow-hidden rounded-xl shadow-lg"
    >
      <div className="relative h-52">
        <Image
          src={university.image}
          alt={university.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h3 className="mb-3 text-xl font-bold">{university.name}</h3>
          <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium">
            {university.roomCount} {t("rooms")}
          </span>
          {university.status === "reservations_started" && (
            <p className="mt-2 text-xs opacity-80">{t("reservationsStarted")}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
