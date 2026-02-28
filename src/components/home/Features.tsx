"use client";

import { useTranslations } from "next-intl";
import { Zap, KeyRound, CalendarDays, ThumbsUp } from "lucide-react";

export default function Features() {
  const t = useTranslations("home");

  const features = [
    { icon: Zap, title: t("allInclusive"), desc: t("allInclusiveDesc") },
    { icon: KeyRound, title: t("smartAccess"), desc: t("smartAccessDesc") },
    { icon: CalendarDays, title: t("flexibleLease"), desc: t("flexibleLeaseDesc") },
    { icon: ThumbsUp, title: t("noHassle"), desc: t("noHassleDesc") },
  ];

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
          {t("featuresTitle")}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
