interface UserPageProps {
    params: { user_id: string },
    // searchParams: { [key:string]: string | string[] | undefined },
}

// need to see whether uid exists
// find way to store/extract username instead of using uid
export default async function Page({params: {user_id}}: UserPageProps){

    return (
        <div>
            {user_id}
        </div>
    );
}