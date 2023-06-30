import { BiX } from "react-icons/bi";
import { useState } from "react";

interface TierLabelProps {
    label: string;
    onDelete: (label: string) => void;
}

const TierLabel: React.FC<TierLabelProps> = ({
    label,
    onDelete
}) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="w-[25px] h-[50px] cursor-pointer select-none relative"
        onMouseEnter={()=>setIsShown(true)}
        onMouseLeave={()=>setIsShown(false)}
    >
        {isShown && 
        (
        <div 
            onClick={() => onDelete(label)}
            className="                                   
                absolute
                top-0
                rounded-full
                 bg-red-500
                 w-2
                 h-2
                 flex
                 items-center
                 justify-center
                 right-0
        ">                                    
            <BiX className="text-sm text-white"/> 
        </div>
        
        )} 

        <div className="text-2xl">
            {label}
        </div>
    </div>
    );
}

export default TierLabel