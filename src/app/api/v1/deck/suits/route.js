import { NextResponse } from "next/server";

import Suits from "@/utils/deck/GetSuits";

export function GET() {
  return NextResponse.json(Suits)
}