import Image from "next/image"
// import {useSortable} from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"
import { useState } from "react"
import { BiX } from "react-icons/bi"
import { Item } from "@prisma/client"

import useDeleteItems from "../hooks/UseDeleteItems"
import { useDrag } from "react-dnd"

interface SortableItemProps {
    label: string;
    id: string;
    src: string | null | undefined;
    onSelect?: (id: string) => void;
    selected: boolean;
    currItem: Item;
}
const SortableItem: React.FC<SortableItemProps> = ({
    label,
    id,
    src,
    onSelect,
    selected,
    currItem,

}) => {


    const [{ isDragging }, drag] = useDrag(() => ({
        type: "item",
        item: currItem,
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))

    // const del = useDeleteItems().isActive
    const [clicked, setClicked] = useState(false)

    const click = () => {
        setClicked(!clicked)
        if (!onSelect) return;
        onSelect(label)
    }


    return (
        <div ref={drag}>
            <div className = "cursor-move bg-stone-0 w-[90px] h-[90px] flex items-center select-none group relative">
                <div className = "w-[90px] h-[90px] invisible group-hover:visible bg-neutral-100">
                    <p className = "text-center">
                        {label}
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
                {useDeleteItems().isActive && (<div className={`
                    absolute
                    top-0
                    rounded-full
                    border-red-500
                    ${selected ?  'bg-red-300' : 'bg-neutral-300'}
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