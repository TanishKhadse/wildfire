'use client'

import ImageUpload from "../inputs/image-upload";
import Modal from "./modal";
import useAddModal from "@/app/hooks/UseAddModal";
import Input from "../inputs/input";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { 
    FieldValues, 
    SubmitHandler, 
    useForm
  } from 'react-hook-form';


interface AddImageModalProps {
    onAddItems: (items: string[]) => void;
}

const AddImageModal: React.FC<AddImageModalProps> = (
    onAddItems
) => {

    const addImageModal = useAddModal();
    const [ isLoading, setIsLoading ] = useState(false);
    const router = useRouter()
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            itemAdd: ""
        }
    })

    const imageSrc = watch('imageSrc')


    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        })
    }


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        onAddItems.onAddItems([data["itemAdd"]])
        addImageModal.onClose()
    }

    const body = (
        <div className="flex flex-col">
            <Input 
                type="text" 
                id="itemAdd" 
                label="Add Item" 
                register={register}
                errors={errors}
                required
                />
            {/* load image */}
            <ImageUpload
                value={imageSrc}
                onChange={(value) => setCustomValue('imageSrc', value)}
            />
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
            onSubmit={handleSubmit(onSubmit)} 
            actionLabel="Add Item(s)"
            title="Add Image"
            body={body}
            footer={footer}
        />
    )
}

export default AddImageModal