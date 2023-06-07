import { BiPlus } from "react-icons/bi";
import Link from 'next/link'

export default function CreateBtn() {
    return (
        <div className="
            px-4
        ">
            <Link 
            href= '/create'
            className="
                flex
                items-center
                justify-center
                hover:text-orange-300
                cursor-pointer
                gap-1
            "
            >
                <BiPlus/>
                Create New
            </Link>
        </div>
    );
}