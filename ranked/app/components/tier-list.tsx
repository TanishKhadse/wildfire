import Tier from "./tier"
import ImageGrid from "./image-grid";
import Item from "@prisma/client"
interface TierListProps {
    gallery: Item[]
}
const TierList: React.FC<TierListProps> = ({
    gallery
    }
) => {



    return(
        <div className ="flex flex-row">
            <div className="
                mt-5
                flex
                flex-col
                select-none
                px-5
            ">
                
                <Tier label='S' items={[{label: "frost", image: '', id: '', rankingId: ''}]}/>
                <Tier label='A' items={[{label: "nidus", image: '', id: '', rankingId: ''}]}/>
                <Tier label='B' items={[{label: "banshee", image: '', id: '', rankingId: ''}]}/>
                <Tier label='C' items={[{label: "loki", image: '', id: '', rankingId: ''}]}/>
                <Tier label='D' items={[]}/>
                <Tier label='F' items={[{label: "mesa", image: '', id: '', rankingId: ''}]}/>


            </div>
            <div className = "flex flex-row items-center mt-10 justify-between w-[60vw] border-b-[1px] border-b-neutral-300">
            <ImageGrid items={gallery}/>
            </div>
            
        </div>
    );
}

export default TierList