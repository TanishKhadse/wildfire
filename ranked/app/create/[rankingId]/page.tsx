'use client'

import { getRankingById } from '@/app/actions/getRankingById';
// import { DndProvider } from 'react-dnd';
import { useEffect, useState } from 'react';
import { HTML5Backend } from "react-dnd-html5-backend";
import TierList from '@/app/components/tier-list';
import { useRouter } from 'next/router';

interface IParams {
    rankingId: string,

}

// use queries to get username from uid, and related tier lists
const Create = async ({params}: {params: IParams}) => {
    const ranking = await getRankingById(params)
    // const [rankingData, setRankingData] = useState(ranking);
    // useEffect(() => {

    // }, [])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await getRankingById(params)
    //             return data

    //         } catch (error) {
    //             return null
    //         }
    //     }

    //     if (params) {
    //         data = fetchData()
    //     }
    // }, [params, data])

    return (

        <div className="mt-10">
            {typeof ranking == null ? (
                <div>
                    Nothing Found Here
                </div>
            ) : (
                <div>
                    {/* <DndProvider backend={HTML5Backend}> */}
                        {/* <CreatePage title={ranking?.title}/> */}
                        <TierList title={ranking?.title} edit={true}/>
        
                    {/* </DndProvider> */}
                </div>

            )}
        </div>
        // <div></div>
    );
} 


export default Create