'use client'

import { useCallback, useState } from "react"
import { signIn } from "next-auth/react"
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form"

import { useRouter } from "next/navigation" 
import useRegisterModal from "@/app/hooks/UseRegisterModal"
import useLoginModal from "@/app/hooks/UseLoginModal"
import Modal from "./modal"
import Input from "../inputs/input"
import Button from "../button"
import {FcGoogle} from 'react-icons/fc';



export default function LoginModal(){
    const router = useRouter()
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()
    const [ isLoading, setIsLoading ] = useState(false);

    const onToggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [registerModal, loginModal])

    const { 
        register, 
        handleSubmit,
        formState: {
          errors,
        },
      } = useForm<FieldValues>({
        defaultValues: {
          email: '',
          password: ''
        },
      });
      
    const onSubmit: SubmitHandler<FieldValues> = 
    (data) => {
        setIsLoading(true);
        
        signIn('credentials', { 
            ...data, 
            redirect: false,
        })
        .then((callback) => {
            setIsLoading(false);
        
            if (callback?.ok) {
                router.refresh();
                loginModal.onClose();
            }
            if (callback?.error) {
                console.log("Invalid")
            }
        });
    }
    const bodyContent = (
        <div className='flex flex-col gap-2 items-center'>
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required                
            />


        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-6 items-center">
            <div className="h-[1px] w-full bg-zinc-300"></div>
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => {signIn('google')}}   
            />


            <p onClick={onToggle}
                className="
                bottom-5
                hover:cursor-pointer
                text-sm
                text-neutral-500
                hover:opacity-70
                pb-6
            ">
                Create an account
            </p>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Sign in"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}