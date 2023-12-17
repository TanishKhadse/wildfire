import { db } from "../lib/db";



export async function getFeatured() {
    try {

        const rankings = await db.ranking.findMany({});

        return {
            ...rankings
        }
    } catch (error: any) {
        return null;
    }
}