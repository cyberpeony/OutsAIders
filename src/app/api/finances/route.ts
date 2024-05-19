import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Finances from "@/models/Finances";

export async function GET() {
    await dbConnect();
    const finances = await Finances.find();
    return NextResponse.json(finances);
}

export async function POST(request: any) {
    try {
        const data = await request.json();
        await dbConnect();
        const newFinance = new Finances(data);
        const savedFinance = await newFinance.save();
        return NextResponse.json(savedFinance);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        });
    }

}
