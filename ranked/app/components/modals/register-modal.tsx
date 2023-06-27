'use client';

import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'; 
import useRegisterModal from '@/app/hooks/UseRegisterModal';
import useLoginModal from '@/app/hooks/UseLoginModal';
import Input from '../inputs/input';
import Modal from './modal';
import {FcGoogle} from 'react-icons/fc';
import Button from '../button';
import { signIn } from 'next-auth/react';
import { useAuthState } from "react-firebase-hooks/auth" 
import {useRouter} from 'next/navigation';
import axios from 'axios';



export default function AuthModal() {
    const router = useRouter();

    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const [ isLoading, setIsLoading ] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors, 
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '' 
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        // change function depending on auth toggle
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() => {
                signIn('credentials', {
                    ...data,
                    redirect: false,
                })
                registerModal.onClose();
                loginModal.onOpen();
                
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false)
            })

    }

    const onToggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [registerModal, loginModal])

    
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
                id="name"
                label="Name"
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
                onClick={() => {signIn("google")}}   
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
                Already have an account?
            </p>
    </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Sign in"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}