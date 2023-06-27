import Image from "next/image"
import { StringLiteral } from "typescript";

interface ItemProps {
    label: string;
    src: string;
    onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void;
}
const Item: React.FC<ItemProps> = ({
    label,
    src,
    onClick,
}) => {
    return (
        <div className = "bg-stone-0 w-[90px] h-[90px] flex items-center select-none group">
            <div className = "w-[90px] h-[90px] invisible group-hover:visible">
                <p className = "text-center">
                    {label}
                </p>
            </div>

            <div className = "w-[90px] h-[90px] absolute flex group-hover:invisible">
                <Image
                    width = "90"
                    height = "90"
                    src = {src}
                    alt=""
                />
            </div>
            
        </div>
    )
}
    
export default Item;