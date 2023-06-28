'use client'

import { BiPlus, BiTrash } from 'react-icons/bi'
import AddImageModal from './modals/add-image-modal'
import useAddModal from '../hooks/UseAddModal'
import { Item } from '@prisma/client'
import SortableItem from './sortable-item'



interface ImageGridProps {
    items: Item[]
}

const ImageGrid: React.FC<ImageGridProps> = (
    items
) => {

    const addImageModal = useAddModal();

    return (
        <div>
            <div className="
                flex
                flex-wrap
                gap-5
                py-2
            ">

                {items.items.map((i: Item) => 
                    <SortableItem id={i.label} src={i.image} /> 
                )}

            </div>
        </div>

    );
}

export default ImageGrid