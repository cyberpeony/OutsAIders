import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Finances from "@/models/Finances";

type Props = {
    params: { 
      finance:  string,
   }
};

export async function GET(request: any, { params }: Props) {
    try {
        await dbConnect();
        const finance = await Finances.findById(params.finance).populate('user');

        if (!finance) {
            return NextResponse.json({
                message: 'Finance not found',
            }, {
                status: 404
            });
        }

        return NextResponse.json(finance);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        });
    }
}

export async function DELETE(request: any, { params }: Props) {
    try {
        await dbConnect();
        const financeDeleted = await Finances.findByIdAndDelete(params.finance);
        
        if (!financeDeleted) {
            return NextResponse.json({
                message: 'Finance not found',
            }, {
                status: 404
            });
        }

        return NextResponse.json(financeDeleted);
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
        const financeUpdated = await Finances.findByIdAndUpdate(params.finance, data, {
            new: true
        });

        if (!financeUpdated) {
            return NextResponse.json({
                message: 'Finance not found',
            }, {
                status: 404
            });
        }

        return NextResponse.json(financeUpdated);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        });
    }
}