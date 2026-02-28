"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function CookieBanner() {
  const t = useTranslations("cookie");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-lg">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-2 text-sm font-bold text-gray-800">{t("title")}</h3>
        <p className="mb-4 text-xs text-gray-600">{t("description")}</p>
        <div className="flex gap-3">
          <button
            onClick={handleReject}
            className="rounded-lg border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {t("reject")}
          </button>
          <button
            onClick={handleAccept}
            className="rounded-lg bg-green-500 px-6 py-2 text-sm font-medium text-white hover:bg-green-600 transition-colors"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
