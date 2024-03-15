import { NextResponse } from "next/server";

import RandomDeck from "@/utils/deck/RandomizeDeck";

export function GET() {
  return NextResponse.json(RandomDeck())
}