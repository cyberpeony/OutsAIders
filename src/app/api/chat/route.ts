import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Chat from "@/models/Chat";
import { handleChatMessage } from '@/lib/chat';

export async function GET() {
    try {
        await dbConnect();
        const chats = await Chat.find();
        return NextResponse.json(chats);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        await dbConnect();
        const userId = data.userId;
        const userMessage = data.message;
        const response = await handleChatMessage(userId, userMessage);
        
        const newChat = new Chat({
            userId: userId,
            userMessage: userMessage,
            botMessage: response
          });

        const savedChat = await newChat.save();
        return NextResponse.json(savedChat);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
