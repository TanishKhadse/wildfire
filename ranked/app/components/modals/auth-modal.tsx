'use client';

import axios from 'axios'
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'; 
import useAuthModal from '@/app/hooks/UseLoginModal';
import Modal from './modal'

export default function AuthModal() {
    const authModal = useAuthModal();
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
        setIsLoading(true);
        axios.post('/api/register', data).then( () => {
            authModal.onClose();
        })
        .catch((error)=> {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }
    
    return (
        <Modal
            disabled={isLoading}
            isOpen={authModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={authModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
        />
    );
}