'use client'
import getUser from "@/app/actions/getUser";
import { User } from "@prisma/client";

interface FollowingListProps{
    user: User | null
}


const FollowingList: React.FC<FollowingListProps> = ({
    user,
}) => {
    const followers = user?.followingIds
    const followersHARDCODE = ["kagami", "tuki", "ricowardcino", "Soba"]


    // when user clicks on followed user, go to their page
    return (
        <div className="bg-slate-300 h-100h w-80 flex flex-col">
            {followersHARDCODE?.map(user=>
                (
                    <div>
                        {user} 
                    </div>
                )
            )}
        </div>
    );
}


export default FollowingList