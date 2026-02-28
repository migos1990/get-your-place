import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { cities } from "@/data/cities";

export default function CitiesPage() {
  return <CitiesContent />;
}

function CitiesContent() {
  const t = useTranslations("cities");

  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          {t("title")}
        </h1>
        <p className="mb-10 text-center text-gray-600">{t("subtitle")}</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`browse/${city.slug}`}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{city.name}</h3>
                  <p className="text-sm opacity-90">
                    {city.apartmentCount} apartments
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
