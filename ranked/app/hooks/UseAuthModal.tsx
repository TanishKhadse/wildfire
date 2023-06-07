import { use } from 'react';
import {create} from 'zustand'

interface AuthModalStore {
    isOpen: boolean;
    register: boolean;
    onOpen: () => void;
    onClose: () => void;
    toggleSwitch: () => void;
}


/**
 * create :
 * 
 * set() used to manipulate Store (AuthModalStore)
 * takes an object
 * 
 * overall creates a "controller" - 
 * isOpen, onOpen, on Close are defined for the entire application
 */



/**
 * These settings are defined here, and we call them in auth-modal.tsx 
 * authModal.FUNCTION_NAME is used within the Modal's props
 */
const useAuthModal = create<AuthModalStore>((set, get) => ({
    isOpen: false,
    register: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => {
        set({register: false})
        set({isOpen: false})
    },
    toggleSwitch: () => {
        const b = !get().register;
        set({register: b})
    }
}));

export default useAuthModal;