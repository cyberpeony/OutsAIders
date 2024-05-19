import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Promotions from "@/models/Promotions";

type Props = {
    params: { 
      promotion:  string,
   }
};

export async function GET(request: any, { params }: Props) {
    try {
        await dbConnect();
        const promotion = await Promotions.findById(params.promotion);

        if (!promotion) {
            return NextResponse.json({
                message: 'Promotion not found',
            }, {
                status: 404
            });
        }

        return NextResponse.json(promotion);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        });
    }
}

export async function DELETE(request: any, { params }: Props) {
    try {
        await dbConnect();
        const promotionDeleted = await Promotions.findByIdAndDelete(params.promotion);
        
        if (!promotionDeleted) {
            return NextResponse.json({
                message: 'Promotion not found',
            }, {
                status: 404
            });
        }

        return NextResponse.json(promotionDeleted);
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
        const promotionUpdated = await Promotions.findByIdAndUpdate(params.promotion, data, {
            new: true
        });

        if (!promotionUpdated) {
            return NextResponse.json({
                message: 'Promotion not found',
            }, {
                status: 404
            });
        }

        return NextResponse.json(promotionUpdated);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        });
    }
}
