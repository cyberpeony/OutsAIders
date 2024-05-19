import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Finances from "@/models/Finances";

type Props = {
    params: { 
      id: string,
   }
};

export async function GET(request: any, { params }: Props) {
    try {
        await dbConnect();
        const finance = await Finances.findById(params.id);

        if(!finance) return NextResponse.json({
            message: 'Finance not found',
        }, {
            status: 404
        });

        return NextResponse.json(finance);
    } catch(error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function DELETE(request: any, { params }: Props) {
    try {
        await dbConnect();
        const finance = await Finances.findByIdAndDelete(params.id);
        if (!finance)
            return NextResponse.json({
                message: 'Finance not found',
            }, {
                status: 404
            });
        return NextResponse.json({ message: 'Finance deleted successfully' });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function PUT(request: any, { params }: Props) {
    try {
        const data = await request.json();
        await dbConnect();
        const finance = await Finances.findByIdAndUpdate(params.id, data, {
            new: true
        });
        if (!finance)
            return NextResponse.json({
                message: 'Finance not found',
            }, {
                status: 404
            });
        return NextResponse.json(finance);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
