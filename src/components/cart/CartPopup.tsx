"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { X } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import CartTimer from "./CartTimer";
import { formatPrice } from "@/lib/utils";

interface CartPopupProps {
  onClose: () => void;
}

export default function CartPopup({ onClose }: CartPopupProps) {
  const locale = useLocale();
  const t = useTranslations("nav");
  const { items, totalPrice } = useCart();

  return (
    <div className="fixed right-0 top-14 z-50 w-80 rounded-b-lg bg-white shadow-xl border border-gray-200">
      <div className="flex items-center justify-between border-b p-4">
        <h3 className="text-sm font-bold text-gray-800">{t("myCart")}</h3>
        <button onClick={onClose} aria-label="Close">
          <X className="h-4 w-4 text-gray-500" />
        </button>
      </div>

      <div className="p-4">
        {items.length === 0 ? (
          <p className="text-center text-sm text-gray-500">{t("cartEmpty")}</p>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.roomId} className="flex justify-between text-sm">
                <span>{item.apartmentName} - {item.roomName}</span>
                <span className="font-medium">{formatPrice(item.price)}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 border-t pt-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">{t("reservationFee")}:</span>
            <span className="font-medium">{formatPrice(totalPrice())}</span>
          </div>
        </div>

        {items.length > 0 && <CartTimer />}

        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold">{formatPrice(totalPrice())}</span>
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
