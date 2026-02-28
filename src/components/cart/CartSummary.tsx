"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import CartTimer from "./CartTimer";
import { formatPrice } from "@/lib/utils";

export default function CartSummary() {
  const locale = useLocale();
  const t = useTranslations("cart");
  const { items, removeItem, totalPrice, processingFee, grandTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-gray-500">{t("empty")}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold">{t("title")}</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.roomId} className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <p className="font-medium">{item.apartmentName}</p>
              <p className="text-sm text-gray-500">{item.roomName}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium">{formatPrice(item.price)}/mo</span>
              <button
                onClick={() => removeItem(item.roomId)}
                className="text-red-500 hover:text-red-700"
                aria-label={t("remove")}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <CartTimer />

      <div className="mt-6 space-y-2">
        <div className="flex justify-between rounded-lg bg-primary px-4 py-3 text-white">
          <span>{t("subtotal")}:</span>
          <span className="font-bold">{formatPrice(totalPrice())}</span>
        </div>
        <div className="flex justify-between rounded-lg bg-amber-50 px-4 py-3">
          <span className="text-gray-700">{t("processingFee")}:</span>
          <span className="font-medium">{formatPrice(processingFee())}</span>
        </div>
        <div className="flex justify-between rounded-lg bg-primary px-4 py-3 text-white">
          <span>{t("total")}:</span>
          <span className="font-bold">{formatPrice(grandTotal())}</span>
        </div>
      </div>

      <Link
        href={`/${locale}/checkout`}
        className="mt-6 block w-full rounded-lg bg-primary py-3 text-center font-medium text-white hover:bg-primary-dark transition-colors"
      >
        {t("checkout")}
      </Link>
    </div>
  );
}
