import Image from "next/image"
import {useSortable} from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"
import { useState } from "react"
import { BiX } from "react-icons/bi"

import useDeleteItems from "../hooks/UseDeleteItems"

interface SortableItemProps {
    id: string;
    src: string | null | undefined;
}
const SortableItem: React.FC<SortableItemProps> = ({
    id,
    src
}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    const del = useDeleteItems().isActive

    const [clicked, setClicked] = useState(false)

    const click = () => {
        setClicked(!clicked)
    }


    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <div className = "cursor-move bg-stone-0 w-[90px] h-[90px] flex items-center select-none group relative">
                <div className = "w-[90px] h-[90px] invisible group-hover:visible bg-neutral-100">
                    <p className = "text-center">
                        {id}
                    </p>
                </div>

                <div className = "w-[90px] h-[90px] absolute flex group-hover:invisible">
                    <Image
                        width = "90"
                        height = "90"
                        src={src || '/chiyo.png'}
                        style={{objectFit: 'none'}}
                        alt=""
                    />
                </div>
                {del && (<div className={`
                    absolute
                    top-0
                    rounded-full
                    border-red-500
                    ${clicked ?  'bg-red-300' : 'bg-neutral-300'}
                    w-4
                    h-4
                `}
                    onClick={click}
                >
                    <BiX/>
                </div>
                )}

            </div>

        </div>
    )
}

export default SortableItem