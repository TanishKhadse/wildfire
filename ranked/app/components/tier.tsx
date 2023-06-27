import Item from './item';
interface TierProps {
    label: String;
    items: String[]
}


const Tier: React.FC<TierProps> = ({label, items}) => {
    return (
        <div className="
            flex
            py-2
            items-center
            border-b-[1px]
            border-b-neutral-300
        ">
            <div className="
                text-5xl
                w-[50px]
            ">
                {label}
            </div>
            <div className="
                flex
                flex-row
                flex-wrap
                h-auto
                max-w-2xl
                gap-2
            ">
                {items.map((item)=> 
                <Item label = {item} src = {''}/>
                )}

            </div>

        </div>
    );
}
export default Tier;

