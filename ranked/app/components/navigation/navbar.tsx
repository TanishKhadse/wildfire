'use client'

import Logo from "./logo"
import AuthBtn from "./user"
import CreateBtn from "./create-btn"
import UserPic from './user-pic';
import { usePathname } from "next/navigation";
import CreateOptions from "./create-options";
import { SafeUser } from "@/app/types"

interface NavBarProps {
    currentUser?: SafeUser | null;
}
const NavigationBar: React.FC<NavBarProps> = ({
    currentUser,
}) => {

    // keep track of state for current page; if on create new, we want to hide the create button
    const pathname = usePathname();

    return (
        <div className="flex items-center justify-center">
            <div className="
                flex
                justify-between
                py-2
                w-[90%]
            ">
                <div className="
                    flex
                    items-center
                    gap-6
                ">
                    <Logo/>
                    {pathname === '/create' && (<CreateOptions/>)}
                </div>

                <div className="
                    flex
                    row
                    items-center
                    gap-6
                ">
                    {pathname !== '/create' && (<CreateBtn/>)}
                    {!currentUser && (<AuthBtn/>)}
                    {currentUser && (<UserPic src={currentUser?.image}/>)}
                </div>
            </div>

        </div>
    );
}

export default NavigationBar;