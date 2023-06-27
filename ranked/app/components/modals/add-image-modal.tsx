'use client'

import Modal from "./modal";
import useAddModal from "@/app/hooks/UseAddModal";

export default function AddImageModal() {

    const addImageModal = useAddModal();

    const body = (
        <div>
            <input type="text" id="itemAdd" placeholder="Add Item" className="
                w-[100%]
            " />
            {/* load image */}
        </div>
    )

    const footer = (
        <div>

        </div>
    )

    return (
        <Modal 
            isOpen={addImageModal.isOpen}
            onClose={addImageModal.onClose} 
            onSubmit={()=>{}} 
            actionLabel="Add Item(s)"
            title="Add Image"
            body={body}
            footer={footer}
        />
    )
}