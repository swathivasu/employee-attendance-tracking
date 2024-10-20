import { Employee } from "@/utils/schema";
import {db} from "@/utils";
import { NextResponse } from "next/server";
export async function POST(req, res){
    const data = await req.json();

    const result = await db.insert(Employee)
    .values({
        name:data?.name,
        work:data?.work,
        designation:data?.designation,
        email:data.email,
        contact:data.contact
    })

    return NextResponse.json(result);
}