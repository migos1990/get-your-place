"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Room } from "@/lib/types";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";

interface RoomSelectorProps {
  rooms: Room[];
  apartmentId: string;
  apartmentName: string;
}

export default function RoomSelector({
  rooms,
  apartmentId,
  apartmentName,
}: RoomSelectorProps) {
  const t = useTranslations("apartment");
  const { addItem, items } = useCart();

  const handleAddToCart = (room: Room) => {
    if (items.some((i) => i.roomId === room.id)) return;
    addItem({
      apartmentId,
      apartmentName,
      roomId: room.id,
      roomName: room.name,
      price: room.price,
      addedAt: Date.now(),
    });
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-gray-800">
        {t("availableRooms")}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {rooms.map((room) => {
          const isInCart = items.some((i) => i.roomId === room.id);
          return (
            <div
              key={room.id}
              className={`overflow-hidden rounded-lg border ${
                room.available ? "border-gray-200" : "border-gray-100 opacity-60"
              }`}
            >
              {room.images[0] && (
                <div className="relative h-32">
                  <Image
                    src={room.images[0]}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{room.name}</h4>
                  <span className="text-lg font-bold text-primary">
                    {formatPrice(room.price)}
                    <span className="text-xs font-normal text-gray-500">
                      {t("perMonth")}
                    </span>
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  {t("availableFrom")} {room.availableFrom}
                </p>
                {room.available && (
                  <button
                    onClick={() => handleAddToCart(room)}
                    disabled={isInCart}
                    className={`mt-3 w-full rounded-lg py-2 text-sm font-medium transition-colors ${
                      isInCart
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-primary text-white hover:bg-primary-dark"
                    }`}
                  >
                    {isInCart ? "In cart" : t("addToCart")}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
