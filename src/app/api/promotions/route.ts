import { generatePromotion } from "@/lib/promotions";
import { NextResponse } from "next/server";

export async function GET() {
    const postPromo = await generatePromotion();

    if (postPromo) {
        return new NextResponse(null, { status: 200 });
    }
    return new NextResponse(null, { status: 403 });
}

export async function POST() {
    const postPromo = await generatePromotion();

    if (postPromo) {
        return new NextResponse(null, { status: 200 });
    }
    return new NextResponse(null, { status: 403 });
}