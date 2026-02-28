"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const locale = useLocale();
  const t = useTranslations("footer");

  const links = [
    { href: `/${locale}/cities`, label: t("about") },
    { href: `/${locale}/why-us`, label: t("whyUs") },
    { href: `/${locale}/owner`, label: t("owners") },
    { href: `/${locale}/faq`, label: t("faq") },
    { href: `/${locale}/contact`, label: t("contactUs") },
    { href: `/${locale}/team`, label: "Team" },
    { href: `/${locale}/auth/sign-in`, label: "Sign in" },
  ];

  return (
    <div className="fixed inset-0 z-40 bg-white pt-16">
      <div className="flex flex-col items-center gap-6 p-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
