import InputTitle from './input-title'
import TierList from './tier-list'
import ImageGrid from './image-grid'

export default function CreatePage() {
    return (
        <div>
            <div className="flex justify-between">  
                <div>
                    <InputTitle/>
                    <TierList />
                </div>
                <ImageGrid />
            </div>

            
        </div>
    );
}