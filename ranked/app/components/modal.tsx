'use client'
import {useCallback, useEffect, useState} from "react"
import Button from "./button"
import {BiX} from "react-icons/bi";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
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
        }, 300); // 300 ms for animations
    }, [onClose, disabled])


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
                overflow-x-hidden 
                overflow-y-auto 
                fixed 
                inset-0 
                z-50 
                outline-none 
                focus:outline-none
                bg-neutral-800/70
            ">
                <div className="
                    relative 
                    w-1/2
                    my-6
                    mx-auto 
                    h-auto
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
                                p-6
                                rounded-t
                                justify-center
                                relative
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
                                    left-9
                                ">
                                    <BiX/>
                                    
                                </button>
                                <div className="text-lg font-semibold">
                                    {title}
                                </div>
                            </div>
                            {/* BODY */}
                            <div className="relative p-6 flex-auto">

                            </div>
                            {/* FOOTER */}
                            <div className="flex flex-col gap-2 p-6">
                                <div className="
                                    flex
                                    flex-row
                                    items-center
                                    gap-4
                                    w-full
                                ">
                                    <Button label="submit" outline={false}/>

                                    
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