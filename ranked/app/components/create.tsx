import { BiPlus } from "react-icons/bi";

export default function Create() {
    return (
        <div className="
            px-4
        ">
            <div className="
                flex
                items-center
                justify-center
                hover:text-orange-300
                cursor-pointer
                gap-1
            ">
                <BiPlus/>
                Create New
            </div>
        </div>
    );
}