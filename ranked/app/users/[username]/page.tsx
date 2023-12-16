import FollowingList from "@/app/components/user-profile/following-list";
import getUser from "@/app/actions/getUser";


interface UserPageProps {
    params: { username: string },
    // searchParams: { [key:string]: string | string[] | undefined },
}

// use queries to get username from uid, and related tier lists
export default async function Page({params: {username}}: UserPageProps){
    const user = await getUser(username)
    return (
        <div>
            {username}
            <FollowingList user={user}/>
        </div>
    );
}