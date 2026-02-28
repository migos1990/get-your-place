import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import Accordion from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";

export default async function FAQPage() {
  const locale = await getLocale();
  const t = await getTranslations("faq");

  const items = faqItems.map((faq) => ({
    id: faq.id,
    trigger: faq.question[locale as "en" | "fr"],
    content: faq.answer[locale as "en" | "fr"],
  }));

  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          {t("title")}
        </h1>
        <p className="mb-10 text-center text-gray-600">{t("subtitle")}</p>

        <Accordion items={items} />

        <div className="mt-8 text-center">
          <Link
            href={`/${locale}/contact`}
            className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
          >
            {t("contactUs")}
          </Link>
        </div>
      </div>
    </div>
  );
}
