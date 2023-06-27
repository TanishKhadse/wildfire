'use client'

import UserPic from './user-pic'
import useLoginModal from '../../hooks/UseLoginModal';

export default function AuthBtn() {
    // two buttons: register / login
    const loginModal = useLoginModal();
    return (
        <div className="
            flex
            items-center
            px-4
        ">
            <div 
                onClick={loginModal.onOpen}
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