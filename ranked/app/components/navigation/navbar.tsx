'use client'

import Logo from "./logo"
import AuthBtn from "./user"
import CreateBtn from "./create-btn"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '@/firebase/clientApp'
import UserPic from './user-pic';

export default function NavigationBar() {
    const [user] = useAuthState(auth);
    // keep track of state for current page; if on create new, we want to hide the create button

    return (
        <div className="flex items-center justify-center">
            <div className="
                flex
                justify-between
                py-2
                w-[90%]
            ">
                <Logo/>
                <div className="
                    flex
                    row
                    items-center
                    gap-6
                ">
                    <CreateBtn/>
                    {!user && (<AuthBtn/>)}
                    {user && (<UserPic src=''/>)}
                </div>
            </div>

        </div>
    );
}