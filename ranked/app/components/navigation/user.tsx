'use client'

import UserPic from './user-pic'
import useAuthModal from '../../hooks/UseAuthModal';

export default function AuthBtn() {
    // two buttons: register / login
    const authModal = useAuthModal();
    return (
        <div className="
            flex
            items-center
            px-4
        ">
            <div 
                onClick={authModal.onOpen}
                className="
                cursor-pointer
                py-1
                hover:text-rose-500
                flex
                gap-3
                items-center
            ">

                Login/Register
                {/* <UserPic src=""/> */}
            </div>
        </div>

    );
}