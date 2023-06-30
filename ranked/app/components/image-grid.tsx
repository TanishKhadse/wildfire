'use client'

import useAddModal from '../hooks/UseAddModal'
import { Item } from '@prisma/client'
import SortableItem from './sortable-item'

interface ImageGridProps {
    items: Item[];
    addToDeleteList: (id: string) => void;
    deselect: (id: string) => void;
    selectedItems: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({
    items,
    addToDeleteList,
    deselect,
    selectedItems,
}) => {

    const handleSelectItems = (id: string) => {
        const index = selectedItems.indexOf(id);
        if (index === -1) {
            addToDeleteList(id);
        } else {
            deselect(id)
        }
    }

    return (
        <div>
            <div className="
                flex
                flex-wrap
                gap-5
                py-2
            ">

                {items.map((i: Item) => 
                    <SortableItem label={i.label} src={i.image} id={i.label} onSelect={handleSelectItems} selected={selectedItems.includes(i.label)}/> // fix id=
                )}

            </div>
        </div>

    );
}

export default ImageGrid