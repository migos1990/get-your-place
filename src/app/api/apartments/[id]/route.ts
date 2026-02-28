import { NextRequest, NextResponse } from "next/server";
import { apartments } from "@/data/apartments";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const apartment = apartments.find((a) => a.id === id || a.slug === id);

  if (!apartment) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(apartment);
}
