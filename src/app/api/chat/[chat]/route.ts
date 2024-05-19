import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Chat from "@/models/Chat";

type Props = {
    params: { 
      chat:  string,
   }
};

export async function GET(request: any, { params }: Props) {
    try {
        await dbConnect();
        const chat = await Chat.findById(params.chat);

        if (!chat) {
            return NextResponse.json({
                message: 'Chat not found',
            }, {
                status: 404
            });
        }

        return NextResponse.json(chat);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        });
    }
}

export async function DELETE(request: any, { params }: Props) {
    try {
        await dbConnect();
        const chatDeleted = await Chat.findByIdAndDelete(params.chat);
        
        if (!chatDeleted) {
            return NextResponse.json({
                message: 'Chat not found',
            }, {
                status: 404
            });
        }

        return NextResponse.json(chatDeleted);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        });
    }
}

export async function PUT(request: any, { params }: Props) {
    try {
        await dbConnect();
        const data = await request.json();
        const chatUpdated = await Chat.findByIdAndUpdate(params.chat, data, {
            new: true
        });

        if (!chatUpdated) {
            return NextResponse.json({
                message: 'Chat not found',
            }, {
                status: 404
            });
        }

        return NextResponse.json(chatUpdated);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        });
    }
}
