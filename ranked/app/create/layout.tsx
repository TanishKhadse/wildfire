import AddImageModal from "../components/modals/add-image-modal";
import SettingsModal from "../components/modals/settings-modal";

export default function CreateLayout({ 
    children, 
}: {
    children: React.ReactNode
}) {
    return( 
        <>
        <main>
            <AddImageModal/>
            <SettingsModal />
            {children}
        </main>
        </>
    );
}