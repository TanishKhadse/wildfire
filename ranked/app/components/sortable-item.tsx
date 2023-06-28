import Image from "next/image"
import {useSortable} from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"
export function SortableItem(props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <div className = "cursor-move bg-stone-0 w-[90px] h-[90px] flex items-center select-none group">
                <div className = "w-[90px] h-[90px] invisible group-hover:visible">
                    <p className = "text-center">
                        {props.id}
                    </p>
                </div>

                <div className = "w-[90px] h-[90px] absolute flex group-hover:invisible">
                    <Image
                        width = "90"
                        height = "90"
                        src = {'/chiyo.png'}
                        alt=""
                    />
                </div>
            </div>

        </div>
    )
}