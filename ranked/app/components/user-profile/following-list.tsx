'use client'
import { User } from "@prisma/client";
import {useRouter} from 'next/navigation'

interface FollowingListProps{
    user: User | null
}


const FollowingList: React.FC<FollowingListProps> = ({
    user,
}) => {
    const router = useRouter()
    // const followers = user?.followingIds
    const followersHARDCODE = ["kagami", "tuki", "ricowardcino", "Soba", "tanny"]


    // when user clicks on followed user, go to their page
    return (
        <div className="bg-slate-200 h-100h w-1/6 flex flex-col rounded-lg cursor-pointer">
            {followersHARDCODE?.map(user=>
                (
                    <div className="p-1 flex hover:underline" onClick={()=> router.push('/users/' + user)}>
                        {user} 
                    </div>
                )
            )}
        </div>
    );
}


export default FollowingList