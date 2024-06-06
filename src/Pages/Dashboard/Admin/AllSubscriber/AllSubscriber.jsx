import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AllSubscriber = () => {
    const axiosSecure = useAxiosSecure()
    const {data:subscribers, isLoading} = useQuery({
        queryKey: ["subscribers"],
        queryFn: async() => {
            const {data} = await axiosSecure("/subscribers")
            return data
        }
    })
    if(isLoading) return <p>Loading ...........</p>
    return (
        <div className="overflow-x-auto">
            <div className="flex flex-col items-center justify-center mx-auto sm:w-3/5">
            <h1 className="text-3xl text-white font-bold text-center mb-4">Admin Panel: All Subscribers Information</h1>
            </div>
            <table className="min-w-full bg-gray-900 text-white">
                <thead>
                    <tr className="w-full bg-gray-700 text-left">
                        <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">SL No.</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm">Email</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {subscribers.map((item, index) => (
                        <tr key={item._id} className="bg-gray-800 border-b border-gray-700">
                            <td className="py-3 px-4 w-1/5">{index + 1}</td>
                            <td className="py-3 px-4">{item.email}</td>
                            <td className="py-3 px-4">{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllSubscriber;