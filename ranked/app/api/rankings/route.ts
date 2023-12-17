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


    // update user account with this tier list too
    const ranking = await db.ranking.create({
        data: {
            title,
            description,
            userId: currentUser.id,
        }
    })


    // add ranking to user list

    
    // let ranking_ids = [...(currentUser.rankings || [])]

    // // const updateUser = db.user.update({
    // //     where: {
    // //         id: currentUser.id
    // //     },
    // //     data: {
    // //         rankings: {
    // //             : {
    // //                 id: ranking.id
    // //             },
                
    // //         },
    // //     }
    // // });
    
    return NextResponse.json(ranking)
}