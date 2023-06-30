import {create} from 'zustand'

interface DeleteItemsStore {
    isActive: boolean;
    activate: () => void;
    deactivate: () => void;
}


const useDeleteItems = create<DeleteItemsStore>((set) => ({
    isActive: false,
    activate: () => set({isActive: true}),
    deactivate: () => set({isActive: false}),
}));

export default useDeleteItems;
