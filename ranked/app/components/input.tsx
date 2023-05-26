'use client'
import {UseFormRegister, FieldValues, FieldErrors} from "react-hook-form"

interface InputProps {
    id: string,
    label: string,
    type?: string,
    disabled?: boolean,
    formatPrice?: boolean,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}



const Input: React.FC<InputProps> = ({
    id,
    label,
    type="text",
    disabled,
    formatPrice,
    register,
    required,
    errors
}) => {
    return (
        <div className="
            w-full 
            relative
            pb-4
        ">
            <input
                id={id}
                disabled={disabled}
                {...register(id, {required})}
                placeholder={label}
                type={type}
                className={`
                    peer
                    w-full
                    h-3
                    p-4
                    font-light
                    bg-white
                    border-2
                    rounded-md
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${formatPrice ? 'pl-9' : 'pl-4'}
                    ${errors[id] ? 'border-red-400' : 'border-neutral-400'}
                    ${errors[id] ? 'focus:border-red-400' : 'focus:border-black'}
                `}
            />
            {/* <label className={`
                absolute
                text-md
                top-3
                z-10
                origin-[0]
                ${formatPrice ? 'left-9' : 'left-4'}
                ${errors[id] ? 'text-red-400' : 'text-zinc-300'}
            `}>
                {label}
            </label> */}
        </div>
    );
}

export default Input;