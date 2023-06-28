import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
    request: Request,
) {
    const currentUser = await getCurrentUser();
    if (!currentUser) return NextResponse.error();
    const body = await request.json()
    const {
        title,
        description,

    } = body

    const ranking = await db.ranking.create({
        data: {
            title,
            description,
            userId: currentUser.id,
        }
    })

    return NextResponse.json(ranking)
}