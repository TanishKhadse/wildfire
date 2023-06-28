import Image from "next/image"
import {useSortable} from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"
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

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <div className = "cursor-move bg-stone-0 w-[90px] h-[90px] flex items-center select-none group">
                <div className = "w-[90px] h-[90px] invisible group-hover:visible">
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
            </div>

        </div>
    )
}

export default SortableItem