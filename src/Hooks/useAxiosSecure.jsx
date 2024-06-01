import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_SERVER,

})
const useAxiosSecure = () => {
    return axiosSecure()
};

export default useAxiosSecure;