"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { List, Map } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FilterSidebar from "@/components/browse/FilterSidebar";
import ApartmentGrid from "@/components/browse/ApartmentGrid";
import { useFilters } from "@/hooks/useFilters";
import { universities } from "@/data/universities";
import dynamic from "next/dynamic";

const ApartmentMap = dynamic(() => import("@/components/browse/ApartmentMap"), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 rounded-lg animate-pulse" />,
});

export default function UniversityListingPage() {
  const params = useParams();
  const t = useTranslations("browse");
  const city = params.city as string;
  const university = params.university as string;
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  const uni = universities.find((u) => u.slug === university);
  const uniName = uni?.name || university;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  const { filters, setFilters, filtered } = useFilters(university);

  return (
    <>
      <Breadcrumb
        items={[
          { label: cityName, href: `/${params.locale}/browse/${city}` },
          { label: uniName },
        ]}
      />

      <div className="px-4 py-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Filter sidebar */}
            <aside className="w-full lg:w-64 shrink-0">
              <FilterSidebar
                filters={filters}
                onChange={setFilters}
                resultCount={filtered.length}
              />

              {/* View toggle */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setViewMode("list")}
                  className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    viewMode === "list"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <List className="h-4 w-4" />
                  {t("listView")}
                </button>
                <button
                  onClick={() => setViewMode("map")}
                  className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    viewMode === "map"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Map className="h-4 w-4" />
                  {t("mapView")}
                </button>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1">
              {viewMode === "list" ? (
                <ApartmentGrid apartments={filtered} university={university} />
              ) : (
                <ApartmentMap apartments={filtered} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
