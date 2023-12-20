import { BiPlus } from "react-icons/bi";
import Link from 'next/link'
import useCreateTierListModal from "@/app/hooks/UseCreateListModal";

export default function CreateBtn() {
    // if user is not logged in, make them log in, then execute createModal
    const createModal = useCreateTierListModal()
    
    return (
        <div className="
            px-4
        ">
            <div 
            className="
                flex
                items-center
                justify-center
                hover:text-rose-500
                cursor-pointer
                gap-1
                select-none
            "
            onClick={createModal.onOpen}
            >
                <BiPlus/>
                Create New
            </div>
        </div>
    );
}