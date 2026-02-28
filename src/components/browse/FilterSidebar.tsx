"use client";

import { useTranslations } from "next-intl";
import PriceRangeSlider from "./PriceRangeSlider";
import { universities } from "@/data/universities";

interface Filters {
  university: string;
  searchName: string;
  leaseDuration: string;
  roommates: string;
  distance: string;
  priceRange: [number, number];
}

interface FilterSidebarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  resultCount: number;
}

export default function FilterSidebar({
  filters,
  onChange,
  resultCount,
}: FilterSidebarProps) {
  const t = useTranslations("browse");

  const update = (key: keyof Filters, value: string | [number, number]) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="space-y-5">
      {/* University */}
      <select
        value={filters.university}
        onChange={(e) => update("university", e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
      >
        <option value="">{t("allUniversities")}</option>
        {universities.map((u) => (
          <option key={u.slug} value={u.slug}>
            {u.name}
          </option>
        ))}
      </select>

      {/* Search by name */}
      <input
        type="text"
        value={filters.searchName}
        onChange={(e) => update("searchName", e.target.value)}
        placeholder={t("searchByName")}
        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
      />

      {/* Lease duration */}
      <select
        value={filters.leaseDuration}
        onChange={(e) => update("leaseDuration", e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
      >
        <option value="">{t("leaseDuration")}</option>
        <option value="2-4">2-4 months</option>
        <option value="4-8">4-8 months</option>
        <option value="8-12">8-12 months</option>
      </select>

      {/* Roommates */}
      <select
        value={filters.roommates}
        onChange={(e) => update("roommates", e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
      >
        <option value="">{t("roommates")}</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5+">5+</option>
      </select>

      {/* Distance */}
      <select
        value={filters.distance}
        onChange={(e) => update("distance", e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
      >
        <option value="">{t("universityDistance")}</option>
        <option value="10">{"< 10 min"}</option>
        <option value="20">{"< 20 min"}</option>
        <option value="30">{"< 30 min"}</option>
        <option value="45">{"< 45 min"}</option>
      </select>

      {/* Price range */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          {t("priceRange")}
        </label>
        <PriceRangeSlider
          min={0}
          max={1500}
          value={filters.priceRange}
          onChange={(v) => update("priceRange", v)}
        />
      </div>

      {/* Result count */}
      <p className="text-center text-sm font-medium text-gray-600">
        {resultCount} {t("apartments")}
      </p>
    </div>
  );
}
