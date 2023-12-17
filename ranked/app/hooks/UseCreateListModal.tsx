import {create} from 'zustand'

interface AuthModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


const useCreateTierListModal = create<AuthModalStore>((set, get) => ({
    isOpen: false,
    register: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default useCreateTierListModal;