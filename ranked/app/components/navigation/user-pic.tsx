'use client'

import Image from "next/image"

import { useCallback, useState } from "react"
import DropDownItem from "./drop-down-item"
import {useRouter} from 'next/navigation'
import { signOut } from "next-auth/react"


interface UserPicProps {
    src: string | null | undefined;
}

const UserPic: React.FC<UserPicProps> = ({src}) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpenMenu = useCallback(() => {
        setIsOpen((value)=>!value);
    }, [])


    const handleLogout = () => {
        // signOut();
        router.push('/')
    }



    return (
        <div>
            <div className="
                w-[40px]
                h-[40px]
                border-[1px]
                border-neutral-500
                rounded-full
                cursor-pointer
                bg-cover
                flex
                items-center
                justify-center
            "
            onClick={toggleOpenMenu}
            >
                <Image
                    width="30"
                    height="30"
                    src={src || '/rankedlogo.png'}
                    alt="User"
                />
            </div>


            {isOpen && (
                <div className="
                    absolute
                    rounded-md
                    shadow-md
                    p-2
                    w-[12vw]
                    right-8
                    top-14
                    overflow=hidden
                    text-sm
                    z-50
                    bg-neutral-100
                ">
                    <div className="flex flex-col cursor-pointer">
                        <>
                        {/* <DropDownItem label="profile" onClick={() => router.push('/users/' + auth.currentUser?.uid)}/> */}
                        <DropDownItem label="logout" onClick={() => {signOut()}}/>
                        </>
                    </div>
                </div>
            )}
        </div>


        
    );
}

export default UserPic;