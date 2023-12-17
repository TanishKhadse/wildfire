import { db } from "../lib/db";

export default async function getUser(username: string) {
    try {
        // make query to get all the follower usernames for a given userId
        const user = await db.user.findUnique({
            where: {
                username: username as string
            }
        });

        
        
        if (!user) {
            return null;
        }
        return {
            ...user
        } 
    } catch (error: any) {
        return null;
    }
}