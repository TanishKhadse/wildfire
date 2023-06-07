'use client';

import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'; 
import useAuthModal from '@/app/hooks/UseAuthModal';
import Input from '../input';
import Modal from './modal';
import {FcGoogle} from 'react-icons/fc';
import Button from '../button';
import { auth } from '@/firebase/clientApp';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup
} from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth" 
import {useRouter} from 'next/navigation';


export default function AuthModal() {
    const router = useRouter();

    const provider = new GoogleAuthProvider();
    const authModal = useAuthModal();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ user, loading ] =  useAuthState(auth);
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

    const signIn = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result.user);
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true); // updates state


        if (authModal.register) {
            // register
            createUserWithEmailAndPassword(auth, data["email"], data["password"])
            .then((userCredential) => {
                console.log(userCredential)
                if (!userCredential) return;
                router.push('/') // this redirect you after logging in
            })
            .catch((error) => {
                console.log(error);
            }).finally(() => {
                setIsLoading(false);
                authModal.onClose();

            })
             
        } else {
            // log in
            signInWithEmailAndPassword(auth, data["email"], data["password"])
            .then((callback) => {
                router.push('/')
        
            }).catch((error)=>{
                console.log(error)
            }).finally(() => {
                setIsLoading(false);
                authModal.onClose();

                // set boxes to red and say incorrect username or password
            })

        }

 
        // signUp(data["email"], data["password"]);
        // signUp(auth, );
        
        // axios.post('/api/register', data).then( () => { // RESTful API
        //     authModal.onClose();
        // })
        // .catch((error)=> {
        //     console.log(error);
        // })
        // .finally(() => {
        //     setIsLoading(false); // updates state after process runs
        // })
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

            {authModal.register && (
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required                
            />

            )}

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
                onClick={signIn}   
            />


            <p onClick={authModal.toggleSwitch}
                className="
                bottom-5
                hover:cursor-pointer
                text-sm
                text-neutral-500
                hover:opacity-70
                pb-6
            ">
                {!authModal.register ? "Create Account" : "Back to login"}
            </p>
    </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={authModal.isOpen}
            title={authModal.register ? "Register" : "Login"}
            actionLabel="Sign in"
            onClose={authModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
            
        />
    );
}