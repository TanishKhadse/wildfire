import Tier from "./tier"
export default function TierList() {



    return(
        <div>
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
        </div>
    );
}