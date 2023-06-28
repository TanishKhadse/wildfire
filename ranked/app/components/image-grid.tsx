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
        <div className="flex flex-col">
            <div className="flex flex-row items-center text-[28px] absolute right-12 gap-[10px]">
                <BiTrash className="cursor-pointer text-lg" onClick={()=>{}}/>
                <BiPlus className="cursor-pointer" onClick={addImageModal.onOpen}/>
            </div>
            <div className="
                grid 
                grid-cols-5
                grid-rows-6
                gap-[100px]
                mr-10
                ml-5
                pt-10
            ">

                {items.items.map((i: Item) => 
                    <SortableItem id={i.label} src={i.image} /> 
                )}

            </div>
        </div>

    );
}

export default ImageGrid