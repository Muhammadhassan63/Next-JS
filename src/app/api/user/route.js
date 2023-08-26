import { users } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(resquest){
    const data= users
    return NextResponse.json(data, {status:200})
}

export async function POST(request){
    const payload = await request.json();
    if(!payload.name){

        return NextResponse.json({result:"Error", success:false}, {status:400})

    }
    return NextResponse.json({result:"user created successfully", success:true}, {status:201})
}