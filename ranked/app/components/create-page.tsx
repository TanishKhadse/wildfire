'use client'

import InputTitle from './input-title'
import TierList from './tier-list'
import ImageGrid from './image-grid'
import { BiCog } from 'react-icons/bi'
import useSettingsModal from '../hooks/UseSettingsModal'

export default function CreatePage() {

    const settingsModal = useSettingsModal()

    return (
        <div>


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
                 <ImageGrid />

                </div>
            </div>

            
        </div>
    );
}