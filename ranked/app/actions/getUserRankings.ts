import prisma from "../lib/db"


export async function getUserRankings(uid: string) {
    try {
        const rankings = await prisma.ranking.findMany({
            where: {
                userId: uid as string
            }
        });
        
        if (!rankings) return null;
        return rankings
        
    } catch (error: any) {
        return null;
    }
}