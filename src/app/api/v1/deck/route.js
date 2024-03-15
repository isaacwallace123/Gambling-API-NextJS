import { NextResponse } from "next/server";

import GenerateDeck from "@/utils/deck/GenerateDeck";

export function GET() {
  return NextResponse.json(GenerateDeck())
}