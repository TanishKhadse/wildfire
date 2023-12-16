import { Item } from '@prisma/client';
import { useState, useEffect } from "react"
import SortableItem from './sortable-item'
import itemTypes from '../types/itemTypes';
import { useDrop } from 'react-dnd';


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

    const [{ isOver }, drop] = useDrop(() => ({
        accept: itemTypes.ITEM,
        drop: (item: Item) => {
            console.log(label, item.label)
            addItem(label, item)
        },
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))


      
    const handleSelectItems = (id: string) => {
        const index = selectedItems.indexOf(id);
        if (index === -1) {
            select(id);
        } else {
            deselect(id)
        }
    }

    var id_count = 0;
    

    return (
        <div
            ref={drop} 
            className="
            p-3 
            flex
            py-2
            items-center
            border-b-[1px]
            border-b-neutral-300
        ">
            <p className="text-5xl w-[50px]"
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
            
                {items && items.map(i => 
                    <SortableItem 
                        id={i.label} 
                        src={i.image} 
                        label={i.label} 
                        onSelect={handleSelectItems} 
                        selected={selectedItems.includes(i.label)}
                        currItem={i} 
                    />
                )}
            </div>
        </div>
            
    );

}
export default Tier;

