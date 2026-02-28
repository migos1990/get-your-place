"use client";

import { useEffect, useRef } from "react";
import { Apartment } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface ApartmentMapProps {
  apartments: Apartment[];
}

export default function ApartmentMap({ apartments }: ApartmentMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      return;
    }

    import("mapbox-gl").then((mapboxgl) => {
      mapboxgl.default.accessToken = token;

      const map = new mapboxgl.default.Map({
        container: mapContainer.current!,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [-73.5673, 45.5017],
        zoom: 12,
      });

      apartments.forEach((apt) => {
        const popup = new mapboxgl.default.Popup({ offset: 25 }).setHTML(
          `<strong>${apt.name}</strong><br/>
           ${apt.neighborhood}<br/>
           ${formatPrice(apt.priceRange.min)} - ${formatPrice(apt.priceRange.max)}/mo`
        );

        new mapboxgl.default.Marker({ color: "#4A90D9" })
          .setLngLat([apt.coordinates.lng, apt.coordinates.lat])
          .setPopup(popup)
          .addTo(map);
      });

      mapRef.current = map;
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [apartments]);

  const hasToken = typeof window !== "undefined" && process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  if (!hasToken) {
    return (
      <div className="flex h-[500px] items-center justify-center rounded-lg bg-gray-100 text-gray-500">
        <div className="text-center">
          <p className="font-medium">Map requires a Mapbox token</p>
          <p className="mt-1 text-sm">
            Add NEXT_PUBLIC_MAPBOX_TOKEN to your .env.local file
          </p>
        </div>
      </div>
    );
  }

  return <div ref={mapContainer} className="h-[500px] rounded-lg" />;
}
