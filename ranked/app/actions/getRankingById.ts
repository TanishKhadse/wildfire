import { db } from "../lib/db";
import getCurrentUser from "./getCurrentUser";


interface IParams {
    rankingId?: string;
}

export async function getRankingById(
    params: IParams
) {
    try {
        const { rankingId } = params;
        const ranking = await db.ranking.findUnique({
            where: {
                id: rankingId
            },
            include: {
                user: true
            }
        });


        if (!ranking) {
            return null;
        }


        return {
            ...ranking
        }
    } catch (error: any) {
        return null;
    }
}