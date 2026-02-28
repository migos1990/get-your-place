"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => switchLocale("en")}
        className={`px-2 py-1 rounded ${locale === "en" ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"}`}
      >
        EN
      </button>
      <span className="text-gray-400">/</span>
      <button
        onClick={() => switchLocale("fr")}
        className={`px-2 py-1 rounded ${locale === "fr" ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"}`}
      >
        FR
      </button>
    </div>
  );
}
