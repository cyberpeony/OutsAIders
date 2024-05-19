import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Test from "@/models/Test";

export async function GET()  {
    dbConnect();
    const objects = await Test.find()
    return NextResponse.json(objects);
}

export async function POST(request: any) {
    try {
        const data = await request.json()
        const newObject = new Test(data)
        const savedObject = await newObject.save()
        return NextResponse.json("hola");
    } catch(error: any) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}