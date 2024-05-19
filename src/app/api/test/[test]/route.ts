import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Tests from "@/models/Tests";

type Props = {
    params: { 
      test:  string,
   }
  };
  

export async function GET(request: any, { params }: Props)  {
    try {
        dbConnect()
        const objectFound = await Tests.findById(params.test)

        if(!objectFound) return NextResponse.json({
            message: 'Test not found',
        }, {
            status: 404
        })
    
        return NextResponse.json(objectFound);
    } catch(error: any) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}

export async function DELETE(request: any, { params }: Props) {
    try {
        const objectDeleted = await Tests.findByIdAndDelete(params.test)
        if (!objectDeleted)
            return NextResponse.json({
                message: 'Test not found',
            }, {
                status: 404
            })
        return NextResponse.json(objectDeleted);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}

export async function PUT(request: any, { params }: Props) {
    try {
        const data = await request.json()
        const objectUpdated = await Tests.findByIdAndUpdate(params.test, data, {
            new: true
        })
        return NextResponse.json(objectUpdated);
    } catch(error: any) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}