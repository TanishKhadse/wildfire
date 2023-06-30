'use client'

import { useCallback, useState } from 'react'
import { Item } from '@prisma/client'
import InputTitle from './inputs/input-title'
import TierList from './tier-list'
import { BiCog, BiPlus, BiTrash, BiCheck } from 'react-icons/bi'

import useSettingsModal from '../hooks/UseSettingsModal'
import useAddModal from '../hooks/UseAddModal'
import useDeleteItems from '../hooks/UseDeleteItems'

import SettingsModal from './modals/settings-modal'
import AddImageModal from './modals/add-image-modal'


export default function CreatePage() {

    const settingsModal = useSettingsModal()
    const addImageModal = useAddModal()
    const deleteItems = useDeleteItems()

    const [items, setItems] = useState<Item[]>([]);
    const [tiers, setTiers] = useState<string[]>(['S', 'A', 'B', 'C', 'D', 'F'])



    const handleAddItems = (newItems: Item[]) => {
        setItems([...items, ...newItems])
        console.log(...newItems)
    }

    const handleAddTiers = (newTiers: string[]) => {
        setTiers([...tiers, ...newTiers])
    }



    const handleDeleteTier = (label: string) => {
        const updatedTierList = tiers.filter((l) => l !== label)
        setTiers(updatedTierList)
    }

    return (
        <div>
            <AddImageModal onAddItems={handleAddItems}/>
            <SettingsModal onAddTier={handleAddTiers} tiers={tiers} onDelete={handleDeleteTier}/>

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
                        <div className="w-full">
                            <InputTitle/>
                        </div>
                        
                        <div className="flex justify-between gap-[10px]">
                            <BiCog className="cursor-pointer" onClick={settingsModal.onOpen}/>
                            {deleteItems.isActive ? 
                            (<BiCheck className="cursor-pointer text-lg" onClick={deleteItems.deactivate}/>) :
                            (<BiTrash className="cursor-pointer text-lg" onClick={deleteItems.activate}/>)}

                            <div className="text-lg">
                                <BiPlus className="cursor-pointer" onClick={addImageModal.onOpen} />   
                            </div>
                        </div>
                    </div>

                    <TierList gallery={items} tiers={tiers}/>
                    
                </div>
            </div>


            
        </div>
    );
}
