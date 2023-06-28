import Item from './item';
import handleOnDrop from './create-page'
import handleDragOver from './create-page'
import CreatePage from './create-page';
import { useState } from "react"
import {SortableItem} from './sortable-item'
import {
    DndContext,
    closestCenter
} from "@dnd-kit/core"
import {
    arrayMove,
    SortableContext,
    horizontalListSortingStrategy
} from "@dnd-kit/sortable"

interface TierProps {
    label: string;
    items: string[]
}


const Tier: React.FC<TierProps> = ({label, items}) =>{
    const [itemArray, setItems] = useState(items);

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <div className="p-3 flex
            py-2
            items-center
            border-b-[1px]
            border-b-neutral-300">
                <p className="text-5xl
                w-[50px]">{label}</p>
                <SortableContext
                    items={itemArray}
                    strategy={horizontalListSortingStrategy}
                >
                    {itemArray.map(item => <SortableItem key={item} id={item}/>)}
                </SortableContext>
            </div>
            
        
        </DndContext>
    );

    function handleDragEnd(event: { active: any; over: any; }) {
    
        const {active, over} = event;
        if(active.id != over.id) {
            setItems((items) => {
                const activeIndex = items.indexOf(active.id);
                const overIndex = items.indexOf(over.id);
                return arrayMove(items, activeIndex, overIndex);
            });
        }
    }
}
export default Tier;

