import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Tests from "@/models/Tests";

export async function GET()  {
    dbConnect();
    const objects = await Tests.find()
    return NextResponse.json(objects);
}

export async function POST(request: any) {
    try {
        const data = await request.json()
        const newObject = new Tests(data)
        const savedObject = await newObject.save()
        return NextResponse.json(savedObject);
    } catch(error: any) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}