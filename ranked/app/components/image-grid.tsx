export default function ImageGrid() {
    return (
        <div className="
            border-[1px] 
            border-blue-400 
            grid 
            grid-cols-6
            grid-rows-6
            gap-[15px]
            mr-10
            mt-10
        ">
            <div className="bg-red-400 h-[70px] w-[70px] flex items-center justify-center">
                1
            </div>
            <div className="bg-red-400 h-[70px] w-[70px] flex items-center justify-center">
                2
            </div>
            <div className="bg-red-400 h-[70px] w-[70px] flex items-center justify-center">
                3
            </div>
            <div className="bg-red-400 h-[70px] w-[70px] flex items-center justify-center">
                4
            </div>
            <div className="bg-red-400 h-[70px] w-[70px] flex items-center justify-center">
                5
            </div>
        </div>
    );
}