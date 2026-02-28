import { NextRequest, NextResponse } from "next/server";
import { apartments } from "@/data/apartments";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const city = searchParams.get("city");
  const university = searchParams.get("university");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const search = searchParams.get("search");

  let filtered = apartments;

  if (city) {
    filtered = filtered.filter((a) => a.city === city);
  }
  if (university) {
    filtered = filtered.filter((a) => a.universities.includes(university));
  }
  if (minPrice) {
    filtered = filtered.filter((a) => a.priceRange.max >= parseInt(minPrice));
  }
  if (maxPrice) {
    filtered = filtered.filter((a) => a.priceRange.min <= parseInt(maxPrice));
  }
  if (search) {
    filtered = filtered.filter((a) =>
      a.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return NextResponse.json(filtered);
}
