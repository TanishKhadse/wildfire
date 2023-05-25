'use client'

import Image from "next/image"

interface UserPicProps {
    src: string | null | undefined;
}

const UserPic: React.FC<UserPicProps> = ({src}) => {
    return (
        <Image
            width="30"
            height="30"
            src={src || '/rankedlogo.png'}
            alt="User"
            className="rounded-full"
        />

        
    );
}

export default UserPic;