import { NextResponse } from "next/server";
import {Employee} from "@/utils/schema";
import {db} from "@/utils";
export async function GET(req){
    const result = await db.select().from(Employee);
   return NextResponse.json(result);
}