
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
                <div className="bg-red-400 h-[70px] w-[70px] flex items-center justify-center">
                    {item}
                </div>
                )}

            </div>

        </div>
    );
}
export default Tier;

