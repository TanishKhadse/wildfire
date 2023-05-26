import { use } from 'react';
import {create} from 'zustand'

interface AuthModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


/**
 * create 
 * 
 * 
 * set() used to manipulate Store (AuthModalStore)
 * takes an object
 * 
 * 
 * overall creates a "controller" - 
 * isOpen, onOpen, on Close are defined for the entire application
 */

const useAuthModal = create<AuthModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default useAuthModal;