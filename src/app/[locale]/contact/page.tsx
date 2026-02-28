"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MapPin, Mail, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          {t("title")}
        </h1>
        <p className="mb-10 text-center text-gray-600">{t("subtitle")}</p>

        {submitted ? (
          <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
            <CheckCircle className="mx-auto mb-3 h-12 w-12 text-green-500" />
            <p className="text-lg font-medium text-green-800">{t("success")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {t("name")}
              </label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {t("email")}
              </label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {t("message")}
              </label>
              <textarea
                required
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
            >
              {t("send")}
            </button>
          </form>
        )}

        <div className="mt-10 space-y-3 rounded-xl bg-gray-50 p-6">
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{t("address")}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <Mail className="h-5 w-5 text-primary" />
            <span>contact@getyourplace.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
