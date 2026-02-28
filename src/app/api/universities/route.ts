import { NextRequest, NextResponse } from "next/server";
import { universities } from "@/data/universities";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const city = searchParams.get("city");

  let filtered = universities;
  if (city) {
    filtered = filtered.filter((u) => u.city === city);
  }

  return NextResponse.json(filtered);
}
