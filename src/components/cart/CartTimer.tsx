"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useCart } from "@/hooks/useCart";

export default function CartTimer() {
  const t = useTranslations("nav");
  const { getTimeRemaining, clearCart } = useCart();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeRemaining();
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearCart();
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [getTimeRemaining, clearCart]);

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);
  const display = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <p className="mt-3 text-center text-xs text-gray-500">
      {t("completeIn")} {display} {t("minutes")}...
    </p>
  );
}
