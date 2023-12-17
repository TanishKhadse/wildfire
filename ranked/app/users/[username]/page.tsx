import Image from "next/image";
import FollowingList from "@/app/components/user-profile/following-list";
import getUser from "@/app/actions/getUser";


interface UserPageProps {
    params: { username: string },
    // searchParams: { [key:string]: string | string[] | undefined },
}

// use queries to get username from uid, and related tier lists
export default async function Page({params: {username}}: UserPageProps){
    const user = await getUser(username)
    const img = user?.image
    return (
        <div className="flex justify-between  mt-10">
            <div className="ml-[12.5%] flex items-center">
                <div className="
                    w-[150px]
                    h-[150px]
                    border-slate-500 
                    border-[1px] 
                    rounded-full
                    bg-cover
                    flex
                    items-center
                    justify-center
                    select-none
                    ">
                    <Image
                        width="150"
                        height="150"
                        src={img || '/rankedlogo.png'}
                        alt="User"
                    />
                </div>
                <div className="flex pl-20 pr-4 text-3xl">
                    {username}
                </div>

            </div>
            <FollowingList user={user}/>

        </div>
    );
}