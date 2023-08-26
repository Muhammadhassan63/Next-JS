import { users } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request, content) {
    const id = content.params.id
    const data = users;

    const userData=data.filter((item)=>item.age==id)
    return NextResponse.json(userData.length==0?{result:'No data found', success: false}:{result:userData[0],success:'true'})

}