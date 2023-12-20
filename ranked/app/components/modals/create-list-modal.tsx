'use client'

import { useCallback, useState } from "react"
import Modal from "./modal"
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form"

import Input from "../inputs/input"
// import Button from "../inputs/button"

import { useRouter } from "next/navigation" 
import useCreateTierListModal from "@/app/hooks/UseCreateListModal"
import axios from "axios"


export default function CreateTierListModal(){
    const router = useRouter()
    const modal = useCreateTierListModal()
    const [ isLoading, setIsLoading ] = useState(false);
    const { 
        register, 
        handleSubmit,
        setValue,
        formState: {
          errors,
        },
      } = useForm<FieldValues>({
        defaultValues: {
          title: '',
          desc: ''
        },
      });
      
    const onSubmit: SubmitHandler<FieldValues> = 
    (data) => {
        setIsLoading(true);
        // data["title"]
        
        axios.post('/api/rankings', data)
        .then((response) => {
            // if title has a value, route to /create/[new_list_id]
            router.push('/create/' + response.data.id)

            setIsLoading(false)
            setValue('title', '')
            setValue('description', '')
            modal.onClose() 
        })
        .catch((error) => {
            console.log(error);
        })
    }


    const bodyContent = (
        <div className='flex flex-col gap-2 items-center'>
            <p className="">Ranking title</p>
            <Input
                id="title"
                label="Title"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            <Input
                id="description"
                label="Description"
                disabled={isLoading}
                register={register}
                errors={errors}
            />
        </div>
    )

    const footerContent = (
        <div></div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={modal.isOpen}
            title="Create New Ranking"
            actionLabel="Create"
            onClose={modal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )   
}