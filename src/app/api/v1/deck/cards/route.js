import { NextResponse } from "next/server";

import Cards from "@/utils/deck/GetCards";

export function GET() {
  return NextResponse.json(Cards)
}