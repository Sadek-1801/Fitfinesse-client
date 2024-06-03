import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchClassess = () => {
    const {data: classes = [], isLoading} = useQuery({
        queryKey: ["fetchClass"], 
        queryFn: async() =>{
            const {data} = await axios(`${import.meta.env.VITE_SERVER}/classes`)
            const gymClass = data.map(item => item.title)
            return gymClass
        } 
    })
    return [classes, isLoading]
}

export default useFetchClassess;