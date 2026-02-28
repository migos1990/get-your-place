"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FileText } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const t = useTranslations("checkout");
  const { totalPrice, processingFee, grandTotal } = useCart();
  const [wantsFurniture, setWantsFurniture] = useState(true);

  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Acceptance letter notice */}
        <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4">
          <FileText className="h-5 w-5 shrink-0 text-primary mt-0.5" />
          <p className="text-sm text-gray-700">
            {t("acceptanceLetter")}
          </p>
        </div>

        {/* Furniture option */}
        <div className="rounded-lg border border-gray-200 p-5">
          <h3 className="mb-1 font-medium text-gray-800">
            {t("furnitureOption")}
          </h3>
          <p className="mb-4 text-sm text-gray-500">
            {t("free")} - $ {t("depositRequired")}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setWantsFurniture(true)}
              className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
                wantsFurniture
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {t("yes")}
            </button>
            <button
              onClick={() => setWantsFurniture(false)}
              className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
                !wantsFurniture
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {t("no")}
            </button>
          </div>
        </div>

        {/* Price summary */}
        <div className="space-y-2">
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

        {/* Deposit note */}
        {wantsFurniture && (
          <p className="text-xs text-gray-500 leading-relaxed">
            {t("depositNote")}
          </p>
        )}

        {/* Next step */}
        <button className="w-full rounded-lg bg-primary py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors">
          {t("nextStep")}
        </button>
      </div>
    </div>
  );
}
