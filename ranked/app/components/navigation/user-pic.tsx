'use client'

import Image from "next/image"

import { useCallback, useState } from "react"
import DropDownItem from "./drop-down-item"
import {useRouter} from 'next/navigation'
import { signOut } from "next-auth/react"
import { SafeUser } from "@/app/types"


interface UserPicProps {
    src: string | null | undefined;
    user: SafeUser;
}

const UserPic: React.FC<UserPicProps> = ({src, user}) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpenMenu = useCallback(() => {
        setIsOpen((value)=>!value);
    }, [])


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
                select-none
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
                    w-[14vw]
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
                        <DropDownItem label="Logout" onClick={() => {signOut()}}/>
                        <DropDownItem label="My Rankings" onClick={
                            () => {
                                router.push('/users/' + user.username)
                                setIsOpen((value)=>!value)
                            }}
                        />
                        </>
                    </div>
                </div>
            )}
        </div>


        
    );
}

export default UserPic;