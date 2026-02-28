"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Hero() {
  const locale = useLocale();
  const t = useTranslations("home");

  return (
    <section
      className="relative flex min-h-[80vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {t("heroTitle")}
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg md:text-xl opacity-90">
          {t("heroSubtitle")}
        </p>
        <Link
          href={`/${locale}/cities`}
          className="inline-block rounded-lg bg-primary px-8 py-4 text-lg font-medium text-white hover:bg-primary-dark transition-colors"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
