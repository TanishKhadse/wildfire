import { BiPlus } from 'react-icons/bi'

export default function ImageGrid() {
    /** set images to get (images and names): 
         * {
         *  image: '',
         *  name: "name"
         * }
     */
    const images= ["yareli", "octavia", "citrine", "mirage", "hydroid", "gara"] 

    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center text-[28px] absolute right-12">
                
            <BiPlus />
            </div>
            <div className="
                grid 
                grid-cols-5
                grid-rows-6
                gap-[15px]
                mr-10
                ml-5
                pt-10

            ">
                {images.map((img) => 
                    <div className="bg-red-400 h-[70px] w-[70px] flex items-center justify-center">
                        {img}
                    </div>
                )}

            </div>
        </div>

    );
}