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
                
                <Tier label='S' items={["frost", "oberon", "khora", "wisp","saryn"]}/>
                <Tier label='A' items={["nidus", "volt", "styanax", "mag", "protea", "ivara", "gyre", "harrow", "nekros"]}/>
                <Tier label='B' items={["banshee", "atlas", "hildryn", "rhino"]}/>
                <Tier label='C' items={["loki", "trinity"]}/>
                <Tier label='D' items={[]}/>
                <Tier label='F' items={["mesa"]}/>


            </div>
        </div>
    );
}