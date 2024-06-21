import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useFetchTrainer = () => {
    const axiosSecure = useAxiosSecure()
    const {user, loader} = useAuth()
    const {data: fetchTrainer = [], isLoading} = useQuery({
        queryKey: ["fetchTrainer"], 
        enabled: !loader && !!user?.email, 
        queryFn: async() =>{
            // const {data} = await axiosSecure(`/trainer/${user?.email}`)
            const {data} = await axiosSecure(`/fetchTrainer/${user?.email}`)
            return data
        } 
    })
    return [fetchTrainer, isLoading]
}

export default useFetchTrainer;