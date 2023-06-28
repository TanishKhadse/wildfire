'use client'

import { Item } from '@prisma/client'
import InputTitle from './inputs/input-title'
import TierList from './tier-list'
import ImageGrid from './image-grid'
import { BiCog, BiPlus, BiTrash } from 'react-icons/bi'
import useSettingsModal from '../hooks/UseSettingsModal'
import useAddModal from '../hooks/UseAddModal'
import SettingsModal from './modals/settings-modal'
import AddImageModal from './modals/add-image-modal'
import { useState } from 'react'


export default function CreatePage() {

    const settingsModal = useSettingsModal()
    const addImageModal = useAddModal()

    const [items, setItems] = useState<Item[]>([]);

    const handleAddItems = (newItems: Item[]) => {
        setItems([...items, ...newItems])
        console.log(...newItems)
    }

    return (
        <div>
            <AddImageModal onAddItems={handleAddItems}/>
            <SettingsModal />

            <div className="">  
                <div className="
                    flex 
                    flex-col 
                    ml-[5vw]  
                    w-[90vw]                 
                ">
                    <div className="
                        flex 
                        flex-row 
                        items-center 
                        mt-10 
                        justify-between 
                        border-b-[1px]
                        border-b-neutral-300
                    ">
                        <div className="w-auto">
                            <InputTitle/>
                        </div>
                        
                        <div className="flex justify-between gap-[10px]">
                            <BiCog className="cursor-pointer" onClick={settingsModal.onOpen}/>
                            <BiTrash className="cursor-pointer text-lg" onClick={()=>{}}/>
                            <div className="text-lg">
                                <BiPlus className="cursor-pointer" onClick={addImageModal.onOpen} />   
                            </div>
                        </div>
                    </div>
                    
                    <TierList gallery={items}/>
                    
                </div>
            </div>


            
        </div>
    );
}
