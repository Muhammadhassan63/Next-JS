import { NextResponse } from "next/server";

export async function GET(resquest){
    return NextResponse.json({name: "ali"})
}