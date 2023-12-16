'use client'

import CreatePage from '../components/create-page';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";


// all elements for create page go here

export default function Create() {
    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <CreatePage />
            </DndProvider>
        </div>
    );
}