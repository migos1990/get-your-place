import { useTranslations } from "next-intl";
import { DollarSign, Sparkles, Users } from "lucide-react";

export default function OwnerPage() {
  return <OwnerContent />;
}

function OwnerContent() {
  const t = useTranslations("owner");

  const benefits = [
    { icon: DollarSign, title: t("benefit1"), desc: t("benefit1Desc") },
    { icon: Sparkles, title: t("benefit2"), desc: t("benefit2Desc") },
    { icon: Users, title: t("benefit3"), desc: t("benefit3Desc") },
  ];

  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div
          className="relative mb-12 rounded-xl bg-cover bg-center p-12 text-center text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80')",
          }}
        >
          <div className="absolute inset-0 rounded-xl bg-black/50" />
          <div className="relative">
            <h1 className="mb-3 text-3xl font-bold">{t("title")}</h1>
            <p className="text-lg opacity-90">{t("subtitle")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div key={i} className="rounded-xl border border-gray-100 p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{b.title}</h3>
              <p className="text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="rounded-lg bg-primary px-8 py-3 text-lg font-medium text-white hover:bg-primary-dark transition-colors">
            {t("cta")}
          </button>
        </div>
      </div>
    </div>
  );
}
