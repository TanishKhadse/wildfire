// 'use client'

import { getFeatured } from './actions/getFeatured';
import ClientOnly from './components/client-only';



// all elements for home page should go here


export default async function Home() {
  const rankings = await getFeatured();


  return (
      <ClientOnly>
        <div className="flex flex-col">
          <div className="
            flex
            w-[100%]
            justify-center
          ">

            <div className="
              flex
              text-xl
              py-[20vh]
            
            ">
              A highly customizable way of creating tier lists
            </div>

            <div className="
              flex
              text-xl
              py-40
            
            ">
              and sharing them online to your network.
            </div>

          </div>
          <div className="mx-[10%]">
            Featured Rankings
          </div>
          <div className="mx-[5%] w-[90%] flex flex-wrap">
              {rankings?.map((ranking: any, index) => (
                <div key={index} className="w-[30%]  h-[100px] mx-5 my-5 border-[1px] border-slate-400">
                  {ranking.title}
                </div>
              ))}
          </div>
        </div>
      </ClientOnly>


  );


}
