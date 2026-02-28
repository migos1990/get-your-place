"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { BedDouble, LayoutGrid, Maximize } from "lucide-react";
import { Room } from "@/lib/types";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";

interface RoomSelectorProps {
  rooms: Room[];
  apartmentId: string;
  apartmentName: string;
}

const bedTypeKey: Record<string, string> = {
  queen: "bedQueen",
  double: "bedDouble",
  single: "bedSingle",
};

export default function RoomSelector({
  rooms,
  apartmentId,
  apartmentName,
}: RoomSelectorProps) {
  const t = useTranslations("apartment");
  const { addItem, items } = useCart();

  const handleAddToCart = (room: Room, lease: string) => {
    if (items.some((i) => i.roomId === room.id)) return;
    addItem({
      apartmentId,
      apartmentName,
      roomId: room.id,
      roomName: room.name,
      price: room.price,
      addedAt: Date.now(),
      roomImage: room.images[0] || "",
    });
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-gray-800">
        {t("availableRooms")}
      </h2>
      <div className="space-y-6">
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            apartmentName={apartmentName}
            onReserve={(lease) => handleAddToCart(room, lease)}
            isInCart={items.some((i) => i.roomId === room.id)}
            t={t}
          />
        ))}
      </div>
    </div>
  );
}

function RoomCard({
  room,
  apartmentName,
  onReserve,
  isInCart,
  t,
}: {
  room: Room;
  apartmentName: string;
  onReserve: (lease: string) => void;
  isInCart: boolean;
  t: ReturnType<typeof useTranslations>;
}) {
  const [selectedLease, setSelectedLease] = useState(room.leaseDurations?.[0] || "");
  const bedLabel = bedTypeKey[room.bedType] ? t(bedTypeKey[room.bedType]) : room.bedType;

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      {/* Room photo with name + price overlay */}
      {room.images[0] && (
        <div className="relative h-48">
          <Image
            src={room.images[0]}
            alt={room.name}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-10">
            <p className="text-base font-bold text-white">
              {apartmentName} - {room.name}
            </p>
          </div>
          <div className="absolute top-3 right-3 rounded-md bg-white/90 px-2 py-1 text-sm font-bold text-gray-800">
            {formatPrice(room.price)}${t("perMonth")}
          </div>
        </div>
      )}

      {/* Room details with separators */}
      <div className="divide-y divide-gray-200">
        {/* Bed type */}
        <div className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700">
          <BedDouble className="h-5 w-5 text-gray-400 shrink-0" />
          <span>{bedLabel}</span>
        </div>

        {/* Windows */}
        <div className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700">
          <LayoutGrid className="h-5 w-5 text-gray-400 shrink-0" />
          <span>{room.windows} {t("windows")}</span>
        </div>

        {/* Room size */}
        <div className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700">
          <Maximize className="h-5 w-5 text-gray-400 shrink-0" />
          <span>{t("roomSize")} : {room.roomSize} m2</span>
        </div>

        {/* Insurance */}
        <div className="px-4 py-3">
          <p className="text-base font-medium text-primary">{t("insurance")}</p>
          <p className="mt-1 text-sm text-gray-600">
            {t("insuranceDesc")} 😇
          </p>
        </div>

        {/* Bedding */}
        <div className="px-4 py-3">
          <p className="text-base font-medium text-primary">{t("bedding")}</p>
          <p className="mt-1 text-sm text-gray-600">{t("beddingDesc")}</p>
        </div>

        {/* Lease duration */}
        <div className="px-4 py-3">
          <p className="mb-2 text-base font-medium text-primary">{t("leaseDuration")}</p>
          {room.available ? (
            <select
              value={selectedLease}
              onChange={(e) => setSelectedLease(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700"
            >
              {(room.leaseDurations || []).map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          ) : (
            <select disabled className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-400">
              <option>{t("leaseDuration")}</option>
            </select>
          )}
        </div>
      </div>

      {/* Reserve button */}
      <div className="p-4">
        {room.available ? (
          <button
            onClick={() => onReserve(selectedLease)}
            disabled={isInCart}
            className={`w-full rounded-lg py-3 text-sm font-medium transition-colors ${
              isInCart
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary-dark"
            }`}
          >
            {isInCart ? "In cart" : t("reserveRoom")}
          </button>
        ) : (
          <button
            disabled
            className="w-full rounded-lg bg-gray-500 py-3 text-sm font-medium text-white cursor-not-allowed"
          >
            {t("rentedUntil")} {room.availableTo}
          </button>
        )}
      </div>
    </div>
  );
}
