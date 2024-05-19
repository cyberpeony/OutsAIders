/*import { NextApiRequest, NextApiResponse } from 'next';
import { handleChatMessage } from '@/lib/chat';
import Chat from '@/models/Chat';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, message } = req.body;
    try {
      const response = await handleChatMessage(userId, message);
      res.status(200).json({ response }); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error handling chat message' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}*/


import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Chat from "@/models/Chat";

export async function GET() {
    try {
        await dbConnect();
        const chats = await Chat.find();
        return NextResponse.json(chats);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function POST(request: any) {
    try {
        const data = await request.json();
        await dbConnect();
        const newChat = new Chat(data);
        const savedChat = await newChat.save();
        return NextResponse.json(savedChat);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
