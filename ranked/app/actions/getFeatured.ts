// import { prisma } from "../lib/db";
import prisma from "../lib/db"



export async function getFeatured() {
    try {

        const rankings = await prisma.ranking.findMany({});
        
        if (!rankings) return null;
        return rankings
        
    } catch (error: any) {
        console.log(error)
        return null;
    }
}