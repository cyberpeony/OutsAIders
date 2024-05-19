import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Chat from "@/models/Chat";

export async function GET() {
    await dbConnect();
    const chats = await Chat.find();
    return NextResponse.json(chats);
}


export async function POST(request: any) {
    try {
        const data = await request.json();
        await dbConnect();
        const newChat = new Chat(data);
        const savedChat = await newChat.save();
        return NextResponse.json(savedChat);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        });
    }
}
