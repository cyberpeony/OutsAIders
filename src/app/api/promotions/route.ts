import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Promotions from "@/models/Promotions";

export async function GET() {
    await dbConnect();
    const promotions = await Promotions.find();
    return NextResponse.json(promotions);
}

export async function POST(request: any) {
    try {
        const data = await request.json();
        await dbConnect();
        const newPromotion = new Promotions(data);
        const savedPromotion = await newPromotion.save();
        return NextResponse.json(savedPromotion);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        });
    }
}
