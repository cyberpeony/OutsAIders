import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Publications from "@/models/Publications";

export async function GET() {
    await dbConnect();
    const publications = await Publications.find();
    return NextResponse.json(publications);
}

export async function POST(request: any) {
    try {
        const data = await request.json();
        await dbConnect();
        const newPublication = new Publications(data);
        const savedPublication = await newPublication.save();
        return NextResponse.json(savedPublication);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        });
    }
}
