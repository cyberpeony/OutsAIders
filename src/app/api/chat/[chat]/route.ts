import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Chat from "@/models/Chat";

type Props = {
    params: { 
        id: string,
    }
};

export async function GET(request: any, { params }: Props) {
    try {
        await dbConnect();
        const chat = await Chat.findById(params.id);

        if (!chat) return NextResponse.json({
            message: 'Chat not found',
        }, {
            status: 404
        });

        return NextResponse.json(chat);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function DELETE(request: any, { params }: Props) {
    try {
        await dbConnect();
        const chat = await Chat.findByIdAndDelete(params.id);

        if (!chat) return NextResponse.json({
            message: 'Chat not found',
        }, {
            status: 404
        });

        return NextResponse.json({ message: 'Chat deleted successfully' });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function PUT(request: any, { params }: Props) {
    try {
        const data = await request.json();
        await dbConnect();
        const chat = await Chat.findByIdAndUpdate(params.id, data, {
            new: true
        });

        if (!chat) return NextResponse.json({
            message: 'Chat not found',
        }, {
            status: 404
        });

        return NextResponse.json(chat);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
