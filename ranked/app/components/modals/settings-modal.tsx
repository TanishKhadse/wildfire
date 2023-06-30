'use client'

import useSettingsModal from "@/app/hooks/UseSettingsModal";
import Modal from "./modal";
import { useState } from 'react'
import Input from "../inputs/input";
import TierLabel from "./tier-label";
import { 
    FieldValues, 
    SubmitHandler, 
    useForm
  } from 'react-hook-form';

interface SettingsModalProps {
    onAddTier: (tiers: string) => void;
    onDelete: (label: string) => void;
    tiers: string[]
}


const SettingsModal: React.FC<SettingsModalProps> = ({
    onAddTier,  
    onDelete,
    tiers,
}) => {

    const settingsModal = useSettingsModal()
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
            label: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (data["label"] !== null && data["label"].trim().length != 0 && !tiers.includes(data["label"])){
            onAddTier(data["label"])
        }
        setValue('label', '')
        settingsModal.onClose()
    }

    const body = (
        <div>
            <div className="flex flex-col">
                <Input 
                    type="text" 
                    id="label" 
                    label="Add Tier" 
                    register={register}
                    errors={errors}
                    required={false}
                    />
                    <div className="flex flex-row justify-evenly">
                        {tiers.map(tier => 
                            <TierLabel label={tier} onDelete={onDelete}/>
                        )}
                    </div>
            </div>

        </div>
    )

    const footer = (
        <div>

        </div>
    )

    return (
        <Modal 
            isOpen={settingsModal.isOpen}
            onClose={settingsModal.onClose} 
            onSubmit={handleSubmit(onSubmit)} 
            actionLabel="Save"
            title="Settings"
            body={body}
            footer={footer}
        />
    )
}

export default SettingsModal;