'use client'

import ImageUpload from "../inputs/image-upload";
import Modal from "./modal";
import useAddModal from "@/app/hooks/UseAddModal";
import Input from "../inputs/input";

import { 
    FieldValues, 
    SubmitHandler, 
    useForm
  } from 'react-hook-form';

export default function AddImageModal() {

    const addImageModal = useAddModal();
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

    const body = (
        <div className="flex flex-col">
            <Input 
                type="text" 
                id="itemAdd" 
                label="Add Item" 
                register={register}
                errors={errors}
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
            onSubmit={()=>{}} 
            actionLabel="Add Item(s)"
            title="Add Image"
            body={body}
            footer={footer}
        />
    )
}