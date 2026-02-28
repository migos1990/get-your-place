"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const locale = useLocale();
  const t = useTranslations("browse");

  const allItems: BreadcrumbItem[] = [
    { label: t("cities"), href: `/${locale}/cities` },
    ...items,
  ];

  return (
    <div className="bg-primary px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center gap-2 text-sm text-white">
        {allItems.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="h-4 w-4" />}
            {item.href && index < allItems.length - 1 ? (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
