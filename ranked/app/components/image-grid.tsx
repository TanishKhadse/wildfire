'use client'

import useAddModal from '../hooks/UseAddModal'
import { Item } from '@prisma/client'
import SortableItem from './sortable-item'
import { useDrop } from 'react-dnd';

interface ImageGridProps {
    label: string,
    items: Item[];
    select: (id: string) => void;
    deselect: (id: string) => void;
    selectedItems: string[];
    onAddItem: (item: Item) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({
    label,
    items,
    select,
    deselect,
    selectedItems,
    onAddItem,
}) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "item",
        drop: (item: Item) => onAddItem(item),
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

    // const addItem = (item: string) => {
    //     console.log("dropped", item)
    // }

    return (
        <div >
            <div 
                ref={drop}
                className="
                flex
                flex-wrap
                gap-5
                py-2
                border-[1px]
                border-red-500
            ">

                {items.map((i: Item) => 
                    <SortableItem 
                        label={i.label} 
                        src={i.image} 
                        id={i.label} 
                        onSelect={handleSelectItems} 
                        selected={selectedItems.includes(i.label)} 
                        currItem={i}
                    /> // fix id=
                )}

            </div>
        </div>

    );
}

export default ImageGrid