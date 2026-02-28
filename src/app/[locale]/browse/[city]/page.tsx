import { useTranslations } from "next-intl";
import { GraduationCap } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import UniversityCard from "@/components/browse/UniversityCard";
import { universities } from "@/data/universities";

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string; locale: string }>;
}) {
  const { city } = await params;
  const cityUniversities = universities.filter((u) => u.city === city);
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <>
      <Breadcrumb items={[{ label: cityName }]} />
      <CityContent cityUniversities={cityUniversities} />
    </>
  );
}

function CityContent({
  cityUniversities,
}: {
  cityUniversities: typeof universities;
}) {
  const t = useTranslations("browse");

  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <GraduationCap className="mx-auto mb-3 h-12 w-12 text-primary" />
          <p className="text-lg text-primary font-medium">
            {t("chooseUniversity")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cityUniversities.map((uni) => (
            <UniversityCard key={uni.id} university={uni} />
          ))}
        </div>
      </div>
    </div>
  );
}
