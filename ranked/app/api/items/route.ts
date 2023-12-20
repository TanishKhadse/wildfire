import { NextResponse } from "next/server";
import prisma from "@/app/lib/db";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
    request: Request
){
    const currentUser=  await getCurrentUser();

    if (!currentUser) return NextResponse.error();

    const body = await request.json();
    const {
        image,
        label,
    } = body

    const item = await prisma.item.create({
        data: {
            image,
            label, 
            rankingId: ''
        }
    })
    return NextResponse.json(item)
}
