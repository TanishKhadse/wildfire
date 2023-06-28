'use client'

import { Item } from '@prisma/client'
import InputTitle from './inputs/input-title'
import TierList from './tier-list'
import ImageGrid from './image-grid'
import { BiCog } from 'react-icons/bi'
import useSettingsModal from '../hooks/UseSettingsModal'
import SettingsModal from './modals/settings-modal'
import AddImageModal from './modals/add-image-modal'
import { useState } from 'react'


export default function CreatePage() {

    const settingsModal = useSettingsModal()

    const [items, setItems] = useState<Item[]>([]);

    const handleAddItems = (newItems: Item[]) => {
        setItems([...items, ...newItems])
        console.log(...newItems)
    }

    return (
        <div>
            <AddImageModal onAddItems={handleAddItems}/>
            <SettingsModal />

            <div className="flex justify-between">  
                <div className="
                    flex 
                    flex-col 
                    ml-10                     
                ">
                    <div className="
                        flex 
                        flex-row 
                        items-center 
                        mt-10 
                        justify-between 
                        border-b-[1px]
                        border-b-neutral-300
                        w-[60vw]

                    ">
                        <InputTitle/>
                        <div className="mr-5">
                            <BiCog className="cursor-pointer" onClick={settingsModal.onOpen}/>
                        </div>
                        

                    </div>
                    
                    <TierList />
                </div>


                <div className="mt-10">
                 <ImageGrid items={items}/>

                </div>
            </div>

            
        </div>
    );
}
