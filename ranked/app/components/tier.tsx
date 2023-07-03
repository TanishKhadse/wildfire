import { Item } from '@prisma/client';
import { useState, useEffect } from "react"
import SortableItem from './sortable-item'
import { useDroppable } from "@dnd-kit/core"
import {
    SortableContext,
    horizontalListSortingStrategy
} from "@dnd-kit/sortable"


interface TierProps {
    label: string;
    items: Item[] | undefined;
    addItem: (key: string, value: Item) => void;
    select: (id: string) => void;
    deselect: (id: string) => void;
    selectedItems: string[];
}


const Tier: React.FC<TierProps> = ({
    label,
    items,
    addItem,
    select,
    deselect,
    selectedItems
}) =>{

    const handleSelectItems = (id: string) => {
        const index = selectedItems.indexOf(id);
        if (index === -1) {
            select(id);
        } else {
            deselect(id)
        }
    }

    return (
        <div className="
            p-3 
            flex
            py-2
            items-center
            border-b-[1px]
            border-b-neutral-300
        ">
            <p className="text-5xl w-[50px]" onClick={() => addItem(label, {id: '', image: '', label: "frost", rankingId: ''})}
            >
                {label}
            </p>
            <div className="
                flex
                flex-row
                flex-wrap
                h-auto
                max-w-2xl
                gap-2
            "
            >
            
                {/* <SortableContext
                    id={label}
                    items={items}
                    strategy={horizontalListSortingStrategy}
                > */}
                    {items && items.map(i => 
                        <SortableItem id={i.label} src={i.image} label={i.label} onSelect={handleSelectItems} selected={selectedItems.includes(i.label)} />
                    )}
                {/* </SortableContext> */}
            </div>
        </div>
            
    );

}
export default Tier;

