"use client";

import { useTranslations } from "next-intl";
import { Search, CreditCard, Home } from "lucide-react";

export default function HowItWorks() {
  const t = useTranslations("home");

  const steps = [
    { icon: Search, num: "1", title: t("step1Title"), desc: t("step1Desc") },
    { icon: CreditCard, num: "2", title: t("step2Title"), desc: t("step2Desc") },
    { icon: Home, num: "3", title: t("step3Title"), desc: t("step3Desc") },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
          {t("howItWorks")}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                {step.num}
              </div>
              <step.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
