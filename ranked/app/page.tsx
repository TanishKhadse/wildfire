'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { getFeatured } from './actions/getFeatured';



// all elements for home page should go here

export default async function Home() {
  const [rankingList, setRankings] = useState([{title: "Waframe Tier List"}, {title: "W2"}])
  // const rankings = await getFeatured();
  // console.log(typeof rankings[0])

  // if (rankings) {
  //   for (var i = 0; i < rankings?.length; ++i) {
  //     setRankings([...rankingList, rankings[i]])
  //   }
  // }

  // useEffect(() => {

  // }, [])

  return (
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
      <div className="mx-[5%] w-[90%] h-[100px] border-[1px] border-slate-400">

          {rankingList?.map((ranking) => (
            <div>
              {ranking.title}
            </div>
          ))}
      </div>
    </div>


  );
}
