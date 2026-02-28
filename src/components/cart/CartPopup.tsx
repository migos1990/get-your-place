"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { X } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import CartTimer from "./CartTimer";

interface CartPopupProps {
  onClose: () => void;
}

export default function CartPopup({ onClose }: CartPopupProps) {
  const locale = useLocale();
  const t = useTranslations("nav");
  const { items, totalPrice } = useCart();

  return (
    <div className="fixed right-0 top-14 z-50 w-80 bg-white shadow-xl border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-50 px-4 py-3">
        <h3 className="text-xs font-bold uppercase tracking-wide text-gray-700">{t("myCart")}</h3>
        <button onClick={onClose} aria-label="Close">
          <X className="h-4 w-4 text-gray-500" />
        </button>
      </div>

      <div className="p-4">
        {/* Items or empty state */}
        {items.length === 0 ? (
          <p className="text-center text-sm text-gray-500 py-2">{t("cartEmpty")}</p>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.roomId} className="flex justify-between text-sm">
                <span className="text-gray-700">{item.apartmentName} - {item.roomName}</span>
                <span className="font-medium">${item.price.toFixed(1)}</span>
              </div>
            ))}
          </div>
        )}

        {/* Reservation fee */}
        <div className="mt-3 text-sm text-gray-600">
          <span>{t("reservationFee")}: </span>
          <span className="font-medium">${totalPrice().toFixed(1)}</span>
        </div>

        {/* Timer */}
        <CartTimer />

        {/* Total + CTA */}
        <div className="mt-4 flex items-center justify-between border-t pt-3">
          <span className="text-lg font-bold">${totalPrice().toFixed(0)}</span>
          <Link
            href={`/${locale}/cart`}
            onClick={onClose}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
          >
            {t("viewCart")}
          </Link>
        </div>
      </div>
    </div>
  );
}
