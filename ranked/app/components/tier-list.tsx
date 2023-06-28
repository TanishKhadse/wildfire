import Tier from "./tier"
import ImageGrid from "./image-grid";
import { Item } from "@prisma/client"

interface TierListProps {
    gallery: Item[]
}
const TierList: React.FC<TierListProps> = ({
    gallery
    }
) => {



    return(
        <div className ="flex flex-row gap-20">
            <div className="
                flex
                flex-col
                select-none
                w-full
                basis-3/4
            ">
                
                <Tier label='S' items={[{label: "frost", image: '', id: '', rankingId: ''}]}/>
                <Tier label='A' items={[{label: "nidus", image: '', id: '', rankingId: ''}]}/>
                <Tier label='B' items={[{label: "banshee", image: '', id: '', rankingId: ''}]}/>
                <Tier label='C' items={[{label: "loki", image: '', id: '', rankingId: ''}]}/>
                <Tier label='D' items={[]}/>
                <Tier label='F' items={[{label: "mesa", image: '', id: '', rankingId: ''}]}/>


            </div>
            <div className="basis-1/4">
                <ImageGrid items={gallery}/>
            </div>
            
        </div>
    );
}

export default TierList