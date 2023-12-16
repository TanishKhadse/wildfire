import Tier from "./tier"
import ImageGrid from "./image-grid";
import { Item } from "@prisma/client"
import { useState } from "react";
import InputTitle from './inputs/input-title'
import { BiCog, BiPlus, BiTrash, BiCheck } from 'react-icons/bi'

import useSettingsModal from '../hooks/UseSettingsModal'
import useAddModal from '../hooks/UseAddModal'
import useDeleteItems from '../hooks/UseDeleteItems'

import SettingsModal from './modals/settings-modal'
import AddImageModal from './modals/add-image-modal'


// Drag and Drop Logic
// import {
//     DndContext,
//     DragOverlay,
//     pointerWithin,
//     KeyboardSensor,
//     PointerSensor,
//     useSensor,
//     useSensors
// } from "@dnd-kit/core";
// import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"




interface TierListProps {
    edit?: boolean;
}
const TierList: React.FC<TierListProps> = ({
    edit
}) => {
    // hooks
    const settingsModal = useSettingsModal()
    const addImageModal = useAddModal()
    const deleteItems = useDeleteItems()


    // store items in bank
    const [itemBank, setItemBank] = useState<Item[]>([]);

    const handleAddItem = (newItem: Item) => {
        setItemBank([...itemBank, newItem])
        console.log(itemBank)
    }

    // store tiers and their items using map
    const [mapState, setMapState] = useState(new Map<string, Item[]>([
        ['S', []], 
        ['A', []], 
        ['B', []], 
        ['C', []], 
        ['D', []], 
        ['F', []]
    ]));

    const [tiers, setTiers] = useState<string[]>(Array.from(mapState.keys())) // used for tier order

    const addToMap = (key: string) => {
        const newMap = new Map(mapState);
        newMap.set(key, []);
        setMapState(newMap);
        setTiers([...tiers, key])
      };
      
      const removeFromMap = (key: string) => {
        const newMap = new Map(mapState);
        newMap.delete(key);
        setMapState(newMap);
        setTiers(tiers.filter((t) => t !== key))
      };
      
      const addItemToTier = (key: string, value: Item) => {
        if (!mapState) return;
        const map = new Map(mapState)
        const currItems = map.get(key)
        
        if (!currItems) {
            map.set(key, [value])
        } else {
            map.set(key, [...currItems, value])
            console.log("new Item")
        }

        setMapState(map);

        // console.log(mapState)
      }

    //   const deleteItemFromTier = (key: string, value: Item) => {
    //     if (!mapState) return;
    //     const map = new Map(mapState)
    //     const currItems = map.get(key)

    //     if (!currItems) {
    //         map.set(key, [])
    //     } else {
            // map.set(key, currItems.filter((curr) => curr.label !== value.label))
    //     }

    //     setMapState(map);
    //   }



    // delete items in bank
    const [selectedItems, setSelectedItems] = useState<string[]>([]); // selects based on id's

    const select = (id: string) => {
        setSelectedItems([...selectedItems, id])
    }
    const deselect = (id: string) => { 
        setSelectedItems(selectedItems.filter((item) => item !== id))
    }


    // click on check icon
    const handleDeleteItems = () => {
        setItemBank(itemBank.filter((item) => !selectedItems.includes(item.label)));

        const map = new Map(mapState)
        Array.from(mapState.keys()).forEach(t => {
            const value = map.get(t)
            if (!Array.isArray(value)) return;
            map.set(t, value.filter((i) => !selectedItems.includes(i.label)))
            // console.log(map.get(t))
            
        })

        setMapState(map)
        setSelectedItems([])
        deleteItems.deactivate()
        console.log(itemBank)
    }
      

    return(
        <div>
            <AddImageModal onAddItem={handleAddItem}/>
            <SettingsModal tiers={Array.from(mapState.keys())} onAddTier={addToMap} onDelete={removeFromMap}/>
             <div className="flex flex-col ml-[5vw] w-[90vw]">
                {edit && <div className="
                    flex 
                    flex-row 
                    items-center 
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
                        (<BiCheck className="cursor-pointer text-lg" onClick={handleDeleteItems}/>) :
                        (<BiTrash className="cursor-pointer text-lg" onClick={deleteItems.activate}/>)}

                        <div className="text-lg">
                            <BiPlus className="cursor-pointer" onClick={addImageModal.onOpen} />   
                        </div>
                    </div>
                </div>}
                <div className ="flex flex-row gap-20">
                    <div className="
                        flex
                        flex-col
                        select-none
                        w-full
                        basis-3/4
                    ">
                        {/* Tiers */}
                        {tiers.map(tier => 
                        
                        
                            ( <Tier 
                                label={tier} 
                                items={mapState.get(tier)}
                                addItem={addItemToTier}
                                select={select} 
                                deselect={deselect} 
                                selectedItems={selectedItems}
                            />)
                        )}
                    </div>

                        {/* Image bank */}
                    <div className="basis-1/4">
                        <ImageGrid 
                            label="gallery"
                            items={itemBank} 
                            select={select} 
                            deselect={deselect} 
                            selectedItems={selectedItems}
                            onAddItem={handleAddItem}
                        />
                    </div>
                </div>
            </div>
        </div>

    );

}

export default TierList