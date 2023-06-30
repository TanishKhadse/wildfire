import { Item } from '@prisma/client';
import { useState } from "react"
import SortableItem from './sortable-item'
import { useDroppable } from "@dnd-kit/core"
import {
    SortableContext,
    horizontalListSortingStrategy
} from "@dnd-kit/sortable"


interface TierProps {
    label: string;
    items: Item[]
    onDelete: (label: string) => void;
}


const Tier: React.FC<TierProps> = ({label, items}) =>{
    // const [itemArray, setItems] = useState(items);

    return (
        <div className="
            p-3 
            flex
            py-2
            items-center
            border-b-[1px]
            border-b-neutral-300
        ">
            <p className="text-5xl w-[50px]">
                {label}
            </p>
            <div className="
                flex
                flex-row
                flex-wrap
                h-auto
                max-w-2xl
                gap-2
            ">
            
                <SortableContext
                    id={label}
                    items={items}
                    strategy={horizontalListSortingStrategy}
                >
                    {items.map(item => 
                        <SortableItem id={item.label} src={item.image}/>
                    )}
                </SortableContext>
            </div>
        </div>
            
    );

}
export default Tier;

