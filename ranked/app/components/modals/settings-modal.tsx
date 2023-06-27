'use client'

import useSettingsModal from "@/app/hooks/UseSettingsModal";
import Modal from "./modal";
import { useState } from 'react'

export default function SettingsModal() {

    const settingsModal = useSettingsModal()
    const [ isLoading, setIsLoading ] = useState(false);
    
    const saveSettings = () => {
        // submit handler
    }

    const body = (
        <div>
            <input type="checkbox" id="settings-btn"/>
        </div>
    )

    const footer = (
        <div>

        </div>
    )
    return (
        <Modal 
            isOpen={settingsModal.isOpen}
            onClose={settingsModal.onClose} 
            onSubmit={()=>{}} 
            actionLabel="Save"
            title="Settings"
            body={body}
            footer={footer}
        />
    )
}