import useSWR from "swr"
import fetcher from "../lib/fetcher" 

const useCurrentUser = () => {
    const {data, error, isLoading, mutate } = useSWR('/api/current', fetcher);
    
    return {
        data,
        error,
        isLoading,
        mutate
    }
}


export default useCurrentUser

/**
 * SWR fetches /api/current using axios fetcher, and store info in global store; 
 * we can reuse useCurrentUser hook
 */