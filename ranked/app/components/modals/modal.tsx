'use client'
import {useCallback, useEffect, useState} from "react"
import Button from "../button"
import {BiX} from "react-icons/bi";


/**
 * ModalProps interface declares which "attributes" can be called for the Modal component
 * isOpen -> bool (modal is currently open)
 * onClose -> function for 
 */
interface ModalProps {
    isOpen?: boolean;
    onClose: () => void; // required
    onSubmit: () => void; // required
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string; // required
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen, 
    onClose, 
    onSubmit, 
    title, 
    body, 
    footer, 
    actionLabel, 
    disabled, 
    secondaryAction,
     secondaryLabel
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);


    const handleClose = useCallback(() => {
        if (disabled) return;

        setShowModal(false)
        setTimeout(()=>{
            onClose();
        }, 150); // 300 ms for animations
    }, [onClose, disabled])

    const handleSwitch = useCallback(() => {
        if (disabled) return;
        // switch Modal to register Modal or add/delete contents
    }, [disabled])

    const handleSubmit = useCallback(() => {
        if (disabled) return;
        onSubmit()
    }, [disabled, onSubmit])

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) return;
        secondaryAction();
    }, [disabled, secondaryAction])

    if (!isOpen) return null;

    return(
        <>
            <div className="
                justify-center 
                items-center 
                flex 
                fixed 
                inset-0 
                z-50 
                outline-none 
                focus:outline-none
                bg-neutral-800/70
            ">
                <div className="
                    relative 
                    w-1/3
                    mx-auto 
                    h-[75%]
                ">

                    {/* CONTENT */}
                    <div className={`
                        translation
                        duration-300
                        h-full
                        ${showModal ? 'opacity-100' : 'opacity-0'}
                    `}>
                        <div className="
                            translate
                            h-auto
                            rounded-lg 
                            shadow-lg 
                            relative 
                            flex 
                            flex-col 
                            w-full 
                            bg-white 
                        ">
                            <div className="
                                flex 
                                items-center 
                                p-2
                                rounded-t
                                justify-center
                                relative
                                border-b-[1px]
                                "
                            >
                                <button 
                                    onClick={handleClose}
                                    className="
                                    p-1
                                    border-0
                                    hover:opacity-70
                                    transition
                                    absolute
                                    left-2
                                    top-2
                                    
                                ">
                                    <BiX/>
                                    
                                </button>
                                <div className="text-lg font-semibold">
                                    {title}
                                </div>
                            </div>
                            {/* BODY */}
                            <div className="relative p-6 flex-auto">
                                {/* inserting predefined HTML: */}
                                {body}
                            </div>
                            {/* FOOTER */}
                            <div className="flex flex-col gap-2">
                                <div className="
                                    flex
                                    flex-col
                                    items-center
                                    gap-4
                                    w-auto
                                    justify-center
                                    h-auto
                                ">


                                    {secondaryAction && secondaryLabel && (
                                        <Button 
                                            outline
                                            label={secondaryLabel} 
                                            disabled={disabled}
                                            onClick={handleSecondaryAction}
                                        />      
                                    )}                              
                                    <Button 
                                        label={actionLabel} 
                                        disabled={disabled}
                                        onClick={handleSubmit}
                                    />

                                    <div className="
                                        h-20
                                        w-full
                                        flex
                                        justify-center
                                    ">
                                        <p 
                                            onClick={handleSwitch}
                                            className="
                                            absolute
                                            bottom-5
                                            hover:cursor-pointer
                                            text-sm
                                            text-neutral-500
                                            hover:opacity-70
                                        ">
                                            Create Account
                                        </p>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}


export default Modal;