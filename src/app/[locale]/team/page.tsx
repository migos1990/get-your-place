import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { teamMembers } from "@/data/team";

export default async function TeamPage() {
  const locale = await getLocale();
  const t = await getTranslations("team");

  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          {t("title")}
        </h1>
        <p className="mb-10 text-center text-gray-600">{t("subtitle")}</p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="overflow-hidden rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="relative h-56">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="mb-2 text-sm font-medium text-primary">
                  {member.role[locale as "en" | "fr"]}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.bio[locale as "en" | "fr"]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
