import UserPic from './user-pic'

export default function User() {
    // two buttons: register / login
    return (
        <div className="
            flex
            items-center
            px-4
        ">
            <div className="
                cursor-pointer
                py-1
                hover:text-orange-300
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