import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Publications from "@/models/Publications";

type Props = {
    params: { 
      publication:  string,
   }
};

export async function GET(request: any, { params }: Props) {
    try {
        await dbConnect();
        const publication = await Publications.findById(params.publication).populate('user');

        if (!publication) {
            return NextResponse.json({
                message: 'Publication not found',
            }, {
                status: 404
            });
        }

        return NextResponse.json(publication);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        });
    }
}

export async function DELETE(request: any, { params }: Props) {
    try {
        await dbConnect();
        const publicationDeleted = await Publications.findByIdAndDelete(params.publication);
        
        if (!publicationDeleted) {
            return NextResponse.json({
                message: 'Publication not found',
            }, {
                status: 404
            });
        }

        return NextResponse.json(publicationDeleted);
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
        const publicationUpdated = await Publications.findByIdAndUpdate(params.publication, data, {
            new: true
        });

        if (!publicationUpdated) {
            return NextResponse.json({
                message: 'Publication not found',
            }, {
                status: 404
            });
        }

        return NextResponse.json(publicationUpdated);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        });
    }
}
