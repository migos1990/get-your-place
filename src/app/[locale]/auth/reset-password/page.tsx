"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";

export default function ResetPasswordPage() {
  const t = useTranslations("auth");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <h1 className="mb-2 text-center text-2xl font-bold text-gray-800">
          {t("resetPassword")}
        </h1>
        <p className="mb-8 text-center text-sm text-gray-600">
          {t("resetPasswordDesc")}
        </p>

        {submitted ? (
          <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
            <CheckCircle className="mx-auto mb-3 h-10 w-10 text-green-500" />
            <p className="text-sm text-green-800">{t("resetSuccess")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {t("email")}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
            >
              {t("sendResetLink")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
