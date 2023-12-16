'use client';

interface DropDownItemProps {
    onClick: () => void;
    label: string;
}

const DropDownItem: React.FC<DropDownItemProps> = ({
    onClick,
    label
}) => {
    return (
        <div onClick={onClick}
            className="
            px-4
            py-3
            font-semibold
        ">
            <p className="transition hover:text-rose-500 select-none">{label}</p>
        </div>
    );
}   

export default DropDownItem;