"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Facebook } from "lucide-react";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: GetYourPlace */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">GetYourPlace</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/team`} className="hover:text-white transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/why-us`} className="hover:text-white transition-colors">
                  {t("whyUs")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/owner`} className="hover:text-white transition-colors">
                  {t("owners")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-white transition-colors">
                  {t("blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Need help */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">{t("needHelp")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/faq`} className="hover:text-white transition-colors">
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-white transition-colors">
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social + Language */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <Facebook className="h-5 w-5" />
              <span className="text-sm">{t("findUs")}</span>
            </div>
            <div className="text-sm">
              <span className="text-white">{t("language")} </span>
              <button
                onClick={() => switchLocale("en")}
                className={`${locale === "en" ? "text-white font-bold" : "hover:text-white"} transition-colors`}
              >
                EN
              </button>
              <span> / </span>
              <button
                onClick={() => switchLocale("fr")}
                className={`${locale === "fr" ? "text-white font-bold" : "hover:text-white"} transition-colors`}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
