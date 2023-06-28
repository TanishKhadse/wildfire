'use client'

import { BiPlus } from 'react-icons/bi'
import AddImageModal from './modals/add-image-modal'
import useAddModal from '../hooks/UseAddModal'
import Item from './item';


interface ImageGridProps {
    items: string[]
}

const ImageGrid: React.FC<ImageGridProps> = (
    items
) => {
    /** set images to get (images and names): 
         * {
         *  image: '',
         *  name: "name"
         * }
     */

    const addImageModal = useAddModal();

    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center text-[28px] absolute right-12">
                
            <BiPlus className="cursor-pointer" onClick={addImageModal.onOpen}/>
            </div>
            <div className="
                grid 
                grid-cols-5
                grid-rows-6
                gap-[15px]
                mr-10
                ml-5
                pt-10

            ">
                {items.items.map((img: string) => 
                    <Item label = {img} src = {''}/> 
                )}

            </div>
        </div>

    );
}

export default ImageGrid