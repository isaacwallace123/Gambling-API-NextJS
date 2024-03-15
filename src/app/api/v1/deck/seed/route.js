import { NextResponse } from "next/server";

import GetSeed from "@/utils/seed/GetSeed";
import SeedDeck from "@/utils/seed/SeedDeck";

export function GET(request) {
    const { searchParams } = new URL(request.url);

    const id = Number(searchParams.get('id'));

    if (!id) {
        return NextResponse.json({ seed: GetSeed() });
    }

    return NextResponse.json(SeedDeck(id))
}