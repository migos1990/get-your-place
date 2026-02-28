"use client";

import { useState, useMemo } from "react";
import { apartments } from "@/data/apartments";
import { Apartment } from "@/lib/types";

export interface Filters {
  university: string;
  searchName: string;
  leaseDuration: string;
  roommates: string;
  distance: string;
  priceRange: [number, number];
}

const defaultFilters: Filters = {
  university: "",
  searchName: "",
  leaseDuration: "",
  roommates: "",
  distance: "",
  priceRange: [0, 1500],
};

export function useFilters(initialUniversity: string = "") {
  const [filters, setFilters] = useState<Filters>({
    ...defaultFilters,
    university: initialUniversity,
  });

  const filtered = useMemo(() => {
    return apartments.filter((apt: Apartment) => {
      if (filters.university && !apt.universities.includes(filters.university)) {
        return false;
      }
      if (
        filters.searchName &&
        !apt.name.toLowerCase().includes(filters.searchName.toLowerCase())
      ) {
        return false;
      }
      if (
        apt.priceRange.min > filters.priceRange[1] ||
        apt.priceRange.max < filters.priceRange[0]
      ) {
        return false;
      }
      if (filters.roommates) {
        const target = filters.roommates === "5+" ? 5 : parseInt(filters.roommates);
        if (filters.roommates === "5+" ? apt.rooms < target : apt.rooms !== target) {
          return false;
        }
      }
      if (filters.distance && filters.university) {
        const maxMin = parseInt(filters.distance);
        const transitTime = apt.transitTimes[filters.university];
        if (transitTime) {
          const mins = parseInt(transitTime);
          if (!isNaN(mins) && mins > maxMin) return false;
        }
      }
      return true;
    });
  }, [filters]);

  return { filters, setFilters, filtered };
}
