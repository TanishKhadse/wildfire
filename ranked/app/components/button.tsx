import {IconType } from 'react-icons';

interface ButtonProps {
    label: string;
    onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void; // remove optional
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({

    label,
    onClick,
    disabled,
    outline,
    small,
    icon
}) => {
    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            className={`
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-lg
                hover:opacity-80
                transition
                w-auto
                p-1
                ${outline ? 'bg-white' : 'bg-orange-400'}
                ${outline ? 'border-black' : 'border-orange-300'}
                ${outline ? 'text-black' : 'text-white'}
                ${small ? 'text-sm' : 'text-md'}
                ${small ? 'py-1' : 'py-3'}
                ${small ? 'font-light' : 'font-semibold'}
                ${small ? 'border-[1px]' : 'border-2'}
            `}>

            {label}
        </button>
    );
}

export default Button;