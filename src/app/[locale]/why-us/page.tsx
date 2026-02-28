import { useTranslations } from "next-intl";
import { Globe, Plane, Zap, MapPin } from "lucide-react";

export default function WhyUsPage() {
  return <WhyUsContent />;
}

function WhyUsContent() {
  const t = useTranslations("whyUs");

  const benefits = [
    { icon: Globe, title: t("international"), desc: t("internationalDesc") },
    { icon: Plane, title: t("smooth"), desc: t("smoothDesc") },
    { icon: Zap, title: t("allInclusive"), desc: t("allInclusiveDesc") },
    { icon: MapPin, title: t("ideal"), desc: t("idealDesc") },
  ];

  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          {t("title")}
        </h1>
        <p className="mb-12 text-center text-gray-600">{t("subtitle")}</p>

        <div className="space-y-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex gap-5 rounded-xl border border-gray-100 p-6 shadow-sm"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
