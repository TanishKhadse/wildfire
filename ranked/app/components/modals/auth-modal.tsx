'use client';

import axios from 'axios'
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'; 
import useAuthModal from '@/app/hooks/UseAuthModal';
import Input from '../input'
import Modal from './modal'

/**
 * FieldValues - a type
 * SubmitHandler
 */

export default function AuthModal() {

    // an object that can control Modal attributes (isOpen)
    const authModal = useAuthModal();


    /**
     * State used to dynamically update values
        const ['name', function] = useState( value )
        --> value is stored in name
        --> function can be uesd to change the value in name
     */


    const [ isLoading, setIsLoading ] = useState(false);


    /**
     * useForm:
     * 
     * register: ...register("field") -> field gets added to form data
     * handleSubmit: handleSubmit( function(data) ) -> extracts the registered field when submit button is pressed
     * formState: {errors} -> detects invalid inputs and allows page to still render
     * 
     * defaultValues: will select registered fields and set appropriate default values inside of the form
     */
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
        setIsLoading(true); // updates state
        axios.post('/api/register', data).then( () => {
            authModal.onClose();
        })
        .catch((error)=> {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false); // updates state after process runs
        })
    }
    
    const bodyContent = (
        <div className='flex flex-col gap-4 items-center'>
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
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required                

            />
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={authModal.isOpen}
            title="Login/Register"
            actionLabel="Continue"
            onClose={authModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
    );
}